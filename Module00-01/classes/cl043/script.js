function calculateAverage(a, b) {
  const average = (a + b) / 2;
  return average;
}

const result = calculateAverage(10, 20);

function createProduct(name, price) {
  const product = {
    name,
    price,
    stock: 1
  }
  return product;
}

const laptop = createProduct('Asus Vivobook Incel Core i5 8GB', 2170);

function rectangularArea(base, height) {
  return base * height;
}

function squareArea(side) {
  return rectangularArea(side, side);
}

function hello() {
  let text = "...";
  return text;
}