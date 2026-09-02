const browsers = ["chromium", "firefox", "webkit"];

const browserList = browsers.join();

console.log(browserList);

const testCases = [
    "Login",
    "Payment",
    "Search",
    "Logout"
];
const testCaseFlow = testCases.join(" -> ")
console.log(testCaseFlow)

const testGroups = [
    ["Login", "Logout"],
    ["Payment", "Refund"],
    ["Search", "Profile"]
];

console.log(testGroups.flat());