const transactions = [
    { id: "TXN001", amount: 5000, status: "SUCCESS" },
    { id: "TXN002", amount: 7500, status: "FAILED" },
    { id: "TXN003", amount: 12000, status: "SUCCESS" },
    { id: "TXN004", amount: 3000, status: "FAILED" }
];
const hasFailedTransaction = transactions.some( txn => txn.status === "FAILED");
console.log(hasFailedTransaction);

const hasPendingTransaction = transactions.some( txn => txn.status === "PENDING");
console.log(hasPendingTransaction);