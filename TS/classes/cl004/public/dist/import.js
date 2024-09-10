import * as _ from 'lodash';
let xwing = {
    name: 'X-wing',
    pilot: 'Luke Skywalker',
    speed: 100,
    weapons: 1
};
console.log(_.camelCase(xwing.pilot));
