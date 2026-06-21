const {
  Given,
  When,
  Then,
  After,
  setDefaultTimeout
} = require('@cucumber/cucumber');

const { expect } = require('@playwright/test');

const BrowserManager = require('../../utils/BrowserManager');
const RegisterPage = require('../../pages/RegisterPage');
const LoginPage = require('../../pages/LoginPage');
const AccountPage = require('../../pages/AccountPage');
const user = require('../../test-data/userData');

setDefaultTimeout(60000);

let browser;
let page;

Given('User launches ParaBank application', async function () {

    const browserObj = await BrowserManager.launchBrowser();

    browser = browserObj.browser;
    page = browserObj.page;

    await page.goto(
        'https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC'
    );

    console.log("ParaBank Application Launched");
});

When('User registers a new account', async function () {

    const registerPage = new RegisterPage(page);

    await registerPage.registerUser(user);

    console.log("User Registration Successful");
});

When('User logs in using created account', async function () {

    await page.goto(
        'https://parabank.parasoft.com/parabank/logout.htm'
    );

    const loginPage = new LoginPage(page);

    await loginPage.login(
        user.username,
        user.password
    );

    console.log("User Login Successful");
});

Then('User should see account balance', async function () {

    const accountPage = new AccountPage(page);

    const balance = await accountPage.getAccountBalance();

    console.log("Account Balance:", balance);

    expect(balance).toContain('$');
});

After(async function () {

    if (browser) {
        await browser.close();
    }
});