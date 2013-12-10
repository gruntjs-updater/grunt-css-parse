# grunt-css-parse

> Grunt plugin for css parse (https://github.com/visionmedia/css-parse).

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-css-parse --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-css-parse');
```

## The "css_parse" task

### Overview
In your project's Gruntfile, add a section named `css_parse` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  css_parse: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.space
Type: `String`
Default value: null

A String or Number object that's used to insert white space into the output JSON string for readability purposes. If this is a Number, it indicates the number of space characters to use as white space; this number is capped at 10 if it's larger than that. Values less than 1 indicate that no space should be used. If this is a String, the string (or the first 10 characters of the string, if it's longer than that) is used as white space. If this parameter is not provided (or is null), no white space is used.

#### options.position
Type: `Boolean`
Default value: `false`

Add the corresponding position in the css source file to each node.

### Usage Examples

#### Default Options
In this example, the default options are used.

```js
grunt.initConfig({
  css_parse: {
    options: {},
    files: {
      'dest/default_options.json': ['src/default_options.css']
    }
  }
});
```

Input:
```css
body {
    background: #eee;
    color: #888;
}
```

Output:
```js
{"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":["body"],"declarations":[{"type":"declaration","property":"background","value":"#eee"},{"type":"declaration","property":"color","value":"#888"}]}]}}
```

#### Custom Options
In this example, custom options are used.

```js
grunt.initConfig({
  css_parse: {
    options: {
      space: 4,
      position: true,
    },
    files: {
      'dest/custom_options': ['src/custom_options.css']
    }
  }
});
```

Input:
```css
body {
    background: #eee;
    color: #888;
}
```

Output:
```js
{
    "type": "stylesheet",
    "stylesheet": {
        "rules": [
            {
                "type": "rule",
                "selectors": [
                    "body"
                ],
                "declarations": [
                    {
                        "type": "declaration",
                        "property": "background",
                        "value": "#eee",
                        "position": {
                            "start": {
                                "line": 2,
                                "column": 5
                            },
                            "end": {
                                "line": 2,
                                "column": 21
                            }
                        }
                    },
                    {
                        "type": "declaration",
                        "property": "color",
                        "value": "#888",
                        "position": {
                            "start": {
                                "line": 3,
                                "column": 5
                            },
                            "end": {
                                "line": 3,
                                "column": 16
                            }
                        }
                    }
                ],
                "position": {
                    "start": {
                        "line": 1,
                        "column": 1
                    },
                    "end": {
                        "line": 4,
                        "column": 2
                    }
                }
            }
        ]
    }
}
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
 * 2013-12-10   v0.1.0   Initial release.



---

Task submitted by [Bastian Gutschke](http://github.com/bgutschke)
