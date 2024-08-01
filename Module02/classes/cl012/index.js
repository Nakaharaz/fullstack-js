const formElement = document.getElementById('orderForm')

formElement.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const address = document.querySelector('input[name="address"]').value;

  const breadType = document.querySelector('select[name="breadType"]').value;
  const main = document.querySelector('input[name="main"]').value;
  const observations = document.querySelector('textarea[name="observations"]').value;

  let salad = "";
  document.querySelectorAll('input[name="salad"]:checked').forEach((item) => {
    salad += ` - ${item.value} \n`;
  })

  alert(
    "Order Sent!" +
    "\nClient's name: " + name +
    "\nAddress: " + address +
    "\nBread Type: " + breadType +
    "\nFilling: \n - " + main + "\n" + salad + "\n" +
    "Obs: " + observations
  )
})