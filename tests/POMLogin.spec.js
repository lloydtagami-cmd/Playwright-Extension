const {test,expect} = require('@playwright/test')
const loginPage = require('../pages/loginpage')

test("Login",async function ({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const loginp = new loginPage(page)

    await loginp.Login("admin@email.com","admin@123")

    await expect(page.locator('.welcomeMessage')).toContainText('Welcome');
   
})