// src/Frontend/Basket.js
import React, { useState } from 'react';

function Basket() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h2>Basket Count: {count}</h2>
        <h3>Click to scan a product below:</h3>
      <button onClick={() => setCount(count + 1)}>
        Product A
      </button>
      <button onClick={() => setCount(count + 1)}>
        Product B
      </button>
      <button onClick={() => setCount(count + 1)}>
        Product C
      </button>
      <button onClick={() => setCount(count + 1)}>
        Product D
      </button>
    </div>
  );
}

export default Basket;
