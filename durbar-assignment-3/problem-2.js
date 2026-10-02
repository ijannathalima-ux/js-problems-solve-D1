function convertTemperature(value, unit) {
    if (unit === "C") {
        return Math.round(((value * 9 / 5) + 32) * 100) / 100;
    }
    else {
        return Math.round(((value - 32) * 5 / 9) * 100) / 100
    }
}
console.log(convertTemperature(0, 'C'))
console.log(convertTemperature(32, 'F'))