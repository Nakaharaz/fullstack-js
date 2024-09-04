class Vehicle {
  move() {
    console.log('The vehicle is moving now...')
  }
}

class Car extends Vehicle {
  move() {
    console.log('The car is moving now...')
  }
}

class Skate extends Vehicle {
  move() {
    console.log('Pedro Barros is doing some tricks and moving with skateboard!')
  }
}

class Aircraft extends Vehicle {
  move(speed) {
    console.log(`The aircraft is flying at ${speed} km/h`)
  }
}

const delorean = new Car()
const skt = new Skate()
const epoch = new Aircraft()

// delorean.move()
// skt.move()
// epoch.move(100)

function start(vehicle) {
  console.log(`Initializing an vehicle...`)
  vehicle.move();
}

start(delorean)
start(skt)
start(epoch)