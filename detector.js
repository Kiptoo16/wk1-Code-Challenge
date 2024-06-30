function tellSpeed() {
    prompt = require ('prompt-sync')();
    let speed = prompt('input speed:');
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerKmAboveLimit = 1;

    if (speed <= speedLimit) {
        console.log("Ok");
return;
    }
    
    let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    console.log(`Points: ${demeritPoints}`);

    if (demeritPoints > 12) {
        console.log("License suspended");
    }
}

tellSpeed();
