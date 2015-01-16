module.exports = {
  dev: {
    target: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['watch:frontend', 'watch:sass']
    }
  }
};