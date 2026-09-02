function validateBrowser(browser) {
    const supportedBrowsers = ["chromium", "firefox", "webkit"];
    const validBroswer =  supportedBrowsers.includes(browser.toLowerCase())
    if(validBroswer){
        return true;
    }else{
        throw new Error(`Unsupported browser: ${browser}`);
    }
}
const browser = "firefox";
try {
    console.log(validateBrowser(browser));
} catch (error) {
    console.log(`Error is: ${error.message}`)
}