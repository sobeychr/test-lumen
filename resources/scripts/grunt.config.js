"use strict";

module.exports = grunt => {
    grunt.registerTask('default', () => {
        grunt.log.errorlns('No task selected');
        grunt.log.writeln('>>', 'grunt dev'.cyan);
        grunt.log.writeln('>>', 'grunt js'.cyan);
        grunt.log.writeln('>>', 'grunt sass'.cyan);
        grunt.log.writeln('>>', 'grunt watch'.cyan);
    });

    grunt.registerTask('dev', () => {
        grunt.task.run(['sass', 'js']);
    });

    grunt.registerTask('js', () => {
        grunt.log.writeln('building JS files'.yellow);
        grunt.task.run(['browserify', 'exorcise']);
    });

    grunt.config.init({
        browserify: require('./grunt/browserify.js')(grunt),
        exorcise: require('./grunt/exorcise.js')(grunt),
        sass: require('./grunt/sass.js')(grunt),
        watch: require('./grunt/watch.js')(grunt),
        pkg: grunt.file.readJSON('./package.json'),
    });
};
