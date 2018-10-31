var Person = function(firstAndLast) {
    //splitting the parameter
    let splitting = firstAndLast.split(" ");
    //the first constructor returning the parameter if asked for full name
    this.getFullName = function() {
            return splitting.join(" ");
        }
        //the second constructor returning the first item in the splitted parameter if asked for the first name
    this.getFirstName = function() {
            return splitting[0];
        }
        //the third constructor returning the second item in the splitted parameter if asked for the second name
    this.getLastName = function() {
            return splitting[1];
        }
        //changing the first name in the splitted parameter with a new parameter
    this.setFirstName = function(first) {
            splitting[0] = first;
            return splitting.join(" ");
        }
        //changing the second name in the splitted parameter with a new parameter
    this.setLastName = function(last) {
            splitting[1] = last;
            return splitting.join(" ");
        }
        //changing both names in the splitted parameter with new parameters
    this.setFullName = function(firstAndLast) {
        let split2 = firstAndLast.split(" ");
        splitting[0] = split2[0];
        splitting[1] = split2[1];
        return splitting.join(" ");
    }
}
var bob = new Person('Bob Ross');
bob.getLastName();