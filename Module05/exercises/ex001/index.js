
function validateEmail(emailString) {
  const emailRegExp = /[\w|\.]{2,}(?=@)@(?<=@)\w{2,}(\.\w{2,})+/;

  if (emailString.match(emailRegExp) === null) {
    throw new Error("The email doesn't match with the pattern aa@aa.aa")
  }

  return true;
}

function validatePassword(passwordString) {
  const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/g;

  if (passwordString.match(passwordRegExp) === null) {
    throw new Error("The password doesn't match required characters")
  }

  return true;
}

document.getElementById('submitBtn').addEventListener('click', (e) => {
  e.preventDefault()

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    validateEmail(email);
    validatePassword(password);
    console.log('Logged in');
  } catch (err) {
    console.log('Error in login')
    console.error(err.message)
  }

})