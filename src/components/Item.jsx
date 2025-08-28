import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, title, price, image }) => {
    return (
        <div className="item">
            <img src={image} alt={title} className="item-image" />
            <div className="item-content">
                <h3 className="item-title">{title}</h3>
                <p className="item-price">${price}</p>
                <Link to={`/item/${id}`} className="item-link">
                    Ver detalles
                </Link>
            </div>
        </div>
    );
};

export default Item;