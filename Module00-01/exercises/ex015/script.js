let properties = [];
let option = ''

do {
  option = prompt(`
      Welcome to your personal Properties Manager!\n
      Currently, you have ${properties.length} properties saved...\n
      What do you wanna do now?\n
      1. Show all properties\n
      2. Add a propertie\n
      3. Consult a propertie\n
      4. Leave program
    `);

  switch (option) {
    case '1':
      let formattedProperties = ''; 
      for (let i = 0; i < properties.length; i++) {
        const element = `
        ${i + 1}°: Owner name:${properties[i].ownerName}\n
        Quantity of rooms: ${properties[i].quantityOfRooms}\n
        Quantity of bathrooms: ${properties[i].quantityOfBaths}\n
        Have garage?: ${properties[i].haveGarage}\n
        `;
        formattedProperties += element;
      }
      alert("Here is all the properties saved:" + formattedProperties);
      break;
    case '2':
      let newPropertie = {
        ownerName: prompt("What is the owner name?"),
        quantityOfRooms: prompt("How many rooms are there in the propertie?"),
        quantityOfBaths: prompt("How many bathrooms are there in the propertie?"),
        haveGarage: prompt('Does the propertie have a garage?')
      }
      properties.push(newPropertie)
      break;
    case '3':
      const propertieToSearch = prompt("What is the number of the propertie that you want to search for?")
      if (properties[propertieToSearch - 1  ]) {
        alert(properties[propertieToSearch - 1]);
      } else {
        alert("I didn't find any propertie with this number")
      }
      break;
    case '4':
      alert('Stoping the program...')
      break;

    default:
      alert("I don't undestand this...")
      break;
  }
} while (option != 4);