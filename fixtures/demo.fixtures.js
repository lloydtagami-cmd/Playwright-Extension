
// tests/fixtures.js
const base = require('@playwright/test');
const LoginPage = require('../pages/loginpage');

exports.test = base.test.extend({
  loginPage: async ({ page }, use) => {
    const lp = new LoginPage(page);
    await use(lp);
    // no teardown needed, but you could add cleanup here if required
  },
  // You can also add a "loggedInPage" fixture if desired (see Option 2)
});

exports.expect = base.expect;
