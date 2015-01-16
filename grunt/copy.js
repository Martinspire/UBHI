module.exports = {
  dist: {
    files: [{
      cwd: 'frontend/',
      expand: true,
      src: ['img/**'],
      dest: 'dist/'
    }, {
      cwd: 'frontend/',
      expand: true,
      src: ['partials/**'],
      dest: 'dist/'
    }, {
      cwd: 'frontend/',
      expand: true,
      src: ['vendor/**'],
      dest: 'dist/'
    }, {
      cwd: 'frontend/',
      expand: true,
      src: ['font/**'],
      dest: 'dist/'
    }, {
      cwd: 'frontend/',
      expand: true,
      src: ['**/*.html'],
      dest: 'dist/'
    }, {
      cwd: 'frontend/',
      expand: true,
      src: ['index-dist.html'],
      dest: 'dist/',
      rename: function(dest,src){
        return dest + src.replace('index-dist', 'index');
      }
    }]
  }
};