function destroyer(arr) {
    //creating an arr for all the looped arguments
    let raw = [];
    //creating an array for my arr in the arguments
    let wholeArray;
    //creating an array for the number to be removed from the arr in args
    let numberSeeker = [];
    //looping over all args and pushing into raw array
    for (var i = 0; i < arguments.length; i++) {
        raw.push(arguments[i]);
    }
    //looping over the raw array to seperate the list(object) from the string number
    let mapping = raw.map(function(val) {
        if (typeof val == "object") {
            wholeArray = val;
        } else {
            numberSeeker.push(val);
        }
    });
    //creating an array for the filtered array
    let finalArr = [];
    //algorithm that filters the array(object) in the args with the numbers to be removed
    let mapper = wholeArray.map(function(value) {
        if (numberSeeker.includes(value) == false) {
            finalArr.push(value);
        }
    });
    console.log(finalArr);
}
destroyer(["tree", "hamburger", 53], "tree", 53);