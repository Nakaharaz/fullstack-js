const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [{
    name: "Mary",
    address: {
      street: "Some Street",
      number: 89
    }
  }],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432"
  },
  brothers: [
    {
      name: 'Eduardo Doe',
      age: 19,
    },
    {
      name: 'Eduardo Doe',
      age: 19,
    },
  ]
}

console.log(user.friends[0].phone?.ddd)
console.log(user?.brothers?.length)