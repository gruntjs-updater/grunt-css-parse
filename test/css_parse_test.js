'use strict';

var grunt = require( 'grunt' );

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.css_parse = {
	setUp: function( done ) {
		// setup here if necessary
		done();
	},
	default_options: function( test ) {
		test.expect( 1 );

		var actual = grunt.file.read( 'tmp/default_options.json' );
		var expected = grunt.file.read( 'test/expected/default_options.json' );
		test.equal( actual, expected, 'Should describe what the default behavior is.' );

		test.done();
	},
    default_options_multifile: function( test ) {
        test.expect( 1 );

        var actual = grunt.file.read( 'tmp/default_options_multifile.json' );
        var expected = grunt.file.read( 'test/expected/default_options_multifile.json' );
        test.equal( actual, expected, 'Should describe what the default behavior is.' );

        test.done();
    },
	custom_options_position: function( test ) {
		test.expect( 1 );

		var actual = grunt.file.read( 'tmp/custom_options_position.json' );
		var expected = grunt.file.read( 'test/expected/custom_options_position.json' );
		test.equal( actual, expected, 'Should have had the position in the generated json.' );

		test.done();
	},
    custom_options_position_source: function( test ) {
        test.expect( 1 );

        var actual = grunt.file.read( 'tmp/custom_options_position_source.json' );
        var expected = grunt.file.read( 'test/expected/custom_options_position_source.json' );
        test.equal( actual, expected, 'Should have had the position and source in the json.' );

        test.done();
    },
	custom_options_indent: function( test ) {
		test.expect( 1 );

		var actual = grunt.file.read( 'tmp/custom_options_indent.json' );
		var expected = grunt.file.read( 'test/expected/custom_options_indent.json' );
		test.equal( actual, expected, 'Should have had indented the json.' );

		test.done();
	},
	custom_options_indent_position: function( test ) {
		test.expect( 1 );

		var actual = grunt.file.read( 'tmp/custom_options_indent_position.json' );
		var expected = grunt.file.read( 'test/expected/custom_options_indent_position.json' );
		test.equal( actual, expected, 'Should have had the position in the indented json.' );

		test.done();
	},
    custom_options_indent_position_source: function( test ) {
        test.expect( 1 );

        var actual = grunt.file.read( 'tmp/custom_options_indent_position_source.json' );
        var expected = grunt.file.read( 'test/expected/custom_options_indent_position_source.json' );
        test.equal( actual, expected, 'Should have had the position and source in the indented json.' );

        test.done();
    },
    custom_options_indent_position_source_multifile: function( test ) {
        test.expect( 1 );

        var actual = grunt.file.read( 'tmp/custom_options_indent_position_source_multifile.json' );
        var expected = grunt.file.read( 'test/expected/custom_options_indent_position_source_multifile.json' );
        test.equal( actual, expected, 'Should have had the position and source in the indented json.' );

        test.done();
    },
	custom_options_indent_position_large: function( test ) {
		test.expect( 1 );

		var actual = grunt.file.read( 'tmp/custom_options_indent_position_large.json' );
		var expected = grunt.file.read( 'test/expected/custom_options_indent_position_large.json' );
		test.equal( actual, expected, 'Should have had the position in the indented json.' );

		test.done();
	}
};
