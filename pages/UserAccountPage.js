exports.UserAccountPage = class UserAccountPage{

    constructor(page){
        this.page = page;
        this.userAccountLink= 'svg[aria-label="avatar"]';
        this.loginTxt="//font[contains(text(),'Login')]"
        this.emailIdInput="#email-username-field"
        this.passwordInput="#password-field"
        this.loginBtn="#login-btn"
        this.loginErrorMsg="//font[text()='We did not recognize the username or password you entered. Try again.']"
        

    }

    async verifyLoginDisplayed(){
        const loginTxt=await page.$$(this.loginTxt)
        await expect(loginTxt).toBeVisible()
    }

    async verifyInvalidLoginDetails(emailId, password){
        await page.waitForTimeout(3000);
        await page.locator(this.emailIdInput).fill(emailId);
        await page.locator(this.passwordInput).fill(password);
        await page.locator(this.loginBtn).click();
        await expect(this.loginErrorMsg).toBeVisible()
    }

}