let person = {
  name: "Enzo",
  age: 20,
  sayHello() {
    console.log(`Hello, My name is ${this.name}`)
  },
}
let person2 = {
  name: "Mykmita",
  age: 20,
  sayHello() {
    console.log(`Hello, My name is ${this.name}`)
  },
}

person.sayHello();
person2.sayHello();