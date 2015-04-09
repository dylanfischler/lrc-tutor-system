module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.loadNpmTasks('grunt-forever');

	//Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			express: {
				files: ['index.js'/*, 'routes/*', 'lib/*'*/],
				tasks: ['express:dev'],
				options: { spawn:false }
			},
			css: {
				files: ['public/sass/*.scss'],
				tasks: ['sass']
			}
		},
		express: {
			options: {
				livereload: true
			},
			dev: {
				options: {
					script: 'index.js',
					node_env: 'development'
				}
			},
			prod: {
				options: {
					script: 'index.js',
					node_env: 'production'
				}
			}
		},
		forever: {
		  serv: {
		    options: {
		      index: 'index.js',
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
					'public/css/main.css':'public/sass/main.scss'
				}
			}
		}
	});

	grunt.registerTask('default', ['express:dev','sass', 'watch']);
	grunt.registerTask('development', ['express:dev','sass', 'watch']);
	grunt.registerTask('production', ['forever:serv:start','sass', 'watch']);

	//ending grunt task
	grunt.registerTask('stop', ['forever:serv:stop']);
	grunt.registerTask('restart', ['forever:serv:restart']);
}
