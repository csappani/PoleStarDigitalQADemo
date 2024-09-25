exports.ChargePage = class ChargePage{

    constructor(page){
        this.page = page;
        this.chargeLink= "//button[@id='mega-menu-:ra:-secondary-navigation-control-3']";
    }

    async gotoChargeLink(){
        await this.page.locator(this.chargeLink).click();
    }



}