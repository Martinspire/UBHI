module.exports = {
  main: {
    options: {
      archive: 'dist/zip/project-<%=grunt.option("version")%>.zip',
      mode: 'zip'
    },
    expand: true,
    cwd: 'dist/',
    src: ['**/*'],
    dest: '/'
  }
};