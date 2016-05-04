/**
 * Created by Thomas on 2/28/16.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                "dest": 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            jquery: {
                expand: true,
                cwd: 'node_modules/jquery/',
                src: [
                    'jquery.min.js',
                    'jquery.min.js.map'
                ],
                "dest": 'server/public/vendors/angular'
            },
            bootstrap: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist/css/',
                src: [
                    "bootstrap.min.css",
                    "bootstrap.min.css.map"
                ],
                "dest": 'server/public/vendors/bootstrap/'
            },
            views: {
                expand: true,
                cwd: "client/views/",
                src: [
                    "index.html",
                    "resume.html",
                    "THartle_resume_2016.mht",
                    "THartle_resume_2016.doc"
                ],
                "dest": "server/public/assets/views/"
            },
            styles: {
                expand: true,
                cwd: "client/styles/",
                src: [
                    'style.css',
                    'resume.css',
                    'GitHub-Mark-32px.png',
                    'closeup_sm.jpg',
                    'Logo-2C-34px-R.png'
                ],
                "dest": "server/public/assets/styles/"
            },
            images: {
                expand: true,
                cwd: "client/images/",
                src: [
                    'scamperingsled.jpg',
                    'footerimage.jpg'
                ],
                "dest": "server/public/assets/images/"
            },
            banner1: {
                expand: true,
                cwd: "client/content/banner1/",
                src: [
                    'aspirity_logo.svg',
                    'backupimage.jpg',
                    'flame.svg',
                    'go.svg',
                    'headline.svg',
                    'index.html',
                    'lightbulb-outline.svg',
                    'photo.jpg',
                    'script.js',
                    'style.css',
                    'subhead.svg'
                ],
                "dest": "server/public/assets/content/banner1/"
            },
            banner2: {
                expand: true,
                cwd: "client/content/banner2/",
                src: [
                    'aspirity_logo.svg',
                    'backupimage.jpg',
                    'flame.svg',
                    'go.svg',
                    'headline.svg',
                    'index.html',
                    'lightbulb-outline.svg',
                    'photo.jpg',
                    'script.js',
                    'style.css',
                    'subhead.svg'
                ],
                "dest": "server/public/assets/content/banner2/"
            },
            banner3: {
                expand: true,
                cwd: "client/content/banner3/",
                src: [
                    'aspirity_logo.svg',
                    'backupimage.jpg',
                    'flame.svg',
                    'go.svg',
                    'headline.svg',
                    'index.html',
                    'lightbulb-outline.svg',
                    'photo.jpg',
                    'script.js',
                    'style.css',
                    'subhead.svg'
                ],
                "dest": "server/public/assets/content/banner3/"
            },
            email1: {
                expand: true,
                cwd: "client/content/email1/",
                src: [
                    'aspirity_logo.png',
                    'b8-right-to-choose.jpg',
                    'index.html'
                ],
                "dest": "server/public/assets/content/email1/"
            },
            email2: {
                expand: true,
                cwd: "client/content/email2/",
                src: [
                    'aspirity_logo.png',
                    'b8-right-to-choose.jpg',
                    'index.html'
                ],
                "dest": "server/public/assets/content/email2/"
            },
            email3: {
                expand: true,
                cwd: "client/content/email3/",
                src: [
                    'backgroundimage_v.3.jpg',
                    'thartle_logo_v.2.png',
                    'index.html'
                ],
                "dest": "server/public/assets/content/email3/"
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);

};
