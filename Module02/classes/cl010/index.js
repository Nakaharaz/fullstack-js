function register(element) {
  const username = element.children.username.value;
  const password = element.children.password.value;
  const passwordConfirmation = element.children.passwordConfirmation.value;

  console.log(element.children)

  if(password === passwordConfirmation){
    alert(`User ${username} registered!`);
    return
  }

  alert(`The passwords don't match!`);
}