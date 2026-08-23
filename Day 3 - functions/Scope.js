// function calculateTransaction(){
//     let amount = 10000;
//     let fee = 250;
//     let result = amount - fee;
//     console.log(`Transaction value: ${result}`);
// }

// calculateTransaction();
// // console.log(amount);clear

// function testScope(){
//     var a = 10;
//     let b = 20;
//     if(true){
//         var c = 30;
//         let d = 40;
//             console.log(a);
//             console.log(b);
//             console.log(c);
//             console.log(d);   
//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
// }

// testScope();


// let globalValue = "Global";

// function outerFunction(){
//     let outerValue = "Outer";
//     function innerFunction(){
//         let innerValue = "Inner";
//         console.log(globalValue);
//         console.log(outerValue);
//         console.log(innerValue);
//     } 
//     innerFunction();
//     console.log(globalValue);
//     console.log(outerValue);
//     console.log(innerValue);
// }

// outerFunction();



let company = "Axa GBS";
function outer(){
    let role = "Architect";
    function inner(){
        console.log(company);
        console.log(role);
    }
    inner();
    console.log(company);
    console.log(role);
    // console.log(name); // name is not defined because it is block scoped
}

outer();