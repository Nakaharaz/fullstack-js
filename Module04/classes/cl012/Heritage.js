class RealState {
  constructor(area, price) {
    this.area = area
    this.price = price;
  }

  getPricePerSquareMeter(){
    return this.price / this.area;
  }
}

class House extends RealState {

}

class Apartment extends RealState {
  constructor(number, area, price) {
    // Call the Superclass constructor
    super(area, price)

    this.number = number
  }

  getFloor() {
    return this.number.slice(0, -2)
  }
}

const land = new RealState(200, 50000);
const someHouse = new House(250, 250000);
const someApartment = new Apartment('201', 100, 500000);

console.log(someApartment)