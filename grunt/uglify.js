module.exports = {
  min: {
    options: {
      compress: {
        drop_console: true
      },
      mangle: {
        except: ['jQuery', 'Angular']
      }
    },
    files: [{
      src: ['frontend/app.js', 'frontend/appController.js', 'frontend/**/*.js','!frontend/joey/**/*.js', '!frontend/vendor/**/*.js'],
      dest: 'dist/js/app.js'
    }]
  }
};
