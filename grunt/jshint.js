module.exports = {
  files: ['Gruntfile.js',
    'frontend/**/*.js',
    '!frontend/vendor/**/*.js'
  ],
  options: {
    curly: true,
    eqeqeq: true,
    immed: true,
    latedef: true,
    newcap: true,
    noarg: true,
    sub: true,
    undef: true,
    boss: true,
    eqnull: true,
    browser: true,
    globals: {
      module: true,
      require: false,
      requirejs: false,
      define: true,
      console: true,
      '$': true,
      jQuery: true,
      sinon: true,
      describe: true,
      it: true,
      expect: true,
      beforeEach: true,
      afterEach: true
    }
  }
};