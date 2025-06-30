const video = require('wdio-video-reporter');

exports.config = {
  runner: 'local',
  specs: ['./test/specs/**/*.js'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 14',
    'appium:platformVersion': '17.2',
    'appium:automationName': 'XCUITest',
    'appium:app': '/absolute/path/to/ios-app.app',
    'appium:autoAcceptAlerts': true
  }],
  logLevel: 'info',
  framework: 'mocha',
 reporters: [
  'spec',
  ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false,
  }],
  ['video', {
    saveAllVideos: false,  // set to true if you want to save all videos
    videoSlowdownMultiplier: 3,
  }]
  ],
  services: ['appium'],
  mochaOpts: {
    timeout: 60000
  }
};
