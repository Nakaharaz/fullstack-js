const Installment = require("./Installment.js")

class Loan {
  #creationDate

  constructor(value, numberOfInstallments){
    this.value = value
    this.numberOfInstallments = numberOfInstallments
    this.#creationDate = new Date()

    this.installments = calculateInstallments()
  }

  calculateInstallments() {
    const installments = []
    const valuePerInstallment = (this.value / this.numberOfInstallments);
    for(let i = 0; i < this.numberOfInstallments; i++) {
      const valueWithFee = (valuePerInstallment * Loan.basicFee) + this.valuePerInstallment
      const currentInstallment = new Installment(valueWithFee, (i + 1))
      installments.push(currentInstallment);
    }

    return installments
  }

  static #basicFee = 2.10

  static get basicFee() {
    return this.#basicFee;
  }

  static set basicFee(newBasicFee) {

    this.#basicFee = newBasicFee;
  }
}

module.exports = Loan