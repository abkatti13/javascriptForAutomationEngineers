const browsers = ["Chrome", "Firefox", "Safari"];
const upperBrowsers = [];
//traditional method
for (const browser of browsers){
    upperBrowsers.push(browser.toUpperCase());
}
console.log(`Original array: ${browsers}`);
console.log(`Uppercase array: ${upperBrowsers}`);

//Exercise 3
const browsers1 = ["chromium", "firefox", "webkit"];
const browserNames = browsers1.map( browser => `"Browser: ${browser}"`)

console.log(browsers1);
console.log(browserNames);