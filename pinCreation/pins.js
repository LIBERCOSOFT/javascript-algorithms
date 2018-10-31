var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var rawPins = [];
var seperatedPins = [];


while (rawPins.length < 14 * 3) {
    var rand = numbers[Math.floor(Math.random() * numbers.length)];
    rawPins.push(rand);
}

while (seperatedPins.length < 3) {
    var slicing = rawPins.splice(0, 14);
    seperatedPins.push({
        "Amount": 1000,
        "code": slicing,
        "Status": "Active"
    });
}
console.log(seperatedPins);