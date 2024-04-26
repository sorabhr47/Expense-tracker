// Created by Dhruv



document.addEventListener("DOMContentLoaded", () => {
    const balanceElement = document.getElementById("balance");
    const transactionsElement = document.getElementById("transactions");
    const expenseForm = document.getElementById("expense-form");

    let balance = 0;
    let transactions = [];

    expenseForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const amount = parseFloat(document.getElementById("amount").value);
        const category = document.getElementById("category").value;
        const date = document.getElementById("date").value;

        if (isNaN(amount) || amount <= 0 || !category || !date) {
            alert("Please enter valid details for the transaction.");
            return;
        }

        const transaction = { amount, category, date };
        transactions.push(transaction);

        updateBalance();
        updateTransactions();

        expenseForm.reset();
    });

    function updateBalance() {
        balance = transactions.reduce((total, transaction) => total + transaction.amount, 0);
        balanceElement.textContent = `Balance: $${balance.toFixed(2)}`;
    }

    function updateTransactions() {
        transactionsElement.innerHTML = "";
        transactions.forEach((transaction) => {
            const transactionItem = document.createElement("div");
            transactionItem.textContent = `${transaction.date} - ${transaction.category}: $${transaction.amount.toFixed(2)}`;
            transactionsElement.appendChild(transactionItem);
        });
    }
});
              
