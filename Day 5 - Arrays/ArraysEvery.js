const transactions = [
    { id: "TXN001", amount: 5000, status: "SUCCESS" },
    { id: "TXN002", amount: 7500, status: "SUCCESS" },
    { id: "TXN003", amount: 12000, status: "SUCCESS" }
];

const allTransactionsSuccessful = transactions.every(txn => txn.status === "SUCCESS");
console.log(allTransactionsSuccessful); 

const allTransactionsAbove5000 = transactions.every( txn => txn.amount > 5000);
console.log(allTransactionsAbove5000);
