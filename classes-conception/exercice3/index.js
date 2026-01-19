class BankAccount {
    accountNumber;
    balance;
    transactions;
    
    constructor(accountNumber, balance, transactions) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.transactions = [];
    }
    
      deposit(amount) {
        this.balance = this.balance + amount;
        this.transactions.push("Deposit " + amount);
    }

    withdraw(amount) {
        this.balance = this.balance - amount;
        this.transactions.push("Withdraw " + amount);
    }

    showTransactions() {
        return this.transactions;
    }
}

let account = new BankAccount("FR123456789", 128);

account.deposit(50);
account.withdraw(30);
account.deposit(20);

console.log("Balance:", account.balance);
console.log("Transactions:", account.showTransactions());