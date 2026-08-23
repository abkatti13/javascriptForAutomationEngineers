const users = [
    { username: "user01", role: "tester", active: true },
    { username: "user02", role: "admin", active: true },
    { username: "user03", role: "developer", active: false },
    { username: "user04", role: "tester", active: false }
];

const activeUsers = users
                    .filter(user => user.active === true)
                    .map(user => user.username);
console.log(activeUsers);

//Exercise 2
const transactions = [
    { id: "TXN001", amount: 5000, status: "SUCCESS" },
    { id: "TXN002", amount: 7500, status: "FAILED" },
    { id: "TXN003", amount: 12000, status: "SUCCESS" },
    { id: "TXN004", amount: 3000, status: "FAILED" }
];

const filteredTransactions = transactions
                    .filter(txn => txn.status === "SUCCESS")
                    .map(txn => txn.id);
console.log(filteredTransactions);