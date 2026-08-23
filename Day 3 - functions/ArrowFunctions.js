//Exercise 1
let squareNum = (num) => {return num * num};

let greet = (name) => {return `Hello ${name}`};

let isAdult = (age) => {return age >= 18};


console.log(`Square of 5 is: ${squareNum(5)}`);
console.log(greet("Abhishek"));
console.log(`Is 20 an adult? ${isAdult(20)}`);  

//Exercise 2
const generateTestId = (feature, num) => {
    return `${feature}-${num}`;
};

console.log(generateTestId("SharingRule", 110));

//Exercise 3
const calculate = (a,b) => a * b;
let result = calculate;
console.log(`Result is : ${result(2,3)}`);
