function otherParameter(){
	return function(para2){
		console.log(para2);
	}
}

otherParameter(1)(2);