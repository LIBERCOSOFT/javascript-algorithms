function steamrollArray(arr) {
    // I'm a steamroller, baby
    //getting the index of the object {} in the given arr variable
    let index;
    arr.map(function(val) {
        if (typeof(val) == "object" && val.length == undefined) {
            index = arr.indexOf(val);
        }
    });
    //removing any empty array in the given arr variable
    arr.map(function(x) {
        if (x.length < 1) {
            arr.splice(arr.indexOf(x), 1);
        }
    });
    //converting all array into string to eliminate all array and remain the values in them, then its splitted based on the commas between them
    let str = arr.toString();
    let splitting = str.split(",");
    //checking to know if each value in the splitted array is a number or a string, if its a string it will append to the array variable the same way and if its a number, it will change to a number and append it to the array variable
    let array = [];
    splitting.map(function(val2) {
        if (typeof(Number(val2)) == "number" && isNaN(Number(val2)) !== true) {
            array.push(Number(val2));
        }
        if (isNaN(Number(val2)) == true) {
            let indexVal = splitting.indexOf(val2);
            array.push(splitting[indexVal]);
        }
    });
    //if the index of getting if an object is in the arr variable is not empty, append an object {}, to the array based on the index it has in the array variable 
    if (index !== undefined) {
        array.splice(index, 1, {});
    }
    console.log(array);
}
steamrollArray([
    [
        [1]
    ],
    [
        ["b"]
    ]
]);