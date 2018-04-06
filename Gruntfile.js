module.exports = function(grunt) {

    const mozjpeg = require('imagemin-mozjpeg');

    grunt.initConfig({

        settings: {
            srcPath: 'src/',
            distPath: 'public/'
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'public/images/gallery/',
                    src: ['**/*.jpg'],
                    dest: 'public/images/minified/'
                }]
            }
        },

        sass: {
            app: {
                files: [{
                    expand: true,
                    cwd: '<%= settings.srcPath %>scss',
                    src: ['**/*.scss'],
                    dest: '<%= settings.distPath %>css',
                    ext: '.css'
                }],
                options: {
                    outputStyle: 'expanded',
                    sourceMap: false,
                    precision: 5,
                    includePaths: [
                        'node_modules'
                    ]
                }
            }
        },

        sync: {
            iconFont: {
                files: [{
                    cwd: '<%= settings.srcPath %>font/icons/fonts',
                    src: ['**/*'],
                    dest: '<%= settings.distPath %>fonts'
                }],
                updateAndDelete: true
            }
        },

        includereplace: {
            dist: {
                options: {
                    prefix: '{{ ',
                    suffix: ' }}'
                },
                files: [{
                        src: '<%= settings.srcPath %>html/index.html',
                        dest: '<%= settings.distPath %>index.html'
                    }, {
                        src: '<%= settings.srcPath %>html/login-modal.html',
                        dest: '<%= settings.distPath %>login-modal.html'
                    }
                ]
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: {
                src: ['<%= settings.srcPath %>js/**/*.js', 'Gruntfile.js']
            }
        },

        jscs: {
            options: {
                config: '<%= settings.rootPath %>.jscsrc'
            },
            scripts: {
                files: {
                    src: ['<%= settings.srcPath %>js/**/*.js', 'Gruntfile.js']
                }
            }
        },

        watch: {
            javascript: {
                expand: true,
                files: ['<%= settings.srcPath %>js/**/*.js', 'Gruntfile.js'],
                tasks: ['jshint', 'jscs'],
                options: {
                    spawn: false
                }
            },
            scss: {
                expand: true,
                files: ['<%= settings.srcPath %>scss/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },
            html: {
                expand: true,
                files: ['<%= settings.srcPath %>html/**/*.html'],
                tasks: ['includereplace'],
                options: {
                    spawn: false
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['imagemin']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['jshint', 'jscs', 'sass', 'includereplace', 'sync']);

};
