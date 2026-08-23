const numbers = [50, 10, 40, 20, 30];
// const numbers = [10, 2, 30,4];
numbers.sort();
console.log(numbers);

numbers.sort((a,b) => a-b);
console.log(numbers);

numbers.sort((a,b) => b-a);
console.log(numbers);

const responseTimes = [450, 120, 800, 250, 90];
responseTimes.sort((a,b) => a-b);
console.log(responseTimes);