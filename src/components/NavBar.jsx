import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>TiendaReact</h1>
            </div>

            <div className="navbar-links">
                <a href="#inicio">Inicio</a>
                <a href="#catalogo">Catálogo</a>
                <a href="#ofertas">Ofertas</a>
                <a href="#contacto">Contacto</a>
            </div>

            <div className="navbar-cart">
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;