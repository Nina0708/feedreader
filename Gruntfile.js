module.exports = function(grunt) {
	grunt.initConfig({
		'http-server': {
			test: {
				root: 'src',
				port: 9001
			},
			prod: {
				root: 'dist',
				port: 9000
			}
		},

		concat: {
			'app.css': {
				files: {
					'dist/app.css': [ 'src/css/iconmoon.css', 'src/css/normalize.css', 'src/css/style.css' ]
				}
			}
		},

		copy: {
			'app.js': {
				expand: false,
				src: 'src/js/app.js',
				dest: 'dist/app.js'
			},
			'index.html': {
				expand: false,
				src: 'index.dist.html',
				dest: 'dist/index.html'
			}
		}
	});

	grunt.loadNpmTasks('grunt-http-server');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('test', [ 'http-server:test' ]);
	grunt.registerTask('build', [ 'concat:app.css', 'copy:app.js', 'copy:index.html' ]);
	grunt.registerTask('preview', [ 'http-server:prod' ]);
};
