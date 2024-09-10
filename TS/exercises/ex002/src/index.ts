type PlanetSituation = 'Inhabited' | 'Habitable' | 'Uninhabitable' | 'Unexplorable'

type PlanetCoordinates = [number, number, number, number]

type Planet = {
  name: string,
  coordinates: PlanetCoordinates,
  situation: PlanetSituation
  satellites: string[]
}

const allPlanets: Planet[] = []

function newPlanet(name: string, coordinates: PlanetCoordinates, situation: PlanetSituation) {

  allPlanets.push({
    name,
    coordinates,
    situation,
    satellites: []
  })

  alert(`Planet ${name} created!`)
  return newPlanet
}

function findPlanet(name: string) {
  return allPlanets.find(planet => planet.name == name) ?? false
}

function putSituation(newSituation: PlanetSituation, target: Planet) {
  target.situation = newSituation
  alert(`Now the ${target.name} situation is: "${newSituation}"`)
}

function addSatellite(name: string = '', target: Planet) {
  target.satellites.push(name)
  alert(`
  Satellite ${name} added to planet ${target.name}\n
  the current list is: ${target.satellites}
  `)
}

function removeSatellite(name: string, target: Planet) {
  const itemToRemove = target.satellites.indexOf(name)

  const deletedSatellite = target.satellites.splice(itemToRemove, 1)

  alert(`${deletedSatellite} was removed!`)
}

function promptValidSituation() {
  let situation: PlanetSituation = 'Habitable'
  let validSituation = false

  while (!validSituation) {
    const situationInput = prompt(`
      Which situation is the planet in?
      1. Inhabited
      2. Habitable
      3. Uninhabitable
      4. Unexplorable`)

    switch (situationInput) {
      case '1':
        situation = "Inhabited"
        validSituation = true
        break;
      case '2':
        situation = "Habitable"
        validSituation = true
        break;
      case '3':
        situation = "Uninhabitable"
        validSituation = true
        break;
      case '4':
        situation = "Unexplorable"
        validSituation = true
        break;
      default:
        alert(`Ops! Invalid situation...`)
        break;
    }
  }

  return situation
}

function promptValidPlanet(callback: (planet: Planet) => void) {
  const planetName = prompt(`Enter the planet name: `) ?? ''
  const planet = findPlanet(planetName)

  if (planet) {
    callback(planet)
  } else {
    alert(`Planet not found!`)
  }
}

function firstMenuOption() {
  const name = prompt('Enter the planet name:') ?? ''

  if (findPlanet(name)) {
    alert('Already exists a planet with this name! Please try again')
    return
  }

  const coordinates: PlanetCoordinates = [0, 0, 0, 0]

  for (let i = 0; i < 4; i++) {
    let currentCoordinate = Number(prompt(`Enter the coordinate ${i + 1} of the planet: `))
    coordinates[i] = currentCoordinate
  }

  const situation = promptValidSituation()

  const confirmation = confirm(`
  Confirm the register of planet ${name}?
  Coordinates: (${coordinates})
  Situation: ${situation}
  `)

  if (confirmation) {
    newPlanet(name, coordinates, situation)
  }
}

function secondMenuOption() {
  promptValidPlanet(planet => {
    const situation = promptValidSituation()
    putSituation(situation, planet)
  })
}

function thirdMenuOption() {
  promptValidPlanet(planet => {
    const satellite = prompt('Enter the satellite that will be add: ') ?? ''
    addSatellite(satellite, planet)
  })
}

function fourthMenuOption() {
  promptValidPlanet(planet => {
    const satellite = prompt('Enter the satellite that will be removed: ') ?? ''
    addSatellite(satellite, planet)
  })
}

function fifthMenuOption() {
  let list = 'Planets: \n'

  allPlanets.forEach(planet => {
    const [a, b, c, d] = planet.coordinates 
    
    list+= `
    Name: ${planet.name}
    Coordinates: (${a}, ${b}, ${c}, ${d})
    Situation: ${planet.situation}
    Satellites: ${planet.satellites.length}
    `

    planet.satellites.forEach(satellite => {
      list += `   - ${satellite}\n`
    })
  })

  alert(list)
}

// Menu

let userOption = 0

while (userOption !== 6) {
  const menu = `Menu
    1 - Register a new planet
    2 - Update a planet situation
    3 - Add a satellite to a planet
    4 - Remove a satellite from a planet
    5 - List all planets
    6 - Exit
  `

  userOption = Number.parseInt(prompt(menu) ?? '')

  switch (userOption) {
    case 1:
      firstMenuOption()
      break
    case 2:
      secondMenuOption()
      break
    case 3:
      thirdMenuOption()
      break
    case 4:
      fourthMenuOption()
      break
    case 5:
      fifthMenuOption()
      break
    case 6:
      alert('Closing the system...')
      break
    default:
      alert('Invalid option! Returning to dashboard...')
      break;
  }
}