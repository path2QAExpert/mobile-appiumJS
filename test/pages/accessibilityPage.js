const { getSelector } = require('../../utils/elementHelper');

class AccessibilityPage {
    get accessibilityMenu() {
        return $(selectors.accessibility);
    }

    get nodeProvider() {
        return $(selectors.accessibilityNodeProvider);
    }

    async openAccessibility() {
        await this.accessibilityMenu.waitForDisplayed({ timeout: 5000 });
        await this.accessibilityMenu.click();
    }

    async getNodeProviderText() {
        await this.nodeProvider.waitForDisplayed({ timeout: 5000 });
        return await this.nodeProvider.getText();
    }
}

module.exports = new AccessibilityPage();