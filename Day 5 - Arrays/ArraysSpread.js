//Exercise 1
const browsers = ["chromium", "firefox", "webkit"];
console.log(browsers);
const allBrowsers = [...browsers, "edge"];
console.log(allBrowsers);

//Exercise 2
const baseConfig = {
    browser: "chromium",
    headless: true,
    timeout: 30000
};
console.log(baseConfig);
const mobileConfig = { ...baseConfig, browser: "webkit",
device: "iPhone"}
console.log(mobileConfig);

//Exercise 1
function calculateAverage(...numbers){
    let total = numbers.reduce(
        (sum, number) => sum + number, 0
    );
    let lengthOfArray = numbers.length;
    return total/lengthOfArray;
}

console.log(calculateAverage(80,90,100));

//Exercise 2
function createTestTags(...tags){
    console.log(tags);
}

createTestTags("smoke", "regression", "payment");