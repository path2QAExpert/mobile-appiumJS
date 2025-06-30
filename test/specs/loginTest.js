const LoginPage = require('../pages/LoginPage');

describe('Cross-Platform Login Test', () => {
  it('should login successfully on mobile', async () => {
    const platform = driver.isAndroid ? 'android' : 'ios';
    const loginPage = new LoginPage(platform);
    await loginPage.login('testuser', 'testpass');
  });
});
