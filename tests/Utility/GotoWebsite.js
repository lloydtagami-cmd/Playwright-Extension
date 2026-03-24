class GotoWebsite {
    constructor(page) {
        this.page = page;
    }

    async gotoFreelance(){
        await this.page.goto("https://freelance-learn-automation.vercel.app/login")
    }
}

module.exports = GotoWebsite;