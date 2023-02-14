import React from "react";
import "./Header.css";
import carrito from "../../assets/burguer.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export const Header = () => {
    return (
        <div className="container">
            <div className="container-logo">
                <img src={carrito} alt="icono carrito" />
            </div>
            <div className="contenedor-titulo">
                <h1>Food Lomos</h1>
            </div>
            <nav className="navBar">
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </nav>
            <div className="container-carrito">
                <ShoppingCartIcon fontSize="large" color="secondary"/>
            </div>
        </div>
    )
}

export default Header