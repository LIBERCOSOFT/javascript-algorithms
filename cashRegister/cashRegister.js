function checkCashRegister(price, cash, cid) {
    //getting the change and reversing the cash in drawer array
    let change = cash - price;
    cid.reverse();
    //getting all the cash in drawer only
    let array = [];
    cid.map(function(val) {
        array.push(val[1]);
    });
    //summing all the cash in drawer
    let cidSumming = array.reduce(function(a, b) {
        return a + b;
    });

    //when the cash in drawer is more than change, then for each cash, keep summing that particular
    //cash so untill the particular cash is zero or the change becomes lesser than the particular cash
    if (cidSumming > change) {
        let openArr = { 'status': 'OPEN', 'change': [] }
        cid.map(function(val) {

            if (val[0] == 'ONE HUNDRED' && 100 <= change) {
                let num = 0;
                while (change >= 100 && val[1] !== 0) {
                    num += 100;
                    change -= 100;
                    val[1] -= 100;
                }
                openArr.change.push(['ONE HUNDRED', num]);
            }

            if (val[0] == 'TWENTY' && 20 <= change) {
                let num = 0;
                while (change >= 20 && val[1] !== 0) {
                    num += 20;
                    change -= 20;
                    val[1] -= 20;
                }
                openArr.change.push(['TWENTY', num]);
            }

            if (val[0] == 'TEN' && 10 <= change) {
                let num = 0;
                while (change >= 10 && val[1] !== 0) {
                    num += 10;
                    change -= 10;
                    val[1] -= 10;
                }
                openArr.change.push(['TEN', num]);
            }

            if (val[0] == 'FIVE' && 5 <= change) {
                let num = 0;
                while (change >= 5 && val[1] !== 0) {
                    num += 5;
                    change -= 5;
                    val[1] -= 5;
                }
                openArr.change.push(['FIVE', num]);
            }

            if (val[0] == 'ONE' && 1 <= change) {
                let num = 0;
                while (change >= 1 && val[1] !== 0) {
                    num += 1;
                    change -= 1;
                    val[1] -= 1;
                }
                openArr.change.push(['ONE', num]);
            }

            if (val[0] == 'QUARTER' && 0.25 <= change) {
                let num = 0;
                while (change >= 0.25 && val[1] !== 0) {
                    num += 0.25;
                    change -= 0.25;
                    val[1] -= 0.25;
                }
                openArr.change.push(['QUARTER', num]);
            }

            if (val[0] == 'DIME' && 0.1 <= change) {
                let num = 0;
                while (change >= 0.1 && val[1] !== 0) {
                    num += 0.1;
                    change -= 0.1;
                    val[1] -= 0.1;
                }
                openArr.change.push(['DIME', num]);
            }

            if (val[0] == 'NICKEL' && 0.05 <= change) {
                let num = 0;
                while (change >= 0.05 && val[1] !== 0) {
                    num += 0.05;
                    change -= 0.05;
                    val[1] -= 0.05;
                }
                openArr.change.push(['NICKEL', num]);
            }

            if (val[0] == 'PENNY' && 0.01 <= change) {
                let num = 0;
                while (change >= 0.01 && val[1] !== 0) {
                    num += 0.01;
                    change -= 0.01;
                    val[1] -= 0.01;
                }
                //if the change remaining is lesser than the lowest denomination, 
                //add the remaining change to give all change out in penny
                //and equalize change to zero
                if (change < 0.01) {
                    num += change;
                    change = 0;
                }
                //rounding num in 2 decimal place with Math.round
                openArr.change.push(['PENNY', Math.round(num * 100) / 100]);
            }

        });
        //after all if statement is executed, and the change is still not zero,
        //return insufficient funds else return the outcome of the if statements
        if (change !== 0) {
            return { status: 'INSUFFICIENT_FUNDS', change: [] };
        } else {
            return openArr;
        }
    }
    //if the cash in drawer is equals to change return reversed cid(default cid) array
    if (cidSumming == change) {
        return { status: 'CLOSED', change: cid.reverse() };
    }
    //if cash in drawer is lesser than the change, return insufficient funds
    if (cidSumming < change) {
        return { status: 'INSUFFICIENT_FUNDS', change: [] };
    }

}


checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);