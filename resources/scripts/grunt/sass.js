"use strict";

module.exports = grunt => {
    grunt.task.loadNpmTasks('grunt-contrib-sass');

    return {
        main: {
            options: {
                cacheLocation: './resources/scripts/grunt/.sass-cache',
                precision: 3,
                sourcemap: 'file',
                style: 'compressed',
                trace: true,
                unixNewlines: true,
                update: true,
            },
            files: [{
                expand: true,
                cwd: './resources/assets/scss/',
                src: ['**/*.scss', '!**/*.backup'],
                dest: './public/assets/css/',
                ext: '.css',
            }],
        }
    };
};
