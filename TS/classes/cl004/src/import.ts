import { Spaceship } from "./export";
import * as _ from 'lodash'

interface BattleSpaceship extends Spaceship {
  weapons: number
}

let xwing: BattleSpaceship = {
  name: 'X-wing',
  pilot: 'Luke Skywalker',
  speed: 100,
  weapons: 1
}

console.log(_.camelCase(xwing.pilot))

