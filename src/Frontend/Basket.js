import React, { useState } from 'react';
import { CalculatorB, CalculatorA, Sum } from '../Backend/Calculator';
import products from './Items';
import styles from './Styles.module.css';

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
    // Constant to add product names to the basketItems array #thinkinginreact
    const updateBasket = (productName) => {
        setBasketItems((prevItems) => ({
            ...prevItems,
            [productName]: (prevItems[productName] || 0) + 1,
        }));
    };
    
    let BasketTotal = totalB + totalA + totalC + totalD;

    return (
        <div>
            <div className={styles.total}><h2 >Total Price: £{(BasketTotal / 100).toFixed(2)}</h2>
                <div className={styles.ScanProducts}>
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
            </div>

            {/* Calling the Object.entries() function to convert objects to arrays to then pass them to the map() function
 to loop through the entire array created to capture 'product' and 'count' */}

            <h3 className={styles.itemsName}>Basket Items:</h3>
            <div className={styles.productsList}>
                <h3 className={styles.quantity}>Quantity </h3>
                <h3 className={styles.productList}>
                    <ul>
                        {Object.entries(basketItems).map(([product, count]) => (
                            <li key={product}>
                                <h4 >{product}__________________________x{count}</h4>
                            </li>
                        ))}
                    </ul>
                </h3>
            </div>
            <div className={styles.prices}>
                <ul>
                        {totalA},
                        {totalB},
                        {totalC},
                        {totalD}
                </ul>
            </div>
        </div>
    );
}

export default Basket;
