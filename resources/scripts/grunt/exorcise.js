"use strict";

module.exports = grunt => {
    grunt.task.loadNpmTasks('grunt-exorcise');

    return {
        js: {
            files: [{
                expand: true,
                cwd: './public/assets/js/',
                src: ['**/*.js', '!component/**', '!pages/**', '!**/*.min.js', '!**/*.map', '!**/*.backup'],
                dest: './public/assets/js/',
                ext: '.js.map',
            }],
        }
    };
};
