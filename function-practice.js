function inchesToFeet(inches) {
    let feet = inches / 12;
    return feet;
}
const inches = inchesToFeet(36);
console.log(inches);

// Miles to Kilometer

function milesToKilometer(miles) {
    let km = miles * 1.6093;
    return km;
}
var marathon = milesToKilometer(26.5);
console.log(marathon);