const videoHelper = require('./test/utils/videoHelper');
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