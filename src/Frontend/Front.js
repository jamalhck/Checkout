import React from 'react';
import styles from './Styles.module.css';

// Front end code and styling is applied in this file.

function Front({
    basketTotal,
    products,
    basketItems,
    totalA,
    totalB,
    totalC,
    totalD,
    handleAddItemA,
    handleAddItemB,
    handleAddItemC,
    handleAddItemD,
}) {
    return (
        <div>
            <div className={styles.total}><h2 >Total Price: £{(basketTotal / 100).toFixed(2)}</h2>
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

{/* Below we can see the Object.entries() function to convert objects to arrays to then pass them to the map() function
 to loop through the entire array created to capture 'product' and 'count' */}
            <h3 className={styles.itemsName}>Basket Items:</h3>
            <div className={styles.productsList}>
                <h3 className={styles.quantity}>Quantity </h3>
                <h3 className={styles.productList}>
                    <ul>
                        {Object.entries(basketItems).map(([product, count]) => (
                            <li key={product}>
                                <h4 >{product}___________________________{count}</h4>
                            </li>
                        ))}
                    </ul>
                </h3>
            </div>
            <div className={styles.prices}>
                <h3>Running Total:</h3>
                <h3 >A: £{(totalA / 100).toFixed(2)}</h3>
                <h3 >B: £{(totalB / 100).toFixed(2)}</h3>
                <h3 >C: £{(totalC / 100).toFixed(2)}</h3>
                <h3 >D: £{(totalD / 100).toFixed(2)}</h3>
            </div>
            <div className={styles.changePrices}>
                <h3>Change price</h3>
                <label htmlFor="productSelector">Choose a product:</label>
                <select id="productSelector" className={styles.dropdown}>
                    <option value="Product A">Product A ({products.ProductA} pence)</option>
                    <option value="Product B">Product B ({products.ProductB} pence)</option>
                    <option value="Product C">Product C ({products.ProductC} pence)</option>
                    <option value="Product D">Product D ({products.ProductD} pence)</option>
                </select>
            </div>
        </div>
    );
}

export default Front;
