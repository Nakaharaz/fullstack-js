type Planet = 'Earth' | 'Mars' | 'Jupter' | 'Netune' | 'Saturn'

let planet: Planet

function checkPlanet(planet: Planet) {
  if (planet === "Mars") {
    console.log("You're in Mars!")
  }
}

checkPlanet(planet = "Mars")

type greetingCallback = (name: string) => boolean

function greet(callBackfn: greetingCallback) {
  let myName: string = 'enzo'

  return callBackfn(myName)
}

var enzo: boolean = greet(confirm)

console.log(enzo)