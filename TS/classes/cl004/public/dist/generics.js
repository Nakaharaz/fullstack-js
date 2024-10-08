function cloneShip(ship, newName, newPilot) {
    const newShip = ship;
    newShip.name = newName;
    newShip.pilot = newPilot;
    return newShip;
}
const falcon = {
    name: 'Millenium Falcon',
    pilot: 'Han'
};
const xWing = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
};
// A cópia funciona, porém a tipagem está incorreta
// pois a ambas é atribuido o tipo Ship
const copy1 = cloneShip(falcon, 'Milano', 'Peter');
const copy2 = cloneShip(xWing, 'Black One', 'Poe');
const enemyCopy = cloneShip(falcon, 'enemy', 'enemy');
const enemyCopy2 = cloneShip(falcon, 'enemy', 'enemy');
