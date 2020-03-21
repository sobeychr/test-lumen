"use strict";

module.exports = grunt => {
    grunt.task.loadNpmTasks('grunt-contrib-watch');

    return {
        css: {
            files: ['./resources/assets/scss/**/*.scss'],
            tasks: ['sass'],
        },
        js: {
            files: ['./resources/assets/js/**/*.js'],
            tasks: ['js'],
        },
    };
};
