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
	concat: {
			dist:
			{
				src:['dev/css/custom.css', 'dev/css/swiper.min.css'],
				dest:'dev/css/concat.css'
			}
  },		
	criticalcss: {
        custom: {
            options: {
                url: "http://127.0.0.1:8080/",
                width: 1200,
                height: 900,
                outputfile: "dev/css/critical.css",
                filename: 'dev/css/concat.css',
                buffer: 800*1024,
                ignoreConsole: false
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
	grunt.loadNpmTasks('grunt-criticalcss');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default',['pug','less','concat','watch'])
};