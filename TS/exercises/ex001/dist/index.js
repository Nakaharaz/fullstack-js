"use strict";
var spaceships = [];
function newSpaceship(spaceShip) {
    spaceShip.isInMission = false;
    return spaceShip;
}
function addCrewMember(name, target) {
    if ((target.crew.length + 1) > target.crewLimit) {
        console.log("Unable to add ".concat(name, " to crew! Max crew size reached."));
        return;
    }
    target.crew.push(name);
    console.log("Welcome to crew, ".concat(name, "!"));
}
function sendToAMission(target) {
    var minimumCrew = Math.floor(target.crewLimit / 3);
    if (target.crew.length < minimumCrew) {
        console.log("You need at least ".concat(minimumCrew, " to go in a mission! Currently members in the spaceship: ").concat(target.crew.length));
        return;
    }
}
function showSpaceships(showAll, spaceshipNo) {
    if (spaceships.length == 0) {
        alert("Hey! There's not to show now... Try to create a new spaceship!");
        return;
    }
    if (showAll) {
        for (var i = 0; i < spaceships.length; i++) {
            var currSpaceship_1 = spaceships[i];
            var fSpaceship_1 = "\n      Spaceship name: ".concat(currSpaceship_1.name, ",\n\n      Pilot name: ").concat(currSpaceship_1.pilot, ",\n\n      Crew limit: ").concat(currSpaceship_1.crewLimit, ",\n\n      Current crew: ").concat(currSpaceship_1.crew, ",\n\n      Is in mission? ").concat(currSpaceship_1.isInMission ? 'Yes' : 'No', "\n\n\n      ");
            alert("Here is spaceships no.".concat(i + 1, ": ").concat(fSpaceship_1));
        }
        return;
    }
    var currSpaceship = spaceships[spaceshipNo ? spaceshipNo : 0];
    var fSpaceship = "\n      Spaceship name: ".concat(currSpaceship.name, ",\n\n      Pilot name: ").concat(currSpaceship.pilot, ",\n\n      Crew limit: ").concat(currSpaceship.crewLimit, ",\n\n      Current crew: ").concat(currSpaceship.crew, ",\n\n      Is in mission? ").concat(currSpaceship.isInMission ? 'Yes' : 'No', "\n\n\n      ");
    alert("Here is spaceships no.".concat(spaceshipNo, ": ").concat(fSpaceship));
}
var millenumFalcon = newSpaceship({
    name: 'Millenium Falcon',
    pilot: 'Han Solo',
    crewLimit: 12,
    crew: ['Luke Skywalker', 'Princess Leia'],
    isInMission: false
});
spaceships.push(millenumFalcon);
addCrewMember('Grogu', millenumFalcon);
sendToAMission(millenumFalcon);
var gemini = newSpaceship({
    name: 'Gemini',
    pilot: 'Wally Schirra',
    crewLimit: 8,
    crew: ['Neil Armstrong', 'Frank Borman'],
    isInMission: false
});
spaceships.push(gemini);
addCrewMember('Charles "Pete" Conrad', gemini);
sendToAMission(gemini);
showSpaceships(false, 1);
