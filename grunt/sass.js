// Code for using Ruby SASS and Grunt-Contrib-SASS
// module.exports = {
//   dist: {
//     options: {
//       style: 'compressed',
//       debugInfo: false
//     },
//     expand: true,
//     cwd: 'frontend/sass/',
//     src: ['*.scss'],
//     dest: 'dist/css/',
//     ext: '.css'
//   },
//   dev: {
//     options: {
//       style: 'expanded',
//       debugInfo: false
//     },
//     expand: true,
//     cwd: 'frontend/sass/',
//     src: ['*.scss'],
//     dest: 'frontend/css/',
//     ext: '.css'
//   }
// };
module.exports = {
  dist: {
    options: {
      outputStyle: 'compressed',
      sourceMap: false
    },
    files: [{
      expand: true,
      cwd: 'frontend/sass/',
      src: ['**/*.scss'],
      dest: 'dist/css/',
      ext: '.css'
    }]
    
  },
  dev: {
    options: {
      outputStyle: 'nested',
      sourceMap: true
    },
    files: [{
      expand: true,
      cwd: 'frontend/sass/',
      src: ['*.scss'],
      dest: 'frontend/css/',
      ext: '.css'
    }]
  }
};
