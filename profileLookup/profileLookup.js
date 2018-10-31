var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(firstName, prop) {

    var answer = "No such contact";
    contacts.some(function(bbm) {
        if (bbm.firstName === firstName && bbm.hasOwnProperty(prop) === true) {
            answer = bbm[prop];
        } else if (bbm.hasOwnProperty(prop) === false) {
            answer = "No such property";
        }
    });
    return answer;

}

// Change these values to test your function
lookUpProfile("Akira", "likes");