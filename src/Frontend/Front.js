import React from 'react';
import styles from './Styles.module.css';

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

            {/* Calling the Object.entries() function to convert objects to arrays to then pass them to the map() function
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

export default Front;
