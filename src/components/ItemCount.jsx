import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAdd = () => {
        onAdd(count);
    };

    return (
        <div className="item-count">
            <div className="count-controls">
                <button
                    className="count-btn"
                    onClick={handleDecrement}
                    disabled={count <= 1}
                >
                    -
                </button>
                <span className="count-display">{count}</span>
                <button
                    className="count-btn"
                    onClick={handleIncrement}
                    disabled={count >= stock}
                >
                    +
                </button>
            </div>
            <button className="add-btn" onClick={handleAdd}>
                Agregar al carrito
            </button>
            <p className="stock-info">Stock disponible: {stock}</p>
        </div>
    );
};

export default ItemCount;