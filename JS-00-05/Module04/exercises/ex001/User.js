class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log(`Welcome, ${this.fullname}`)
      return
    }

    console.log('Incorrect credentials!');
    return
  }
}

const enzoUser = new User('Enzo Nakahara', 'enzonakahara@gmail.com', '12345678');

enzoUser.login('enzonakahara@gmail.com', '1234567');