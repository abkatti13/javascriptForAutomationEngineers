const browsers = ["Chrome", "Edge", "Firefox"];
// console.log(browsers[0]);
// console.log(browsers[1]);
// console.log(browsers[2]);
// console.log(browsers[3]);
// console.log(browsers[4]); 

// const users = [
//     {
//         username : "user01",
//         role:"tester",
//         active:true
//     },
//     {
//         username : "user02",
//         role:"admin",
//         active:true
//     },
//     {
//         username : "user03",
//         role:"developer",
//         active:false
//     }
// ];
// console.log(`Username: ${users[0].username}`);
// console.log(`Username: ${users[1].username}`);
// console.log(`Username: ${users[2].username}`);
// users.push({
//     username : "user04",
//     role:"tester",
//     active:true
// });
// console.log(`Username: ${users[3].username}`);
// console.log(`Total users: ${users.length}`);

// const removedUser = users.pop();
// console.log(`Removed user: ${removedUser}`);
// let userType = typeof removedUser;
// if(userType === "Object") {
//     console.log("removed user is an object");
// }else{
//     console.log("removed user is not an object");
// }
// console.log(removedUser);
// console.log(JSON.stringify(removedUser));
// console.log(`Total users: ${users.length}`);

// //object destructuring
// const testUser = {
//     username : "automation01",
//     role : "tester",
//     active : true
// }
// const {username, role} = testUser;
// console.log(`Username: ${username}`);
// console.log(`Role: ${role}`);

//final exercise
const testConfig = {
    environment: "QA",
    browser: "chromium",
    headless: true,
    timeout: 30000
};

const {environment, browser} = testConfig;
console.log(`Environment: ${environment}`);
console.log(`Browser: ${browser}`);
console.log(`Headless before updating: ${testConfig.headless}`);
testConfig.headless = false;
console.log(`Headless after updating: ${testConfig.headless}`);
testConfig.retries = 2;
console.log(testConfig);
console.log(Object.keys(testConfig).length);
