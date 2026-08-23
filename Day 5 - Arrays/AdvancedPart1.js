const browsers = ["chromium", "firefox", "webkit"];
console.log(`Original array: ${browsers}`);
browsers.push("edge");
browsers.unshift("safari");
console.log(`After adding elements: ${browsers}`);
console.log(`Before removing elements: ${browsers.length}`);
const removedBrowser = browsers.shift();
const lastBrowser = browsers.pop();
console.log(`Removed browser: ${removedBrowser}`);
console.log(`Last browser: ${lastBrowser}`);
console.log(`After removing elements: ${browsers.length}`);

//Exercise 2
for (const browser of browsers){
    console.log(`Testing on ${browser}`);
}
