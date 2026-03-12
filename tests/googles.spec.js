const {test,expect} = require('@playwright/test')

test("Verify Application Title",async function ({page}){

    await page.goto("http://google.com")
    
    const url = await page.url()
    const title = await page.title()

    console.log(url)
    console.log(title)

    await expect(page).toHaveTitle("Google")
})