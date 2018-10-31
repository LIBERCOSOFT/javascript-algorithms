function truthCheck(collection, pre) {
    // Is everyone being true?
    //an array and a for loop to append the values of the object that are to be looped on
    let arr = [];
    for (let i in collection) {
        arr.push(collection[i][pre]);
    }
    //an undefined variable to print either truth or false if the items in the list are in the arr variable or not
    let booVal;
    arr.map(function(val) {
        switch (val) {
            case false:
            case 0:
            case null:
            case undefined:
            case "":
                booVal = false;
                break;
                //if booVal after the switch statement execution is undefined or not equal to false, then it equals to true
                if (booVal != false) {
                    booVal = true;
                }
                //an if statement to check if NaN data type is in the arr, because NaN is a wierdo, it cant be compared easily
                if (Number.isNaN(val) == true) {
                    booVal = false;
                }
        }
        return booVal;
    });
}
truthCheck([{ "single": "double" }, { "single": NaN }], "single");