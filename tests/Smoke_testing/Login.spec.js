const {test,expect} = require('@playwright/test')
const Login = require('../Actions/LoginandLogout')
const gotoFreelanceLearnAutomation = require('../Utility/GotoWebsite')

test("Login",async function ({page}){
    const gotoWebsite = new gotoFreelanceLearnAutomation(page);
    await gotoWebsite.gotoFreelance();
    const loginp = new Login(page)
    await loginp.Login("admin@email.com","admin@123")
    await expect(loginp.loginPage.welcomeMessage).toContainText('Welcome');
    await loginp.Logout();   
})

