function show() {
  // Get an unique element from your ID
  const contactList = document.getElementById("contact-list");

  // Get a list of elements (HTML Collection) using the <tag name>
  const listElements = document.getElementsByTagName('li');

  // Get a list of elements (HTML Collection) from class name
  const contactInputs = document.getElementsByClassName('contact-input');

  // Get a NodeList from a query as in CSS queries that returns multiple elements
  const contacts = document.querySelectorAll('#contact-list > li > label');
  
  // Get a list of elements (HTML Collection) from the name propertie
  const contact1 = document.getElementsByName('contact1');

  // Get an unique (and first element) from a query as in CSS queries
  const firstContact = document.querySelector('#contact-list > li > label');

  console.log(firstContact);
}