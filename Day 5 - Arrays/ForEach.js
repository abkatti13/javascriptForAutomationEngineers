const browsers = ["chromium", "firefox", "webkit"];

browsers.forEach(browser => {
    console.log(`Testing browser: ${browser}`);
})

const transactions = [
    { id: "TXN001", status: "SUCCESS" },
    { id: "TXN002", status: "FAILED" },
    { id: "TXN003", status: "SUCCESS" }
];

transactions.forEach(txn =>{
    console.log(`Transaction ${txn.id} -> ${txn.status}`);
})

const supportedBrowsers = [
    "chromium",
    "firefox",
    "webkit"
];
console.log(supportedBrowsers.includes("firefox"));
console.log(supportedBrowsers.includes("edge"));
