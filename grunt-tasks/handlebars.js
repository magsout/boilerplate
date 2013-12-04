module.exports = function(grunt) {
	var env = 'dev';
	
	//Configuration de handlebars
	//https://github.com/gruntjs/grunt-contrib-handlebars
	grunt.config('handlebars', {				
		compile: {
	    	options: {
	    		namespace 		: "Handlebars.templates",
				partialRegex 	: /^\.partial\.handlebars/,
				processName 	: function(filePath) {
					var pieces = filePath.split("/");
					return pieces[pieces.length - 1].split('.')[0]; 
				},
				processPartialName : function(filePath) { 
					var pieces = filePath.split("/");
					return pieces[pieces.length - 1].split('.')[0]; 
				}
			},
		files: {
	    	"assets/js/templates/build/admin.js": "assets/js/templates/admin/*.handlebars",
			"assets/js/templates/build/front.js": "assets/js/templates/front/*.handlebars"
		}
	  }					
	});
};