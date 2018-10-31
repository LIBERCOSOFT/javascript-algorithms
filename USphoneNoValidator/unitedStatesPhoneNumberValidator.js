function telephoneCheck(str) {
    //if str variable starts with 1
    let regex = /^[1]/g;
    let testing = regex.test(str);
    if (testing == true && str.length == 14 || testing == true && str.length == 16) {
        if (str.includes('(') && str.includes(')') || str.includes('(') == false && str.includes(')') == false) {
            return true;
        }

    }
    //if str variable starts with 5
    if (str.startsWith('5')) {
        if (str.length == 13 || str.length == 12 || str.length == 10) {
            if (str.includes('(') && str.includes(')') || str.includes('(') == false && str.includes(')') == false) {
                return true;
            }
        }
    }
    //if str variable starts with (
    if (str.startsWith('(')) {
        let array = [];
        let splitting = str.split("");
        splitting.map(function(val) {
            if (val == 5) {
                array.push(val);
            }
        });

        if (splitting.length == 13 && array.length == 10 && splitting.includes('(') && splitting.includes(')')) {
            return true;
        }
    }

    return false;
}

telephoneCheck("(555)555-5555");

//REGEX FOR THE ABOVE UNITED STATES PHONE VALIDATOR CODE
//function telephoneCheck(str) {
//var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
//return regex.test(str);
//}