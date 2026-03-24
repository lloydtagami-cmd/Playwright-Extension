class MainPage {
    //constructor This object is essential for all interactions with the web page.
    //e.g. library for loginpage you can create separate javascript file for library and method
    constructor(page) {
        this.page=page
        this.manageMenu = page.locator('.nav-menu-item-manage')
        this.mangeCourseMenu = page.getByAltText('manage course')
        this.manageCategoryMenu = page.getByAltText('manage category')
    }
}

module.exports=MainPage;