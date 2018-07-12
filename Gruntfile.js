
module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
          target: {
              files: {
                  'css/ui-min.css': ['src/ui.css']
                }
          }
    },
	  watch: {
		  scripts: {
		    files: ['src/*.css'],
		    tasks: ['cssmin'],
		    options: {
		      spawn: false,
		    },
		 },
	},
	
	
	
  }); 
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  //grunt.registerTask('default', ['jasmine']);
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('dev', ['concat']);

};
/*
pivotal : {
            files: ['js/*.js', 'components/*.js', 'index.js', 'tests/specs/*.js'],
            tasks: 'jasmine:pivotal:build'
          },*/