import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="brand-link">
                    <h1>TiendaReact</h1>
                </Link>
            </div>

            <div className="navbar-links">
                <Link to="/">Inicio</Link>
                <Link to="/category/remeras">Remeras</Link>
                <Link to="/category/pantalones">Pantalones</Link>
                <Link to="/category/calzado">Calzado</Link>
            </div>

            <div className="navbar-cart">
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;