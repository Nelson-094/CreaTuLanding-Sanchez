import React from 'react';
import Item from './Item';
import './ItemList.css';

const ItemList = ({ products }) => {
    return (
        <div className="item-list">
            {products.map(product => (
                <Item
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </div>
    );
};

export default ItemList;