/*
 * grunt-css-parse
 * https://github.com/bgu/grunt-css-parse
 *
 * Copyright (c) 2013 Bastian Gutschke
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function( grunt ) {

	// Project configuration.
	grunt.initConfig( {
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp']
		},

		// Configuration to be run (and then tested).
		css_parse: {
			default_options: {
				files: {
					'tmp/default_options.json': 'test/fixtures/small.css'
				}
			},
            default_options_multifile: {
                files: {
                    'tmp/default_options_multifile.json': ['test/fixtures/small.css', 'test/fixtures/large.css']
                }
            },
			custom_options_position: {
				options: {
					position: true
				},
				files: {
					'tmp/custom_options_position.json': 'test/fixtures/small.css'
				}
			},
            custom_options_position_source: {
				options: {
                    position: true,
					source: true
				},
				files: {
					'tmp/custom_options_position_source.json': 'test/fixtures/small.css'
				}
			},
			custom_options_indent: {
				options: {
					space: 4
				},
				files: {
					'tmp/custom_options_indent.json': 'test/fixtures/small.css'
				}
			},
			custom_options_indent_position: {
				options: {
					space: 4,
					position: true
				},
				files: {
					'tmp/custom_options_indent_position.json': 'test/fixtures/small.css'
				}
			},
            custom_options_indent_position_source: {
                options: {
                    space: 4,
                    position: true,
                    source: true
                },
                files: {
                    'tmp/custom_options_indent_position_source.json': 'test/fixtures/small.css'
                }
            },
            custom_options_indent_position_source_multifile: {
                options: {
                    space: 4,
                    position: true,
                    source: true
                },
                files: {
                    'tmp/custom_options_indent_position_source_multifile.json': ['test/fixtures/small.css', 'test/fixtures/large.css']
                }
            },
			custom_options_indent_position_large: {
				options: {
					space: 4,
					position: true
				},
				files: {
					'tmp/custom_options_indent_position_large.json': 'test/fixtures/large.css'
				}
			}
		},

		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js']
		}

	} );

	// Actually load this plugin's task(s).
	grunt.loadTasks( 'tasks' );

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-nodeunit' );

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask( 'test', ['clean', 'css_parse', 'nodeunit'] );

	// By default, lint and run all tests.
	grunt.registerTask( 'default', ['jshint', 'test'] );

};
