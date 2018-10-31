var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));


function updateRecords(id, prop, value) {
    if (value == "") {
        delete collection[id][prop];
    }
    if (prop == "album" && value != "") {
        collection[id]["album"] = value;
    }
    if (prop == "artist" && value != "") {
        collection[id]["artist"] = value;
    }
    if (prop == "tracks" && value !== "") {
        if (prop in collection[id] == true) {
            collection[id]["tracks"].push(value);
        } else {
            collection[id]["tracks"] = [value];
        }
    }
    console.log(collection);
}

// Alter values below to test your code
updateRecords(1245, "album", "ABBA");