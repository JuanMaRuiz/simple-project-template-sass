(function(){
  'use strict';


  module.exports = function (grunt) {

  require('jit-grunt')(grunt);

    grunt.initConfig({
      connect: {
        server: {
          options: {
            port: 9000,
            base: 'public/',
            open: true,
            hostname: 'localhost',
            livereload: 35729
          }
        }
      },
      sass: {
        dist: {
          files: {
            'public/css/style.css': 'scss/style.scss'
          }
        }
    },
    jshint: {
      options: {
          reporter: require('jshint-stylish'),
          jshintrc : '.jshintrc'
      },
      all: {
        src: [
          'Gruntfile.js',
          'app/js/{,*/}*.js'
        ]
      }
    },
      watch: {
        project: {
          files: ['public/**/*.js', 'public/**/*.html', 'public/**/*.json','public/**/*.css', './scss/*.scss'],
          tasks: ["sass"],
          options: {
            livereload: true
          },
          
        },
      }
    });

    grunt.registerTask('default', ['connect', 'sass', 'jshint','watch']);

  };
})();