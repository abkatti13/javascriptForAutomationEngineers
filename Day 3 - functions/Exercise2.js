function generateCorporateEmail(firstName, lastName){
   return `${firstName.trim().toLowerCase()}.${lastName.trim().toLowerCase()}@elevate.com`;
}

function findLargest(num1, num2){
    if(num1 === num2){
        return "Both numbers are equal";
    }else if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}

console.log(generateCorporateEmail("Abhishek", "Katti"));
console.log(findLargest(19, 19));