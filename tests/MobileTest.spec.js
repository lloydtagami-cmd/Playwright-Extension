const { test, devices } = require('@playwright/test');
const iPhone = devices['iPhone 13'];

test.use({ ...iPhone }); // Applies emulation to all tests in this file

test('my mobile emulation test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/emulation');
  // Your test steps here
  await page.screenshot({ path: 'mobile1.png' });
});
