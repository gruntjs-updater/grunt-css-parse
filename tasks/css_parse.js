/*
 * grunt-css-parse
 * https://github.com/bgu/grunt-css-parse
 *
 * Copyright (c) 2013 Bastian Gutschke
 * Licensed under the MIT license.
 */

'use strict';

var parse = require('css-parse');

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('css_parse', 'Plugin for css parse (https://github.com/visionmedia/css-parse).', function () {
        var options = this.options(),
            space = options.space || null,
            addPosition = options.position || false,
            addSource = options.source || false,
            json;

        // check if options.source is true, without position being true
        if (addSource && !addPosition) {
            grunt.log.warn('Source option set without position option.');
            return;
        }

        // Iterate over all specified file groups.
        this.files.forEach(function (file) {

            // Build json
            file
                .src
                .filter(function (filepath) {
                    // Warn on and remove invalid source files (if nonull was set).
                    if (!grunt.file.exists(filepath)) {
                        grunt.log.warn('Source file "' + filepath + '" not found.');
                        return false;
                    }
                    else {
                        return true;
                    }
                })
                .map(function (filepath) {
                    // Read file source.
                    var src = grunt.file.read(filepath),
                        output,
                        rule;

                    // generate JSON
                    if (addPosition && addSource) {
                        output = parse(src, { position: addPosition, source: filepath });
                    }
                    else if (addPosition) {
                        output = parse(src, { position: addPosition });
                    }
                    else {
                        output = parse(src);
                    }

                    // merge rules if more than one source file
                    if (!json) {
                        json = output;
                    }
                    else {
                        for (rule in output.stylesheet.rules) {
                            json.stylesheet.rules.push(output.stylesheet.rules[ rule ]);
                        }
                    }
                });

            // write JSON
            grunt.file.write(file.dest, JSON.stringify(json, null, space));
            grunt.log.writeln('File "' + file.dest + '" created.');

        });

    });

};
