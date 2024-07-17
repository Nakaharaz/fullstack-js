function double(num) {
  alert(`The double of ${num} is ${num * 2}`);
}

// double(10);

function sayHello(name = "Enzo") {
  alert(`Hello, ${name}!`);
}

function sum(a, b, c, d, e) {
  let sum = a + b + c + d + e;
  alert(`The result is: ${sum}`)
}

function createUser(name, email, password, type = 'Admin') {
  const user = {
    name,
    email,
    password,
    type
  }

  console.log(user);
}

createUser('Enzo', 'enzonakahara@gmail.com', 1234, 'Normal User')