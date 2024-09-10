const spaceships: { name: string, pilot: string, crewLimit: number, crew: string[], isInMission: boolean }[] = []

function newSpaceship(spaceShip: { name: string, pilot: string, crewLimit: number, crew: string[], isInMission: boolean }) {
  spaceShip.isInMission = false
  return spaceShip
}

function addCrewMember(name: string, target: { crewLimit: number, crew: string[] }) {
  if ((target.crew.length + 1) > target.crewLimit) {
    console.log(`Unable to add ${name} to crew! Max crew size reached.`)
    return
  }

  target.crew.push(name)
  console.log(`Welcome to crew, ${name}!`)
}

function sendToAMission(target: { isInMission: boolean, crew: string[], crewLimit: number }) {
  const minimumCrew = Math.floor(target.crewLimit / 3)
  if (target.crew.length < minimumCrew) {
    console.log(`You need at least ${minimumCrew} to go in a mission! Currently members in the spaceship: ${target.crew.length}`)
    return
  }
}

function showSpaceships(showAll?: boolean, spaceshipNo?: number) {

  if (spaceships.length == 0) {
    alert("Hey! There's not to show now... Try to create a new spaceship!")
    return
  }

  if (showAll) {
    for (let i = 0; i < spaceships.length; i++) {
      const currSpaceship: { name: string, pilot: string, crewLimit: number, crew: string[], isInMission: boolean } = spaceships[i]

      let fSpaceship: string = `
      Spaceship name: ${currSpaceship.name},\n
      Pilot name: ${currSpaceship.pilot},\n
      Crew limit: ${currSpaceship.crewLimit},\n
      Current crew: ${currSpaceship.crew},\n
      Is in mission? ${currSpaceship.isInMission ? 'Yes' : 'No'}\n\n
      `

      alert(`Here is spaceships no.${i + 1}: ${fSpaceship}`)
    }
    return
  }

  const currSpaceship: { name: string, pilot: string, crewLimit: number, crew: string[], isInMission: boolean } = spaceships[spaceshipNo ? spaceshipNo : 0]

  let fSpaceship: string = `
      Spaceship name: ${currSpaceship.name},\n
      Pilot name: ${currSpaceship.pilot},\n
      Crew limit: ${currSpaceship.crewLimit},\n
      Current crew: ${currSpaceship.crew},\n
      Is in mission? ${currSpaceship.isInMission ? 'Yes' : 'No'}\n\n
      `
  alert(`Here is spaceships no.${spaceshipNo}: ${fSpaceship}`)

}

const millenumFalcon = newSpaceship({
  name: 'Millenium Falcon',
  pilot: 'Han Solo',
  crewLimit: 12,
  crew: ['Luke Skywalker', 'Princess Leia'],
  isInMission: false
})

spaceships.push(millenumFalcon)

addCrewMember('Grogu', millenumFalcon)

sendToAMission(millenumFalcon)

const gemini = newSpaceship({
  name: 'Gemini',
  pilot: 'Wally Schirra',
  crewLimit: 8,
  crew: ['Neil Armstrong', 'Frank Borman'],
  isInMission: false
})

spaceships.push(gemini)

addCrewMember('Charles "Pete" Conrad', gemini)

sendToAMission(gemini)

showSpaceships(false, 1)