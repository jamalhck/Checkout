import products from '../Frontend/Items';
/*
Pseudo code from which the below function was written:

click on button B, the count is added to an array
    a loop a running in the array, when it detects more than 2 items, it does a division to 2, and saves the result (special price count = 2)
    The count is then multiplied by 45 -> 2 * 45 = 90 (specialPrice)
    then it checks for the remainder of that division, if it's bigger than 0, multiplied by 30 (UnitPrice)
    else if only 1 item is scanned
        add item price (SingleUnit)
    SpecialPrice + UnitPrice + SingleUnit = Total

*/

function CalculatorB(itemCount) {

    const PAIR_PRICE = products.SpecialB;
    const SINGLE_PRICE = products.ProductB;
    let TOTAL_PRICE = 0;

    if (itemCount === 1) {
        return SINGLE_PRICE;
    }
    else if (itemCount > 1) {
        // Calculate number of pairs and remainder
        const pairs = Math.floor(itemCount / 2);
        const remainder = itemCount % 2;

        // Calculate total price
        const pairPrice = pairs * PAIR_PRICE;
        const remainderPrice = remainder * SINGLE_PRICE;

        TOTAL_PRICE = pairPrice + remainderPrice;
    }
    return TOTAL_PRICE;
}

function CalculatorA(itemCount) {

    const THREE_PRICE = products.SpecialA;
    const SINGLE_PRICE = products.ProductA;
    let TOTAL_PRICE = 0;

    if (itemCount === 1) {
        return SINGLE_PRICE;
    }
    else if (itemCount === 2) { //added because 2 items are still less than 3, therefore it doesn't sum 50 + 50.
        return SINGLE_PRICE * 2;
    }
    else if (itemCount > 2) {
        // Calculate number of pairs and remainder
        const three = Math.floor(itemCount / 3);
        const remainder = itemCount % 3;

        // Calculate total price
        const threePrice = three * THREE_PRICE;
        const remainderPrice = remainder * SINGLE_PRICE;

        TOTAL_PRICE = threePrice + remainderPrice;
    }
    return TOTAL_PRICE;
}

// Sum function to cater for all Standard price products.

function Sum(itemCount, unitPrice) {

    const SINGLE_PRICE = unitPrice;
    if (itemCount === 1){
        return SINGLE_PRICE;
    }
    else{
        return SINGLE_PRICE * itemCount;
    }
}

// future: specialprice(), add a menu in the checkout system that allows for the special prices to be added, and modified for the different items.

export { CalculatorB, CalculatorA, Sum };