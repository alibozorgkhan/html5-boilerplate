module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        loadPath: [
          'bower_components/foundation/scss',
        ]
      },
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'build/css/app.css': 'static/scss/app.scss'
        }
      }
    },

    watch: {
      scripts: {
        files: [
          'static/js/**/*.js',
          'static/scss/**/*.scss',
          'static/images/**/*'
        ],
        tasks: ['build'],
        options: {
          spawn: false,
        },
      },
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: './static/images',
            src: ['**/*'],
            dest: 'build/images/',
            filter: 'isFile'
          },
        ],
      },
    },

    clean: ["build"]
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['clean', 'sass', 'copy']);
  grunt.registerTask('default', ['watch']);
};