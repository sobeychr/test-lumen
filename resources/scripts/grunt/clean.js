"use strict";

module.exports = grunt => {
    grunt.task.loadNpmTasks('grunt-contrib-clean');

    return {
        assets: ['./public/assets/css/**/*', './public/assets/js/**/*'],
        sass:   ['./resources/grunt/.sass-cache/**/*'],
        storage: [
            './storage/framework/views/**/*.php',
            './storage/logs/**/*.log',
        ],
    };
};
