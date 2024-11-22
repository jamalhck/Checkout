import React, { useState } from 'react';
import { CalculatorB, CalculatorA, Sum } from './Calculator';
import products from '../Frontend/Items';
import Front from '../Frontend/Front';


// Shopping basket component that tracks item count and total price when products are clicked.

function Basket() {

    const [itemCountB, setItemCountB] = useState(0);
    const [totalB, setTotalB] = useState(0);
    const [itemCountA, setItemCountA] = useState(0);
    const [totalA, setTotalA] = useState(0);
    const [itemCountC, setItemCountC] = useState(0);
    const [totalC, setTotalC] = useState(0);
    const [itemCountD, setItemCountD] = useState(0);
    const [totalD, setTotalD] = useState(0);
    const [basketItems, setBasketItems] = useState({});

    const handleAddItemB = () => {
        const nCount = itemCountB + 1; // Increment the item count for Product B
        setItemCountB(nCount); // Update the item count state
        setTotalB(CalculatorB(nCount)); // Calculate and update the total for Product B
        updateBasket('Product B')
    };
    
    const handleAddItemA = () => {
        const nCount = itemCountA + 1;
        setItemCountA(nCount);
        setTotalA(CalculatorA(nCount));
        // Put 'Product A' in an useState object array, and the individual price as well.
        // Retrieve the 'Product A' and put it in placeholderA
        updateBasket('Product A');
    };
    
    const handleAddItemC = () => {
        const nCount = itemCountC + 1;
        setItemCountC(nCount);
        setTotalC(Sum(nCount, products.ProductC));
        updateBasket('Product C')
    };
    
    const handleAddItemD = () => {
        const nCount = itemCountD + 1;
        setItemCountD(nCount);
        setTotalD(Sum(nCount, products.ProductD));
        updateBasket('Product D')
    };

    const updateBasket = (productName) => {
        setBasketItems((prevItems) => ({
            ...prevItems,
            [productName]: (prevItems[productName] || 0) + 1,
        }));
    };
    
    let basketTotal = totalB + totalA + totalC + totalD;

    return (
        <Front
            basketTotal={basketTotal}
            products={products}
            basketItems={basketItems}
            totalA={totalA}
            totalB={totalB}
            totalC={totalC}
            totalD={totalD}
            handleAddItemA={handleAddItemA}
            handleAddItemB={handleAddItemB}
            handleAddItemC={handleAddItemC}
            handleAddItemD={handleAddItemD}
        />
    );

}
export default Basket;
