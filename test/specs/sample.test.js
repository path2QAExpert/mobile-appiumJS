const accessibilityPage = require('../pages/AccessibilityPage');

describe('ApiDemos Page Object Test', () => {
    it('should navigate and validate Accessibility Node Provider text', async () => {
        await accessibilityPage.openAccessibility();

        const text = await accessibilityPage.getNodeProviderText();
        console.log('✅ Found Text:', text);

        expect(text).toBe('Accessibility Node Provider');
    });
});