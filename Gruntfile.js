module.exports = function(grunt) {


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

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		//Configuration de compass dist: dev: watch:
		//https://github.com/gruntjs/grunt-contrib-compass
		compass: {
			dist: {
				options: {
					config			: 'config.rb',
					environment		: 'production',
					force			: true
				}
			},
			dev: {
				options: {
				config				: 'config.rb'
				}
			},
			watch: {
				options: {
				config				: 'config.rb',
				watch				: true
				}
			}
		},
		
		//Configuration de bower
		//https://github.com/yatskevich/grunt-bower-task
		bower: {
		    install: {
		      options: {
		        targetDir			: './public/assets',
		        install				: true,
		        verbose				: true,
		        cleanTargetDir		: false,
		        cleanBowerDir		: false
		      }
		    }
		},
		
		//Configuraton de imagemin
		//https://github.com/gruntjs/grunt-contrib-imagemin
		imagemin: {                          
			png: {                          
				options: {                       
                    optimizationLevel: 7
				},                 
				files: [
				{
					expand				: true,                  
					cwd					: 'public/assets/images/',                   
					src					: ['**/*.png'],   
					dest				: 'public/assets/images/'                  
				}]
			},
            jpg: {
                options: {
                    progressive: true
                },
                files: [
                    {
					expand				: true,                  
					cwd					: 'public/assets/images/',                   
					src					: ['**/*.jpg'],   
					dest				: 'public/assets/images/'  
                    }
                ]
            }

		},
		
		//Configuration de watch css: scripts:
		//https://github.com/gruntjs/grunt-contrib-watch
		watch: {
			css: {
				files					: 'public/assets/sass/**/*.scss',
				tasks					: ['compass:dev']
			},
			script: {
				files					: 'public/assets/js/templates/**/*.handlebars',
				tasks					: ['handlebars']
			}		
		},
		
		//Configuration de handlebars
		//https://github.com/gruntjs/grunt-contrib-handlebars
		handlebars: {
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
		    	"public/assets/js/templates/build/admin.js": "public/assets/js/templates/admin/*.handlebars",
				"public/assets/js/templates/build/front.js": "public/assets/js/templates/front/*.handlebars"
		    }
		  }
		}
	});	
	
	//Import all module
	require('load-grunt-tasks')(grunt)
	
	// A very basic default task.
	grunt.registerTask('default', 'Log some stuff.', function() {
		grunt.log.write('Logging some stuff...').ok();
	});
	
	//First
	grunt.registerTask('first', ['bower']);
	
	//Distribution
	grunt.registerTask('dist', ['compass:dist', 'imagemin:dist', 'handlebars:compile']);

	//Developpement
	grunt.registerTask('dev', ['watch']);

};

