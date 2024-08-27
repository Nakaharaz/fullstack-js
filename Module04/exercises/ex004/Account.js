const Deposit = require("./Deposit.js")

class Account {
  #balance
  constructor(balance, owner) {
    this.#balance = balance
    this.owner = owner

    this.transfers = []
    this.deposits = []
    this.loans = []
  }

  get balance(){
    return this.#balance;
  }

  deposit(value) {
    const newDeposit = new Deposit(value)
    this.deposits.push(newDeposit)
    this.#balance += value
  }
  
}
module.exports = Account