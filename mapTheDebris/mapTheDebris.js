function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    //.map function to loop through each object in the arr variable
    arr.map(function(val) {
        //assigning variable a the cube of average altitude plus the earth's radius 
        let a = Math.pow(earthRadius + val["avgAlt"], 3);
        //changing the value of average altitude to the calculated orbital period
        val["avgAlt"] = Math.round(2 * Math.PI * (Math.sqrt(a / GM)));
        //changing the avgAlt key name to orbitalPeriod key name
        val.orbitalPeriod = val.avgAlt;
        //deleting the previous replicated avgAlt key to avoid replication
        delete val.avgAlt;
    });
    //returning the newly modified arr
    console.log(arr);
}

orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]);