"use strict";
class Accountxsmax {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
    }
    deposit(money) {
        this.balance += money;
        this.history.push(new Transaction(this.history.length + 1, "deposit", money, this.balance));
    }
    withdraw(money) {
        if (this.balance >= money) {
            this.balance -= money;
            this.history.push(new Transaction(this.history.length + 1, "withdraw", money, this.balance));
        }
        else {
            console.log("số dư tài khoản không đủ");
        }
    }
    transfer(accountNumber, money) {
        if (this.balance >= money) {
            let findAccount = accounts.find(item => item.accountNumber === accountNumber);
            if (findAccount) {
                this.balance -= money;
                this.history.push(new Transaction(this.history.length + 1, "transfer", money, this.balance));
                findAccount.balance += money;
                findAccount.history.push(new Transaction(findAccount.history.length + 1, "transfer", money, this.balance));
            }
            else {
                console.log("Không tìm thấy tài khoản vui lòng kiểm tra lại");
            }
        }
        else {
            console.log("Số dư tài khoản không đủ để thực hiện giao dịch vui lòng nạp thêm tiền");
        }
    }
    showHistory() {
        this.history.forEach((item) => {
            console.log(item);
        });
    }
}
let accounts = [];
class Transaction {
    constructor(id, type, amount, newBalance) {
        this.id = id;
        this.type = type;
        this.amount = amount;
        this.newBalance = newBalance;
    }
}
let acc1 = new Accountxsmax(1, 5000000);
let acc2 = new Accountxsmax(2, 10000000);
accounts = [
    acc1,
    acc2
];
acc1.deposit(500000);
acc1.withdraw(200000);
acc1.transfer(2, 300000);
acc1.showHistory();
