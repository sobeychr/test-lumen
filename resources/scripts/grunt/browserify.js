"use strict";

module.exports = grunt => {
    grunt.task.loadNpmTasks('grunt-browserify');

    return {
        options: {
            browserifyOptions: {
                /*
                paths: [
                    './resources/assets/js/',
                    './node_modules/',
                ],
                */
                debug: true,
                watch: false,
            },
        },
        js: {
            options: {
                transform: [
                    ['babelify', {presets: ['@babel/preset-env']}],
                ],
            },
            files: [{
                expand: true,
                cwd: './resources/assets/js/',
                src: ['**/*.js', '!component/**', '!pages/**', '!**/*.min.js', '!**/*.map', '!**/*.backup'],
                dest: './public/assets/js/',
            }],
        },
    };
};
