/**
 * Created by pablo on 15/03/16.
 */
'use strict';
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        conf:{
            dist:'dist',
            source: ['./css', './font-awesome', './fonts','./img','./js','./index.html']
        },

        copy: {
            dist: {
                files: [{expand: true, src: '<%= conf.source %>', dest: '<%= conf.dist %>'}]
            }
        },

        less: {
            dist: {
                files: {
                    "./css/creative.css": "./less/creative.less"
                }
            }
        }
    });

    grunt.registerTask('build', function () {
        grunt.task.run(['less:dist','copy:dist']);
    });
};