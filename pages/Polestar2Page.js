exports.PolestarPage = class PolestarPage{

    constructor(page){
        this.page = page;
        this.polestart2Link= "//button[@id='mega-menu-:ra:-secondary-navigation-control-0']";
    }

    async gotoPolestar2Link(){
        await this.page.locator(this.polestart2Link).click();
    }

}