exports.HomePage = class HomePage{

    constructor(page){
        this.page = page;
        this.polestar="//a[@class='css-uuqt7d']";
        this.acceptAll="//font[contains(text(),'Accept all')]";
        this.userAccountLink= 'svg[aria-label="avatar"]';
    }

    async navigateHomePage(){
        await page.goto('https://www.polestar.com/se/');
        await page.waitForTimeout(3000)
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle('Polestar - Elbilar | Polestar Sverige');
    }

    async verifyPolestarDisplayed(){
        const logoElement=await page.$$(this.polestar)
        await expect(logoElement).toBeVisible()
    }

    async navigateUserAccountPage(){
        await this.page.locator(this.userAccountLink).click();
    }


}