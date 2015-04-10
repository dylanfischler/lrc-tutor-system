module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.loadNpmTasks('grunt-forever');

	//Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			express: {
				files: ['server/server.js'/*, 'routes/*', 'lib/*'*/],
				tasks: ['express:dev'],
				options: { spawn:false }
			},
			css: {
				files: ['client/styles/sass/*.scss'],
				tasks: ['sass']
			}
		},
		express: {
			options: {
				livereload: true
			},
			dev: {
				options: {
					script: 'server/server.js',
					node_env: 'development'
				}
			},
			prod: {
				options: {
					script: 'server/server.js',
					node_env: 'production'
				}
			}
		},
		forever: {
		  serv: {
		    options: {
		      index: 'server/server.js',
		      logDir: 'logs',
		      command: 'forever'
		    }
		  }
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					//'client/styles/css/main.css':'client/styles/sass/main.scss',
					'client/styles/css/app.css':'client/styles/sass/app.scss'
				}
			}
		}
	});

	grunt.registerTask('default', ['express:dev','sass', 'watch']);
	grunt.registerTask('development', ['express:dev','sass', 'watch']);
	grunt.registerTask('production', ['express:prod','sass', 'watch']);
	grunt.registerTask('heroku:production', ['express:prod', 'sass', 'watch']);

	//ending grunt task
	grunt.registerTask('stop', ['forever:serv:stop']);
	grunt.registerTask('restart', ['forever:serv:restart']);

}