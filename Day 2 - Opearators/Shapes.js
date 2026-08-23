// //rectangle
// let length = 20;
// let width = 5;
// let area = length * width;
// console.log("Area of rectangle is: " + area);

// let perimeter = 2 * (length + width);
// console.log("Perimeter of rectangle is: " + perimeter);

// //circle
// let radius = 7;
// let areaOfCircle = Math.PI * radius ** 2;
// console.log("Area of circle is: " + areaOfCircle);

// //temperature conversion
// let celciusValue = 25;
// let convertedToFahrenheit = celciusValue * 9/5 + 32;
// console.log("Temperature in Fahrenheit is: " + convertedToFahrenheit);

// let fahrenheitValue = convertedToFahrenheit;
// let convertedToCelcius = (fahrenheitValue - 32) * 5/9;
// console.log("Temperature in Celsius is: " + convertedToCelcius);

// //Seconds converter
// let seconds = 3672;
// let hours = Math.floor(seconds / 3600);
// let remainingSeconds = seconds % 3600;
// let minutes = Math.floor(remainingSeconds / 60) ;
// let finalRemaningSeconds = remainingSeconds % 60;
// console.log(hours)
// console.log(minutes)
// console.log(finalRemaningSeconds)
// //seconds
// // console.log(ms1)

//swap two numbers without using third variable
let num1 = 5;
let num2 = 7;
console.log(`Before swapping: num1 = ${num1}, num2 = ${num2}`);
num1 = num1 + num2; //12
num2 = num1 - num2; //5
num1 = num1 - num2; //7
console.log(`After swapping: num1 = ${num1}, num2 = ${num2}`);

//Reverse a three digit number
let number = 729;
let originalNumber = number;
let reversedNumber = 0;
let sumOfDigits =0;
let val = number%10 //9
sumOfDigits += val 
reversedNumber = reversedNumber*10 + val // 0 + 9 = 9
number = Math.floor(number/10) //72
val = number%10 //2
sumOfDigits += val 
reversedNumber = reversedNumber*10 + val // 90 + 2 = 92
number = Math.floor(number/10)
val = number%10 //9
sumOfDigits += val 
reversedNumber = reversedNumber*10 + val // 920 + 7 = 927
number = Math.floor(number/10)
console.log(`Original number is: ${originalNumber}, Reversed number is: ${reversedNumber}`);
console.log(`Sum of digits is: ${sumOfDigits}`);




