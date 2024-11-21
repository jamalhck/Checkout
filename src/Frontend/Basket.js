import React, { useState } from 'react';
import { CalculatorB, CalculatorA } from '../Backend/Calculator';


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


    return (
        <div>
            <h2>Basket Count: {totalB + totalA} </h2>
            <h3>Click to scan a product below:</h3>
            <button onClick={handleAddItemA}>
                Product A
            </button>
            <button onClick={handleAddItemB}>
                Product B
            </button>
            <button onClick={() => setItemCountB(totalB + 1)}>
                Product C
            </button>
            <button onClick={() => setItemCountB(totalB + 1)}>
                Product D
            </button>
        </div>
    );
}

export default Basket;
