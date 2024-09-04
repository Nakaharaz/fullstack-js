class Account {
  #password
  #balance

  constructor(user) {
    this.email = user.email
    this.#password = user.password
    this.#balance = 0
  }

  getBalance(email, password) {
    if (this.#autenticate(email, password)) {
      return this.#balance;
    }
    return null;
  }

  #autenticate(email, password) {
    return this.email === email && this.#password === password;
  }
}

const user = {
  email: 'enzonakahara@gmail.com',
  password: '12345'
}

const myAccount = new Account(user);

console.log(myAccount.getBalance('enzonakahara@gmail.com', '12345'))