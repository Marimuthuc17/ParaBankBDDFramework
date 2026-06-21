class AccountPage {

    constructor(page) {
        this.page = page;
    }

    async getAccountBalance() {

        await this.page.waitForLoadState('networkidle');

        const balance = await this.page
            .locator('#accountTable tbody tr')
            .first()
            .locator('td')
            .nth(1)
            .textContent();

        return balance.trim();
    }
}

module.exports = AccountPage;