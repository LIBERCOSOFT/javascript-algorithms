function largestOfFour(arr) {
  var newlist = [];
  for (var i = 0; i < arr.length; i++){
    var summing = arr[i].reduce(function(a, b){
      return a + b;
    });
    newlist.push(summing);
  }
  var largest = Math.max.apply(null, newlist);
  var index = newlist.indexOf(largest);
  var char = arr[index];
  console.log(index);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
