const { expect } = require("@playwright/test")

class loginPage {
    //constructor This object is essential for all interactions with the web page.
    //e.g. library for loginpage you can create separate javascript file for library and method
    constructor(page) {
        this.page=page
        //Elements for loginpage
        this.username="#email1"
        this.password="#password1"
        this.loginButton=  "//button[text()='Sign in']"
    }

    async Login(user,pass) {
        await this.page.fill(this.username,user)
        
        await this.page.fill(this.password,pass)
        await this.page.click(this.loginButton)
       
    }
}

module.exports=loginPage;