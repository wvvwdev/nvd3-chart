
var webpackConfig = require('./webpack/webpack.test.config.js');

module.exports = function (config) {
  config.set({
    basePath: __dirname,
    files: [
      'test/vendor.ts',
      'src/*.spec.ts'
    ],
    preprocessors: {
      'test/vendor.ts': ['webpack'],
      'src/*.spec.ts': ['webpack']
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    frameworks: ['jasmine'],
    autoWatch: true,
    browsers: ['Firefox'],
    reporters: ['progress'],
    exclude: [],
    port: 9876
  });

  if (process.env.TRAVIS) {
    config.browsers = ['chrome_travis_ci'];
    config.singleRun = true;
  }
};