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

function Calculator(itemCount) {

    const PAIR_PRICE = 45;
    const SINGLE_PRICE = 30;
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

export default Calculator;