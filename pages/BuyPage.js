exports.BuyPage = class BuyPage{

    constructor(page){
        this.page = page;
        this.buyLink= "//button[@id='mega-menu-:ra:-secondary-navigation-control-4']";
    }

    async gotoBuyLink(){
        await this.page.locator(this.buyLink).click();
    }



}