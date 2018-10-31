function binaryAgent(str) {
    //splitting teh string to convert each of the spaced binary numbers
    let splitting = str.split(" ");
    //an empty array to append the each converted spaced binary number
    let array = [];
    //looping with .map function in the splitted array and appending each converted binary number which was converted with an already made function into the array variable
    splitting.map(function(val) {
        array.push(String.fromCharCode(parseInt(val, 2)));
    });
    //returning the converted array join with nothing
    console.log(array.join(""));
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");