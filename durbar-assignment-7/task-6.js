//Elevator Floor Tracker

function trackElevator(startFloor, minFloor, maxFloor, commands) {
    let floor = startFloor;

    for (const command of commands) {
        if (command === "UP") {
            floor = Math.min(floor + 1, maxFloor);
        } else if (command === "DOWN") {
            floor = Math.max(floor - 1, minFloor);
        }
    }

    return floor;
}

console.log(trackElevator(9, 0, 10, ["UP", "UP", "UP", "DOWN"]))