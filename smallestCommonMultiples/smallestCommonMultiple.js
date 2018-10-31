function smallestCommons(arr) {
	//getting the largest and the smallest number from the two given numbers
	let first = Math.max(...arr);
	let sec = Math.min(...arr);
	//storing the maximum of the two array in another variable
	let max = Math.max(...arr);
	//an empty list and a for loop to append the range of the given arr variables
	let numbers = [];
	for (let i = sec; i <= first; i++){
		numbers.push(i);
	}
	//an undefined variable to assign the expected number
	let num;
	while(num == undefined){
		//a list to append all boolean value of each numbers
		let booArr = [];
		//a for each function testing each number in the range of the given arr variable if the present first variable is divisible by all the ranges and append to the booArr true/false for each numbers in the range
		numbers.forEach(function(val){
			if (first % val == 0){
				booArr.push(true);
			}else{
				booArr.push(false);
			}
		});
		//if the booArr list contains false, the add the maximum number with the first variable and redo the while loop until booArr does not contain false
		if (booArr.includes(false) == true){
			first = first + max;
		}else{
			//else it should assign num the value that the range of the arr variable are divisible by
			num = first;
		}
	}
	//return the number that is divisible by the range of the given two numbers
	return num;
}


smallestCommons([23,18]);