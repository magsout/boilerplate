module.exports = function(grunt) {

		var env = 'dev';
	/*
		Grunt installation:
		-------------------
		npm install -g grunt-cli

		
		Project Dependencies:
		---------------------
		npm install grunt --save-dev
		npm install grunt-contrib-watch --save-dev
		npm install grunt-contrib-sass --save-dev
		npm install grunt-contrib-imagemin --save-dev
		npm install load-grunt-tasks --save-dev
		npm install grunt-contrib-handlebars --save-dev
		npm install grunt-contrib-compass --save-dev
		npm install grunt-bower-task --save-dev
		npm install grunt-photobox --save-dev
		npm install grunt-autoprefixer --save-dev
		npm install grunt-contrib-cssmin --save-dev
		npm install grunt-combine-media-queries --save-dev
		npm install grunt-concurrent --save-dev
		
		Simple Dependency Install:
		--------------------------
		npm install (from the same root directory as the `package.json` file)
		
		Gem Dependencies:
		-----------------
		gem install image_optim
		
		Project Dependencies:
		---------------------	
		grunt first
		
		Project watching dev
		---------------------	
		grunt dev
		
		Project distribution
		---------------------	
		grunt dist
		
	*/

	 //Check if package.json exists
	 if (!grunt.file.exists('package.json')) {
		 grunt.log.error("Json file is missing!")
		 process.exit(1)
	}

	// Initialize config.
  	grunt.initConfig({
    	pkg: require('./package.json')
	});	
	
	// Load per-task config from separate files.
	grunt.loadTasks('grunt-tasks');
	
	
	//Import all module
	require('load-grunt-tasks')(grunt)
	
	// A very basic default task.
	grunt.registerTask('default', 'Log some stuff.', function() {
		grunt.log.write('Logging some stuff...').ok();
	});
	
	//First
	grunt.registerTask('first', ['bower']);
	
	//Distribution
	grunt.registerTask('dist', function(){
		env = 'dist';
		grunt.task.run('compass:clean', 'compass:dist','imagemin', 'handlebars:compile', 'autoprefixer', 'cmq', 'cssmin' );

	});
	//Clean projet (node_module, bower_component)
	grunt.registerTask('clean', ['bower:clean', 'compass:clean']);	
	

	//Watch
	grunt.registerTask('watch',  function(){
		env = 'dev';
		grunt.task.run('watch');
	});	

	//Developpement
	grunt.registerTask('dev',  function(){
		env = 'dev';
		grunt.task.run('concurrent');
	});

};

