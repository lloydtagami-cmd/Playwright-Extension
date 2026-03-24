class LoginPage {
    //constructor This object is essential for all interactions with the web page.
    //e.g. library for loginpage you can create separate javascript file for library and method
    constructor(page) {
        this.page=page
        //Elements for loginpage
        this.username="#email1"
        this.password="#password1"
       this.loginButton= "//button[text()='Sign in']"
        this.menu = page.getByAltText('menu')
         this.logoutButton= "//button[text()='Sign out']"
        this.welcomeMessage = page.locator('.welcomeMessage')
    }
}

module.exports=LoginPage;