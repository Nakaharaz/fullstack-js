class Transfer {
  #creationDate
  
  constructor(sender, receiver, value) {
    this.sender = sender;
    this.receiver = receiver;
    this.value = value
    this.#creationDate = new Date()
  }
}

module.exports = Transfer