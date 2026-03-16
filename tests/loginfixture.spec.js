
const { test, expect } = require('../fixtures/demo.fixtures'); 

test('Login via fixture-provided page object', async ({ page, loginPage }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  await loginPage.Login('admin@email.com', 'admin@123');
  await expect(page.locator('.welcomeMessage')).toContainText('Welcome');
});
