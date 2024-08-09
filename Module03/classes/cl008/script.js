const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(...towns);

const townsCopy = towns;

townsCopy.pop();
townsCopy.pop();
townsCopy.push('Juno');

console.log({ towns, townsCopy });

const townsClone = [...towns];

townsClone.pop();
townsClone.pop();
townsClone.push('Hiroshima');
townsClone.push('Nagasaki');
townsClone.push('Osaka');

console.log({ towns, townsCopy, townsClone });

const townsObject = { ...towns };
const townsObjectClone = { ...townsObject };

townsObjectClone.name = `Enzo`;

console.log({ townsObject, townsObjectClone })