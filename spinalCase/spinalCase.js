function spinalCase(str) {
    // a regular expression that match/print an array that has a pattern of an uppercase/lowercase starting with some words[A-Z|a-z] following the uppercase/lowercase
    let regex = /[A-Z][a-z]+|[a-z][a-z]+/g;
    let matching = str.match(regex);
    let conversion = matching.join("-").toLowerCase();
    return conversion;
}
spinalCase('This Is Spinal Tap');