module.exports = function (grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'public/'
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
        "bitwise": true,
        "browser": true,
        "curly": true,
        "eqeqeq": true,
        "eqnull": true,
        "esnext": true,
        "immed": true,
        "jquery": true,
        "latedef": true,
        "newcap": true,
        "noarg": true,
        "node": true,
        "strict": false,
        "trailing": true,
        "undef": true,
        "globals": {
          "jQuery": true,
          "alert": true
        }
      },
    all: ['Gruntfile.js', 'public/**/*.js']
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

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect', 'sass', 'jshint','watch']);

};