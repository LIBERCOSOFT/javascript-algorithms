function whatIsInAName(collection, source) {
  // What's in a name?
  // Only change code below this line
  let sourceKeys = Object.keys(source);
  console.log(collection.filter(function(val){
    for (let i = 0; i < sourceKeys.length; i++){
      if (val.hasOwnProperty(sourceKeys[i]) == false || val[sourceKeys[i]] !== source[sourceKeys[i]]){
        return false;
      }
    }
    return true
  }));
  // Only change code above this line
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Montague" });