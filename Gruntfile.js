/* Gruntfile.js */
module.exports = function (grunt)
{
	// Load all grunt tasks and plugins automatically
	require('jit-grunt')(grunt,{ //make sure it finds the tasks by pointing them out below
		"express" : "grunt-express-server",
		"sass" : "grunt-sass",
		"watch" : "grunt-contrib-watch",
		"newer" : "grunt-newer" //allows for using the "newer:" tag to only target newer files
	});
	//require('load-grunt-tasks')(grunt); //not using load-grunt-tasks as jit-grunt is quicker. Use this if you have issues loading tasks.
	//
	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	//setup version and use date if project has no git-tag/commit
	grunt.option("version", grunt.template.today("yyyy-mm-dd"));

	// Project configuration. All configuration is placed in /grunt/...
	var options = {
		config: {
			src: "grunt/*.js"
		}
	};
	configs = require('load-grunt-configs')(grunt,options);

	//insert config
	grunt.initConfig(configs);

	/* register tasks here */

	// Default task: running development server with livereload and watch for sass or js changes.
	grunt.registerTask('default', ['version', 'sass:dev', 'express:dev', 'open:all', 'watch']);

	// Distribution task: running cleaning on dist folder, create main.css from sass files, compress and combine js files and copy all needed files to dist folder
	grunt.registerTask('dist', ['version', 'clean:dist', 'sass:dist', 'uglify:min', 'copy:dist', 'compress:main']);

	// Distribution task: running cleaning on dist folder, create main.css from sass files, compress and combine js files and copy all needed files to dist folder
	grunt.registerTask('dist-serve', ['express:dist', 'open:all', 'watch']);

	// Test task: allows for testing with debugging off and authentication normal - TODO
	//grunt.registerTask('test', ['version', 'clean:dist', 'sass:dist', 'uglify:min', 'copy:dist', 'open:all']);

	// Statistics task: allows for getting statistics about the project
	grunt.registerTask('stats', ['clean:report', 'express:dev', 'plato:dev', 'phantomas']);

	// Install task: run after installation (still needs fix to actually run but isn't really needed anymore)
	//grunt.registerTask('install', ['sass:dev']);

	//Set version number - this will be used for the JSON that will show version, commit and whatnot to let frontend send it to backend
	grunt.registerTask('version', function ()
	{
		grunt.event.once('git-describe', function (rev)
		{
			grunt.option('gitRevision', rev);
			grunt.option("version", rev);
		});

		grunt.file.write('version.json', JSON.stringify(
		{
			version: grunt.config('pkg.version'),
			revision: grunt.option('gitRevision'),
			date: grunt.template.today()
		}));
	});
};
