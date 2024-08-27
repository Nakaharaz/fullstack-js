const Account = require("./Account.js");
const Loan = require("./Loan");
const User = require("./User.js");

class App {
  static #allUsers = []

  static get allUsers() {
    return this.#allUsers;
  }

  static set allUsers(newUser) {
    this.#allUsers.push(newUser);
  }

  static findUserByEmail(email) {
    const userFound = this.#allUsers.filter((user) => user.email === email);
    return userFound[0];
  }

  static createUser(fullname, email, account) {
    console.log('Creating user...');
    if (App.findUserByEmail(email) != undefined) {
      console.log(`This email is already in use!`)
      return;
    }
    console.log('User created!');
    const newUser = new User(fullname, email, account);
    App.allUsers = newUser;
    return newUser;
  }

  static deposit(email, value) {
    const user = this.findUserByEmail(email).account;
    console.log(`Making a deposit to ${user.owner} in the amount of: ${value}`)
    user.deposit(value)
  }

  static transfer(senderEmail, receiverEmail, value) {
    const senderUser = App.findUserByEmail(senderEmail)
    const receiverUser = App.findUserByEmail(receiverEmail)

    console.log(`Making a transfer from ${senderUser.fullname} to ${receiverUser.fullname} in the amount of: ${value}`)
    senderUser.account.transfer(senderUser.account, receiverUser.account, value);
  }

  static loan(userEmail, value, numberOfInstallments) {
    const user = this.findUserByEmail(userEmail);

    user.account.takeOutLoan(value, numberOfInstallments)

    console.log(`Taking out a loan to ${user.fullname} in the amount of ${value} in ${numberOfInstallments} times`)
  }

  static changeLoanFee(newLoanFee) {
    Loan.basicFee = newLoanFee
    console.log(`Changed to ${Loan.basicFee * 100}%`)
  }
}

App.changeLoanFee('12%')

module.exports = App