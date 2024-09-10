"use strict";
let planet;
function checkPlanet(planet) {
    if (planet === "Mars") {
        console.log("You're in Mars!");
    }
}
checkPlanet(planet = "Mars");
function greet(callBackfn) {
    let myName = 'enzo';
    return callBackfn(myName);
}
var enzo = greet(confirm);
console.log(enzo);
