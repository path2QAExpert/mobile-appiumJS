const selectors = require('../selectors.json');
const allure = require('@wdio/allure-reporter').default;

class LoginPage {
  constructor(platform) {
    this.platform = platform || (driver.isAndroid ? 'android' : 'ios');
  }

  get username() {
    return $(selectors.LoginPage.usernameField[this.platform]);
  }

  get password() {
    return $(selectors.LoginPage.passwordField[this.platform]);
  }

  get loginButton() {
    return $(selectors.LoginPage.loginButton[this.platform]);
  }

  async login(username, password) {
    await this.username.setValue(username);
    allure.addStep('Entered username');
    await browser.saveScreenshot(`./allure-results/step-username.png`);

    await this.password.setValue(password);
    allure.addStep('Entered password');
    await browser.saveScreenshot(`./allure-results/step-password.png`);

    await this.loginButton.click();
    allure.addStep('Clicked login');
    await browser.saveScreenshot(`./allure-results/step-login.png`);
  }
}

module.exports = LoginPage;
