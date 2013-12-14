/*
 * grunt-css-parse
 * https://github.com/bgu/grunt-css-parse
 *
 * Copyright (c) 2013 Bastian Gutschke
 * Licensed under the MIT license.
 */

'use strict';

var parse = require('css-parse');

module.exports = function( grunt ) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask( 'css_parse', 'Plugin for css parse (https://github.com/visionmedia/css-parse).', function() {
		var options = this.options(),
            space = options.space || null,
            addPosition = options.position || false,
            addSource = options.source || false,
            output;

		// Iterate over all specified file groups.
		this.files.forEach( function( file ) {

			var src = file.src[0];

			if ( typeof src !== 'string' ) {
				src = file.orig.src[0];
			}

			// check for src file
			if ( !grunt.file.exists( src ) ) {
				grunt.log.warn( 'Source file "' + src + '" not found.' );
				return;
			}

            // check if options.source is true, without position being true
            if ( addSource && !addPosition ) {
                grunt.log.warn( 'Source option set without position option.' );
                return;
            }

			// generate JSON
            if ( addPosition && addSource ) {
                output = parse(grunt.file.read( src ), { position: addPosition, source: src });
            }
            else if ( addPosition ) {
                output = parse(grunt.file.read( src ), { position: addPosition });
            }
            else {
                output = parse( grunt.file.read( src ) );
            }

			// write JSON
			grunt.file.write( file.dest, JSON.stringify( output, null, space ) );

			grunt.log.writeln( 'File "' + file.dest + '" created.' );

		} );
	} );

};
