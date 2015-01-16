module.exports = {
  options: {},
  dist: {
    options: {
      script: 'backend/server.js',
      debug: false,
      node_env: 'dist'
    }
  },
  dev: {
    options: {
      script: 'backend/server.js',
      debug: true,
      node_env: 'dev'
    }
  }
};