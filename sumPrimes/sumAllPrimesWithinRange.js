function sumPrimes(num) {
    //an empty array and the for loop to append range of numbers from 2 to the given num variable
    let numbers = [];
    for (let i = 2; i < num + 1; i++) {
        numbers.push(i);
    }
    //a borrowed function that return true is a number is a prime number and false is its not
    function isPrime(number) {
        for (let i = 2; i <= number; i++) {
            if (number % i === 0 && number != i) {
                // return true if it is divisible by any number that is not itself.
                return false;
            }
        }
        // if it passes the for loops conditions it is a prime
        return true;
    }
    //an empty array and a .map function that loops over the numbers array consisting of the ranges of number from 2 to the given num variable, checking if each of the number of the numbers array if its true or false, and if its true, append to the array variable.
    let array = [];
    let mapping = numbers.map(function(val) {
        if (isPrime(val) == true) {
            array.push(val);
        }
    });
    return array.reduce((a, b) => a + b);
}
sumPrimes(977); //73156