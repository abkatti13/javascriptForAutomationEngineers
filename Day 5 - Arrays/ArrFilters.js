// const numbers = [10, 15, 20, 25, 30, 35, 40];
// const numbersAbove20 = numbers.filter(number => number > 20);
// console.log(numbersAbove20);

//Exercise 2
const users = [
    { username: "user01", role: "tester", active: true },
    { username: "user02", role: "admin", active: true },
    { username: "user03", role: "developer", active: false },
    { username: "user04", role: "tester", active: false }
];

const activeUsers = users.filter(user => user.active === true);
console.log(activeUsers);

const testers = users.filter(user => user.role === "tester");
console.log(testers);

const activeTesters = users.filter(
    user => user.role === "tester"
    && user.active === true);
console.log(activeTesters);