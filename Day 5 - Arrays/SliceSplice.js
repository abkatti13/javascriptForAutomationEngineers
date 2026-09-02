const testCases = [
    "Login",
    "Payment",
    "Search",
    "Logout",
    "Profile"
];

const modifiedTestCases = testCases.slice(1,4);
console.log(modifiedTestCases);
const testCases1 = [
    "Login",
    "Payment",
    "Search",
    "Logout",
    "Profile"
];
const newCases = testCases1.splice(2,1);
console.log(newCases);
console.log(testCases1);