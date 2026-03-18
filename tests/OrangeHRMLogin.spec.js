const {test,expect} = require('@playwright/test')

test.fixme("Login",async function ({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //on the fill you can add delay 500 = 0.5s
    await page.locator("//input[@name='username']").fill("Admin",500)
    await page.locator("//input[@name='password']").fill("admin123",500)
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    await page.getByAltText("profile picture").click()
    await page.getByText("Logout").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

})