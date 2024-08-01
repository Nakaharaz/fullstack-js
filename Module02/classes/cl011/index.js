function register(e) {
  const sectionElement = e.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation = sectionElement.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert(`User ${username} registered!`);
    return;
  }

  alert(`The passwords don't match!`)
}

const button = document.getElementById('register-button');

button.addEventListener('click', register)

function removeEvent() {
  button.removeEventListener('click', register);
}

button.addEventListener('mouseover', (e) => {
  console.log(e.currentTarget)
})