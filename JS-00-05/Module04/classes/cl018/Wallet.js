class Wallet {
  #amount
  #username

  constructor() {
    this.#amount = 100.99 * 100;
  }

  get amount() {
    return this.#amount / 100;
  }

  set username(newUsername) {

    if(typeof newUsername === 'string') {
      this.#username = newUsername
      return
    }
    console.log('Username must be a string!')
  }

  get username() {
    return this.#username
  }
}

const myWallet = new Wallet();

console.log(myWallet.amount);

myWallet.username = 'Enzo';
console.log(myWallet.username)
