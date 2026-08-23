const responseTimes = [450, 120, 800, 250, 90];

const totalResponseTime = responseTimes.reduce((sum, time) => sum + time,0);
console.log(totalResponseTime);

//Exercise 2
const transactions = [
    { id: "TXN001", amount: 5000, status: "SUCCESS" },
    { id: "TXN002", amount: 7500, status: "FAILED" },
    { id: "TXN003", amount: 12000, status: "SUCCESS" },
    { id: "TXN004", amount: 3000, status: "FAILED" }
];

const successfulTransactions = transactions.filter(txn => txn.status === "SUCCESS");
// console.log(successfulTransactions);


const totalSuccessTransactionAmount = successfulTransactions
                .reduce((sum, txn) => sum+txn.amount,0);
console.log(totalSuccessTransactionAmount);

const totalSuccessfulAmount = transactions
                            .reduce((sum, txn) =>{
                            if(txn.status === "SUCCESS"){
                                sum+=txn.amount;
                            }         
                            return sum;
                            },0);