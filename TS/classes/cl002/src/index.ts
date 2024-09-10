function sendSpaceship(name: string, capitain: string) {
  const spaceship = {
    name,
    capitain,
    speed: 20,
    inMission: true,
    crew: []
  }

  alert(`The spaceship ${spaceship.name} commanded by the capitain ${spaceship.capitain} was sent on a mission!`)

  return spaceship
}

function accelerate(targeSpeed: number, spaceship: { name: string, speed: number }) {
  if (spaceship.speed > targeSpeed) {
    alert('Reducing the speed!')
  } else if (spaceship.speed < targeSpeed) {
    alert('Incrementing the speed!')
  } else {
    alert(`Keeping the speed in ${targeSpeed}`)
  }
}

const spaceshipName = prompt('Enter the spaceship name that must be send: ')
const spaceshipCaptain = prompt('Now enter the name of the capitain')

const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain)

const speed = Number(prompt(`Enter the speed that you want to get!`))

accelerate(speed, currentShip)

