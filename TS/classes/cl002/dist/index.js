function sendSpaceship(name, capitain) {
    var spaceship = {
        name: name,
        capitain: capitain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("The spaceship ".concat(spaceship.name, " commanded by the capitain ").concat(spaceship.capitain, " was sent on a mission!"));
    return spaceship;
}
function accelerate(targeSpeed, spaceship) {
    if (spaceship.speed > targeSpeed) {
        alert('Reducing the speed!');
    }
    else if (spaceship.speed < targeSpeed) {
        alert('Incrementing the speed!');
    }
    else {
        alert("Keeping the speed in ".concat(targeSpeed));
    }
}
var spaceshipName = prompt('Enter the spaceship name that must be send: ');
var spaceshipCaptain = prompt('Now enter the name of the capitain');
var currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);
var speed = Number(prompt("Enter the speed that you want to get!"));
accelerate(speed, currentShip);
