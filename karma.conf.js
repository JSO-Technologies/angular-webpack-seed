var argv = require('yargs').argv;
var webpackConfig = require('./config/webpack.config.test.js');

module.exports = function (config) {
    config.set({
        singleRun: !argv.auto,
        autoWatch: !!argv.auto,

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',
        files: [
            './node_modules/jquery/dist/jquery.js',
            './node_modules/angular/angular.js',
            './node_modules/angular-animate/angular-animate.js',
            './node_modules/angular-mocks/angular-mocks.js',
            'src/**/*.module.js',
            'src/**/*.spec.js'
        ],
        exclude: [],

        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],

        preprocessors: {
            'src/**/*.js': ['webpack']
        },

        reporters: ['progress', 'coverage'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_WARN,

        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },

        webpack: webpackConfig
    })
};