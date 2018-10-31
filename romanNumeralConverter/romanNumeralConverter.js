function convertToRoman(num) {
    //defining the basic numbers and their numerals in the same index but in different array with an empty array to append the needed roman numerals
    let basicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let basicNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let array = [];
    // a for loop looping over the basic numbers checking if each numbers is lesser than the given num variable and if its lesser
    for (let i = 0; i < basicNumbers.length; i++) {
        while (basicNumbers[i] <= num) {
            //if any element is lesser than the num variable, variable i which increases as the loop moves on to another element should be used as an index to access the index of the number in the basicNumerals array and append it to the array variable
            array.push(basicNumerals[i]);
            //then the number should be subtracted  from the num variable
            num -= basicNumbers[i];
        }
    }
    //printing out the roman numerals in the joined array;
    console.log(array.join(""));
}

convertToRoman(2004);