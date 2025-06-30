const videoHelper = require('./test/utils/videoHelper');
exports.config = {
  runner: 'local',
  specs: ['./test/specs/**/*.js'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Pixel_5_API_30',
    'appium:platformVersion': '11.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': '/absolute/path/to/android-app.apk',
    'appium:autoGrantPermissions': true
  }],
  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec', ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false,
  }]],
  services: ['appium'],
  mochaOpts: {
    timeout: 60000
  }

  onPrepare: () => videoHelper.prepareDirectories(),
  beforeTest: async () => await videoHelper.handleBeforeEach(driver),
  afterTest: async (test) => await videoHelper.handleAfterEach(test.title, driver),
};