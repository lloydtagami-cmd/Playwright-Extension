const {test,expect} = require('@playwright/test')
//change the viewport size of the browser
test.use({viewport:{width:1400,height:1000}})

test.fixme("Verify Error Message",async function ({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //on the fill you can add delay 500 = 0.5s
    await page.locator("//input[@name='username']").fill("Admin",500)
    //invalid password
    await page.locator("//input[@name='password']").fill("admin123",500)
    await page.locator("//button[@type='submit']").click()
    const errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent()

    expect(errorMessage.includes("Invalid")).toBeTruthy()
   

})