function rot13(str) {
    //splitting the str variable, and the alphabet into two
    let splitting = str.split("");
    let firstAlp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
    let secondAlp = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    //new array to push the needed alphabets
    let array = [];
    //.map function to get the index of each value of the str in any of the spliited alphabet array and use the append the element at the same index in the second array and if its not present in any, just append into the array variable
    splitting.map(function(val) {
        if (firstAlp.includes(val)) {
            let index = firstAlp.indexOf(val);
            array.push(secondAlp[index]);
        } else if (secondAlp.includes(val)) {
            let index = secondAlp.indexOf(val);
            array.push(firstAlp[index]);
        } else {
            array.push(val);
        }
    });
    //printing out the joined array
    console.log(array.join(""));
}

// Change the inputs below to test
rot13("SERR CVMMN!");