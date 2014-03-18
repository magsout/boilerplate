module.exports = function(grunt) {
	var env = 'dev';
	
	//Configuration de autoprefixer
	//https://github.com/nDmitry/grunt-autoprefixer
	grunt.config('autoprefixer', {				
    	options: {
			browsers : ('dist' == env ? ['ff >= 4', 'ie >= 8', 'safari >= 5.1', 'opera >= 12', 'Chrome >=10'] : ['last 2 version'])
		},
		no_dest: {
	  		src: 'assets/css/front.css'
	  	}					
	});
};