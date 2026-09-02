function processPayment() {
  return new Promise((resolve, reject) => {
    const paymentSuccessful = true;

    if (paymentSuccessful) {
      resolve("Payment successful");
    } else {
      reject("Payment failed");
    }
  });
}

async function executePayment() {
  try {
    const status = await processPayment();
    console.log(status);
  } catch (error) {
    console.log(`Payment error: ${error}`);
  } finally {
    console.log("Payment processing completed");
  }
}

executePayment();

function validateAmount(amount) {
  if (amount <= 0) {
    throw new Error("Amount must be greater than zero");
  }
  return true;
}

console.log(validateAmount(500));
try{
    console.log(validateAmount(-1));
}catch(error){
    console.log(`Validation error: ${error.message}`)
}

