module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['app/js/{,*/}*.js'],
        tasks: ['uglify'],
        options: {
          livereload: true
        }
      },
      sass: {
        files: ['app/css/**/*'],
        tasks: ['compass'],
        options: {
          nospawn: true,
          livereload: true
        }
      }
    },
    compass: {
      dev: {
        options: {
          config: 'config/config.rb',
          sassDir: 'app/css/scss',
          cssDir: 'app/css'
        }
      }
    },
    uglify: {
      options: {
        // expand: true,
        mangle: true,
        compress: true,
        report: 'min',
        preserveComments: false,
        banner: '',
        footer: ''
      },
      js : {
        files : {
          'app/js/dist/main.min.js' : [
            'app/bower_components/jquery/jquery.js',
            'app/js/main.js'
          ]
        }
      }
    },
    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['app/index.html']
        }
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'app',
          dest: 'dist',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'images/*',
            'css/main.css',
            'js/*'
          ]
        }]
      }
    }
  });

  // Register grunt tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // Default grunt task when running "grunt"
  grunt.registerTask('default', [
    'uglify',
    'compass',
    'watch'
  ]);

  grunt.registerTask('build', [
    'uglify',
    'compass',
    'copy:dist',
    'processhtml:dist',
  ]);
  // Compass task run "grunt styles"
  grunt.registerTask('styles', ['compass']);

  // Uglify scripts run "grunt scripts"
  grunt.registerTask('scripts', ['uglify']);

};
