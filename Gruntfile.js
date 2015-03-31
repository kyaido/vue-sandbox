module.exports = function (grunt) {

  /*
    * connect      ローカルサーバを立てる
    * sass         sassのコンパイル
    * watch        html、scss、jsに変更があるとブラウザをオートリロードする
    * autoprefixer scss修正したタイミングで走らせる
                   sassのコンパイルと同時に走るイメージで、cssを対象にしてそのまま上書きをする
  */
  
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  
  grunt.initConfig({
  
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          //open: true,
          base: '.'
        }
      }
    },
    
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'scss/',
          src: ['**/*.scss'],
          dest: 'css/',
          ext: '.css'
        }]
      }
    },
    
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'Explorer >= 9', 'android >= 4.0']
      },
      files: {
        expand: true,
        flatten: true,
        src: 'css/**/*.css',
        dest: 'css/'
      }
    },
    
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      html: {
        files: '**/*.html'
      },
      css: {
        files: [ 'scss/**/*.scss' ],
        tasks: [ 'sass', 'autoprefixer' ]
      },
      js: {
        files: '**/*.js'
      }
    }
    
  });
  
  grunt.registerTask('default', [ 'connect', 'watch' ]);
  
};