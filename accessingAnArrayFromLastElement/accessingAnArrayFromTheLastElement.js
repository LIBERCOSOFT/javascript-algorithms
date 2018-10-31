function sep(num) {
    let number = num.toString().split("");
    let multiplier = 1;

    for (var i = number.length - 1; i >= 0; i--) {
        number[i] *= multiplier;
        multiplier *= 10;
    }
    console.log(number);
}

sep(2014);