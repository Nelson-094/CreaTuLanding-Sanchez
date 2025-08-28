import React from 'react';
import ItemCount from './ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ id, title, price, image, description, stock }) => {
    const onAdd = (quantity) => {
        console.log(`Agregados ${quantity} productos al carrito`);
        alert(`Se agregaron ${quantity} unidades de ${title} al carrito`);
    };

    return (
        <div className="item-detail">
            <div className="item-detail-image">
                <img src={image} alt={title} />
            </div>
            <div className="item-detail-info">
                <h1 className="item-detail-title">{title}</h1>
                <p className="item-detail-price">${price}</p>
                <p className="item-detail-description">{description}</p>
                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;