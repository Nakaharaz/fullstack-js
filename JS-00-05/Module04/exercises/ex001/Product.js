class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(quantity) {
    this.inStock += quantity;
  }
  calculateDiscount(percentage) {
    console.log(`Discount applicated! Current price is: ${this.price - (this.price * (percentage / 100))}`);
  }
}

const apple = new Product('Apple', "It's a really beautiful Apple", 100);

console.log(apple);

apple.addToStock(10);

console.log(apple);

apple.calculateDiscount(10);