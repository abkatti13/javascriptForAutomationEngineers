const testCOnfig = {
  baseURL: "https://test.example.com",
  browser: "chromium",
  headless: true,
  environment: "QA",
  displayConfig: function(){
    console.log(`Base URL: ${this.baseURL}`);
    console.log(`Browser: ${this.browser}`);
    console.log(`Headless: ${this.headless}`);
    console.log(`Environment: ${this.environment}`);  
  }
};

testCOnfig.displayConfig();


//Exercise 4
const customer = {
    firstName: "Abhishek",
    lastName: "Katti",
    email: "abhishek.katti@domain.com",
    address:{
        city: "Bangalore",
        country: "India",
        postcode: "560068"
    }
};
console.log(`Customer: ${customer.firstName} ${customer.lastName}`);
console.log(`Email: ${customer.email}`);
console.log(`City: ${customer.address.city}`);
console.log(`Country: ${customer.address.country}`);
console.log(`Postcode: ${customer.address.postcode}`);
