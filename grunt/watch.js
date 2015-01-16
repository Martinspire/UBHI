module.exports = {
  options: {
    livereload: 8080
  },
  frontend: {
    files: ['frontend/**/*.js',
      'frontend/**/*.json',
      'frontend/**/*.html',
      '!frontend/vendor/*',
      '!frontend/node_modules/*',
      '!dist/*'
    ],
    tasks: ['newer:jsbeautifier']
  },
  sass: {
    files: ['frontend/**/*.scss', '!frontend/vendor/*'],
    tasks: ['sass:dev']
  },
  express: {
    files: ['backend/**/*.js', 'Gruntfile.js'],
    tasks: ['express:dev'],
    options: {
      spawn: false,
      atBegin: false
    }
  }
};
