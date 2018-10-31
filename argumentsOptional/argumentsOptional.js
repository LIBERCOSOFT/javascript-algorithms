function addTogether() {
    //creating an empty array and a for loop to append all arguments of the function
    let array = [];
    for (let i in arguments) {
        array.push(arguments[i]);
    }
    //() == A parameter
    //if the first parameter value length is 1, i.e if it only read the first parameter has a valid parameter with only one value, it should assign the next parameter to a function which is function(b) and print out the summation of the first and second parameters of different function which was nested in each other
    if (array.length == 1) {
        let a = array[0];
        if (typeof(a) !== "number") {
            return undefined;
        } else {
            return function(b) {
                if (typeof(b) !== "number") {
                    return undefined;
                } else {
                    return a + b;
                }
            }
        }
    }
    //if the first parameter length is 2, it should ignore any other ones and check if both values of the first parameter are numbers and sum it together and if any are not, it should print out undefined
    if (array.length == 2) {
        let booArr = [];
        array.map(function(val) {
            booArr.push(typeof(val) == "number");
        });
        if (booArr.includes(false)) {
            return undefined;
        } else {
            return array.reduce(function(a, b) { return a + b });
        }
    }
}
addTogether(2, (5));