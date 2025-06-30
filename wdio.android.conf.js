
const video = require('wdio-video-reporter');
const path = require('path');

exports.config = {
  runner: 'local',
  specs: ['./test/specs/**/*.js'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Medium_Tablet',
    'appium:platformVersion': '15.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': path.join(__dirname, 'apps/ApiDemos-debug.apk'),
    'appium:autoGrantPermissions': true
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
