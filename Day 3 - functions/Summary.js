function test(value = 10){
    return value * 5;
}

console.log(test());
console.log(test(5));
console.log(test(null));
console.log(test(undefined));

//function assigned as variable
let sum =  function(a,b){
    return a+b;
};

console.log(`Sum is: ${sum(5,10)}`);