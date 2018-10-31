function translatePigLatin(str) {
    //splitting the string so as to access it
    let splitting = str.split("");
    //a regular expression to check if it starts with either a,e,i,o,u
    let regex = /^[aeiou]/;
    //testing with the regex to see if it true or false that it starts with a vowel or not
    let testing = regex.test(splitting);
    //if else statement with while loop in the else statement adding the suffixes
    if (testing == true) {
        splitting.push("way");
    } else {
        //the num variable is to cancel infinite loop
        let num = 0;
        while (regex.test(splitting) == false && num < splitting.length) {
            let removing = splitting.splice(0, 1);
            splitting.push(removing);
            num++;
        }
        splitting.push('ay');
    }
    console.log(splitting.join(''));
}
translatePigLatin("algorithm");