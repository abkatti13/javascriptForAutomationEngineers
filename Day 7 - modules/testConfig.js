import {getSupportedBrowsers, isSupportedBrowser} from "./BrowserUtils.js";
import {BrowserConfig} from "./BrowserConfig.js"
const browsers = getSupportedBrowsers();
const isValid = isSupportedBrowser("firefox");

console.log(browsers);
console.log(isValid);


const chromeConfig = new BrowserConfig("Chrome", true);
const firefoxConfig = new BrowserConfig("Firefox",false);

chromeConfig.displayConfig();
firefoxConfig.displayConfig();
