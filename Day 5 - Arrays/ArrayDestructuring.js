const browsers = ["chromium", "firefox", "webkit"];
const [firstBrowser, secondBrowser, thirdBrowser] = browsers;
console.log(firstBrowser);
console.log(secondBrowser);
console.log(thirdBrowser);

const testResults = [
    "PASSED",
    "Payment Test",
    2500
];
const [testStatus, ,executionTime] = testResults
console.log(testStatus)
console.log(executionTime)

const browsersNew = [
    "chromium",
    "firefox",
    "webkit",
    "edge"
];

const [firstBrowserNew, ...remainingBrowsers] = browsersNew;
console.log(firstBrowserNew)
console.log(remainingBrowsers)
