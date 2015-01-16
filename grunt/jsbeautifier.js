module.exports = {
  files: ['frontend/**/*.js', '!frontend/vendor/**/*.js'],
  options: {
    js: {
      breakChainedMethods: true,
      indentWithTabs: true,
      jslintHappy: true,
      brace_style: 'expand',
      wrap_line_length: 0
    }
  }
};