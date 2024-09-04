class Deposit {
  #creationDate
  constructor(value) {
    this.value = value;
    this.#creationDate = new Date();
  }

  get creationDate() {
    return this.#creationDate
  }
}

module.exports = Deposit;