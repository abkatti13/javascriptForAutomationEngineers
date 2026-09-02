export class BrowserConfig{
    constructor(browser, headless){
        this.browser = browser;
        this.headless = headless;
    }

    displayConfig(){
        console.log(`Browser: ${this.browser}`);
        console.log(`Headless: ${this.headless}`);
    }
}