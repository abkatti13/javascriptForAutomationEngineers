function sayHello(){
    console.log("Welcome to project elevate");
}

function greetUser(name){
    console.log(`Hello ${name}`);
}

function square(num){
    return Math.pow(num,2);
}

function generateEmail(name){
    return `${name.toLowerCase()}@elevate.com`;;
}



sayHello();
greetUser("Abhishek");
let result = square(5);
console.log("Square of 5 is: " + result);

let email = generateEmail("Abhishek");
console.log(email);