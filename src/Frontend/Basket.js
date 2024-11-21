import React, { useState } from 'react';
import { CalculatorB, CalculatorA, Sum,SumD } from '../Backend/Calculator';
import products from './Items';

// Shopping basket component that tracks item count and total price when products are clicked.

function Basket() {

    const [itemCountB, setItemCountB] = useState(0);
    const [totalB, setTotalB] = useState(0);
    const handleAddItemB = () => {
        const nCount = itemCountB + 1; // Increment the item count for Product B
        setItemCountB(nCount); // Update the item count state
        setTotalB(CalculatorB(nCount)); // Calculate and update the total for Product B
    };
    const [itemCountA, setItemCountA] = useState(0);
    const [totalA, setTotalA] = useState(0);
    const handleAddItemA = () => {
        const nCount = itemCountA + 1;
        setItemCountA(nCount);
        setTotalA(CalculatorA(nCount));
    };
    const [itemCountC, setItemCountC] = useState(0);
    const [totalC, setTotalC] = useState(0);
    const handleAddItemC = () => {
        const nCount = itemCountC + 1;
        setItemCountC(nCount);
        setTotalC(Sum(nCount));
    };
    const [itemCountD, setItemCountD] = useState(0);
    const [totalD, setTotalD] = useState(0);
    const handleAddItemD = () => {
        const nCount = itemCountD + 1;
        setItemCountD(nCount);
        setTotalD(SumD(nCount));
    };
    
    let BasketTotal = totalB + totalA + totalC + totalD;

    return (
        <div>
            <h2>Basket Count: {BasketTotal} </h2>
            <h3>Click to scan a product below:</h3>
            <button onClick={handleAddItemA}>
                Product A ({products.ProductA} pence)
            </button>
            <button onClick={handleAddItemB}>
                Product B ({products.ProductB} pence)
            </button>
            <button onClick={handleAddItemC}>
                Product C ({products.ProductC} pence)
            </button>
            <button onClick={handleAddItemD}>
                Product D ({products.ProductD} pence)
            </button>
        </div>
    );
}

export default Basket;
