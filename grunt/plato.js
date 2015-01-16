module.exports = {
    options: {

    },
    dev: {
        files: {
            'report/javascript' : [ 'frontend/**/*.js', '!frontend/vendor/**/*.js' ],
        }
    },
    dist: {
        files: {
            'report/javascript' : [ 'dist/**/*.js', '!dist/vendor/**/*.js' ],
        }
    }
};
