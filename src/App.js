import React from 'react';
import Basket from './/Backend/Basket';
import styles from './Frontend\\Styles.module.css';

function App() {
  return (
    <div className={styles.App}>
      <h1>Checkout</h1>
      <Basket />
    </div>
  );
}

export default App;
