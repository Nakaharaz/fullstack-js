const Deposit = require("./Deposit.js")
const Loan = require("./Loan.js")
const Transfer = require("./Transfer.js")

class Account {
  #balance
  constructor(balance, owner) {
    this.#balance = balance
    this.owner = owner

    this.transfers = []
    this.deposits = []
    this.loans = []
  }

  get balance() {
    return this.#balance;
  }

  set balance(newBalance) {
    this.#balance = newBalance;
  }

  deposit(value) {
    const newDeposit = new Deposit(value)
    this.deposits.push(newDeposit)
    this.balance += value
  }

  takeOutLoan(value, numberOfInstallments) {
    const newLoan = new Loan(value, numberOfInstallments)
    this.balance += value
    this.loans.push(newLoan)
  }

  transfer(sender, receiver, value) {
    const newTransfer = new Transfer(sender, receiver, value)

    if (sender === this) {
      this.balance -= newTransfer.value;
      this.transfers.push(newTransfer)
      receiver.balance += newTransfer.value
      return
    }

    this.balance += value
    sender.balance -= value
    return
  }
}

module.exports = Account