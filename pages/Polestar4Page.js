exports.Polestar4Page = class Polestar4Page{

    constructor(page){
        this.page = page;
        this.polestar4Link= "//button[@id='mega-menu-:ra:-secondary-navigation-control-2']";
    }

    async gotoPolestar3Link(){
        await this.page.locator(this.polestart4Link).click();
    }



}