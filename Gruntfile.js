module.exports = function (grunt)
{
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),


	pug: {
		  compile: {
		    options: {
		      data: {
		        debug: false
		      }
		    },
		    files: {
		      'index.html': ['dev/index.pug']

		    }
		  }
		},

	less: {

			  production: {
			    options: {
			      paths: ['dev/css'],
			      plugins: [
			        new (require('less-plugin-autoprefix'))({browsers: ["last 3 versions"]}),
			        new (require('less-plugin-clean-css'))()
			      ]
			    },
			    files: {
			      'dev/css/custom.css': 'dev/css/custom.less'
			    }
			  }
			},
	watch:
	{
		css:
		{
			files:['dev/css/custom.less'],
			tasks:['less'],
			options: {
		      livereload: true,
		    }
		},
		scripts:
		{
			files:['dev/index.pug'],
			tasks:['pug'],
			options: {
		      livereload: true,
		    }
			
		}
	}				
		
	});

	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default',['pug','less','watch'])
};