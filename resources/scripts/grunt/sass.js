"use strict";

module.exports = grunt => {
    grunt.task.loadNpmTasks('grunt-contrib-sass');

    return {
        options: {
            precision: 3,
            unixNewlines: true,
        },
        main: {
            options: {
                cacheLocation: './resources/scripts/grunt/.sass-cache',
                sourcemap: 'file',
                style: 'compressed',
                trace: true,
                update: true,
            },
            files: [{
                expand: true,
                cwd: './resources/assets/scss/',
                src: ['**/*.scss', '!**/*.backup'],
                dest: './public/assets/css/',
                ext: '.css',
            }],
        },
    };
};
