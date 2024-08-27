const Installment = require("./Installment.js")

class Loan {
  #creationDate

  constructor(value, numberOfInstallments) {
    this.value = value
    this.numberOfInstallments = numberOfInstallments
    this.#creationDate = new Date()

    this.installments = this.calculateInstallments()
  }

  static #basicFee = 0.13

  static get basicFee() {
    return this.#basicFee;
  }

  static set basicFee(newBasicFee) {
    let newFeeConverted = newBasicFee.split('%')[0] / 100
    this.#basicFee = newFeeConverted;
  }

  calculateInstallments() {
    const installments = []

    const valuePerInstallment = (this.value / this.numberOfInstallments);
    const feePerMonth = 1 - (Loan.#basicFee / 12);

    for (let i = 0; i < this.numberOfInstallments; i++) {
      const valueWithFee = (valuePerInstallment / feePerMonth).toPrecision(4)
      const currentInstallment = new Installment(valueWithFee, (i + 1))
      installments.push(currentInstallment);
    }

    return installments
  }

}

module.exports = Loan