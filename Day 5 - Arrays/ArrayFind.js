const transactions = [
  { id: "TXN001", amount: 5000, status: "SUCCESS" },
  { id: "TXN002", amount: 7500, status: "FAILED" },
  { id: "TXN003", amount: 12000, status: "SUCCESS" },
  { id: "TXN004", amount: 3000, status: "FAILED" },
];

const txn03 = transactions.find((txn) => txn.id === "TXN003");
console.log(`Transaction ID: ${txn03.id}`);
console.log(`Amount: ${txn03.amount}`);
console.log(`Status: ${txn03.status}`);

//Exercise 2
const transactions1 = [
  { id: "TXN001", amount: 5000, status: "SUCCESS", type: "DOMESTIC" },
  { id: "TXN002", amount: 7500, status: "FAILED", type: "INTERNATIONAL" },
  { id: "TXN003", amount: 12000, status: "SUCCESS", type: "INTERNATIONAL" },
  { id: "TXN004", amount: 3000, status: "FAILED", type: "DOMESTIC" },
];
const transaction = transactions1.find(
  (txn) => txn.status === "SUCCESS" && txn.type === "INTERNATIONAL",
);
if (transaction !== undefined) {
  console.log(transaction);
}
