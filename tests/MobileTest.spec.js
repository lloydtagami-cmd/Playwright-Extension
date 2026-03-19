const { test, devices, expect } = require('@playwright/test');
const loginPage = require('../pages/loginpage')
const iPhone = devices['iPhone 13'];

test.use({ ...iPhone }); // Applies emulation to all tests in this file

test('my mobile emulation test', async ({ page }) => {
   await page.goto('https://freelance-learn-automation.vercel.app/login');
  
   await page.fill('input#email1', 'admin@email.com');
   await page.fill('input#password1', 'admin@123');
   await page.click("//button[text()='Sign in']");
   await expect(page.locator('.welcomeMessage')).toContainText('Welcome');
   await page.waitForTimeout(5000); // Wait for 5 seconds to allow the page to load after login
   
   //await page.locator.fill('input[name="email"]', 'admin@email.com');
  //  await loginPage.Login('admin@email.com', 'admin@123');
    //await expect(page.locator('.welcomeMessage')).toContainText('Welcome');
  
  await page.screenshot({ path: 'mobile1.png' });
});
