exports.Polestar3Page = class Polestar3Page{

    constructor(page){
        this.page = page;
        this.polestar3Link= "//button[@id='mega-menu-:ra:-secondary-navigation-control-1']";
    }

    async gotoPolestar3Link(){
        await this.page.locator(this.polestar3Link).click();
    }



}