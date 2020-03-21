"use strict";

module.exports = grunt => {
    grunt.task.loadNpmTasks('grunt-contrib-copy');

    return {
        css: {
            files: [{
                expand: true,
                cwd: './resources/assets/css/',
                src: ['**/*.css', '!**/*.map', '!**/*.backup'],
                dest: './public/assets/css/',
            }]
        },
        js: {
            files: [{
                expand: true,
                cwd: './resources/assets/js/',
                src: ['**/*.min.js', '!**/*.map', '!**/*.backup'],
                dest: './public/assets/js/',
            }]
        },
    };
};
