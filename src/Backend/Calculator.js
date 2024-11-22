import products from '../Frontend/Items';

// SpecialPrice and Single price functions and logic are in this file.

function SpecialPriceB(itemCount) {

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

function SpecialPriceA(itemCount) {

    const THREE_PRICE = products.SpecialA;
    const SINGLE_PRICE = products.ProductA;
    let TOTAL_PRICE = 0;
    if (itemCount === 1) {
        return SINGLE_PRICE;
    }
    else if (itemCount === 2) { 
        return SINGLE_PRICE * 2;
    }
    else if (itemCount > 2) {
        const three = Math.floor(itemCount / 3);
        const remainder = itemCount % 3;
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
export { SpecialPriceB, SpecialPriceA, Sum };