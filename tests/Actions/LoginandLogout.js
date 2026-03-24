const {test,expect} = require('@playwright/test')
const LoginPage = require('../Pages/LoginPage')

class LoginLogout {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
    }

    async Login(user,pass) {
        await this.page.fill(this.loginPage.username,user)
        await this.page.fill(this.loginPage.password,pass)
        await this.page.click(this.loginPage.loginButton)
    }

    async Logout() {
        await this.loginPage.menu.click()
        await this.page.click(this.loginPage.logoutButton)
    }
}


module.exports=LoginLogout;