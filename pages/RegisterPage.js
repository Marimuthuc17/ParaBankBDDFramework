class RegisterPage {

    constructor(page){
        this.page = page;
    }

    async registerUser(user){

        await this.page.click("text=Register");

        await this.page.locator("#customer\\.firstName")
        .fill(user.firstName);

        await this.page.locator("#customer\\.lastName")
        .fill(user.lastName);

        await this.page.locator("#customer\\.address\\.street")
        .fill(user.address);

        await this.page.locator("#customer\\.address\\.city")
        .fill(user.city);

        await this.page.locator("#customer\\.address\\.state")
        .fill(user.state);

        await this.page.locator("#customer\\.address\\.zipCode")
        .fill(user.zipCode);

        await this.page.locator("#customer\\.phoneNumber")
        .fill(user.phone);

        await this.page.locator("#customer\\.ssn")
        .fill(user.ssn);

        await this.page.locator("#customer\\.username")
        .fill(user.username);

        await this.page.locator("#customer\\.password")
        .fill(user.password);

        await this.page.locator("#repeatedPassword")
        .fill(user.password);

        await this.page.locator("input[value='Register']")
        .click();
    }
}

module.exports = RegisterPage;