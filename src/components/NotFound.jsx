import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Página no encontrada</h2>
            <p>La página que buscas no existe.</p>
            <Link to="/" className="home-link">
                Volver al inicio
            </Link>
        </div>
    );
};

export default NotFound;