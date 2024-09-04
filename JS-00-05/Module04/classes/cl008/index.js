const Address = require("./Address");
const Person = require("./Person");

const address = new Address('Joaquim Rodriges de Oliveira', 815, 'Vila Cláudia', 'Limeira', 'SP');
const enzo = new Person('Enzo Nakahara', address);

console.log(enzo);
console.log(enzo.address.fullAddress());
