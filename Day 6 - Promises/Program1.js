const result = new Promise((resolve, reject) => {
        const isTrue = true;
        if(isTrue){
            resolve("Test passed");
        }else{
            reject("Test failed");
        }
});

result.then(test => {
    console.log(test)
})