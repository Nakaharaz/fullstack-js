class Installment {
  constructor(value, numberOfInstallment, status = 'Pendent') {
    this.value = value
    this.numberOfInstallment = numberOfInstallment
    this.status = status
  }
}

module.exports = Installment