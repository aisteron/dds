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
		      'index.html': ['dev/index.pug'],
		      'dev/sections/section3.html': ['dev/sections/section3.pug'],
		      'dev/sections/section4.html': ['dev/sections/section4.pug'],
		      'dev/sections/section5.html': ['dev/sections/section5.pug'],
		      'dev/sections/section6.html': ['dev/sections/section6.pug']

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
			files:['dev/css/custom.less', 
			'dev/css/section2.less', 
			'dev/css/section6.less', 
			'dev/css/section5.less', 
			'dev/css/section4.less', 
			'dev/css/section3.less'],
			tasks:['less', 'concat'],
			options: {
		      livereload: true,
		    }
		},
		scripts:
		{
			files:['dev/index.pug',
			'dev/sections/section6.pug', 
			'dev/sections/section5.pug', 
			'dev/sections/section4.pug', 
			'dev/sections/section3.pug'],
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