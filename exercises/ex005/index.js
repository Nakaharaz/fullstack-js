const inputMeters = document.getElementById('meters');
const inputUnitMeansurement = document.getElementById('unitMeansurement');
const resultSection = document.getElementById('result');

function convert(event) {
  event.preventDefault();

  let meters = inputMeters.value;
  let unitMeansurement = inputUnitMeansurement.value;
  let convertedValue;

  switch (unitMeansurement) {
    case 'mm':
      convertedValue = meters * 1000;
      break;
    case 'cm':
      convertedValue = meters * 100;
      break;
    case 'dm':
      convertedValue = meters * 10;
      break;
    case 'dam':
      convertedValue = meters / 10;
      break;
    case 'hm':
      convertedValue = meters / 100;
      break;
    case 'km':
      convertedValue = meters / 1000;
      break;
    default:
      convertedValue = meters;
      break;
  }

  resultSection.innerHTML = `
  <h1>Result:</h1>
  <p>Your ${meters}m was converted to ${convertedValue}${unitMeansurement}</p>
  `
}