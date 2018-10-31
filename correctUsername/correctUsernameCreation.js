let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}/i;
let result = userCheck.test(username);
console.log(result);