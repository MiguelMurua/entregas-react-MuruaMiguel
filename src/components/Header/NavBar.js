import React from "react";
import "./NavBar.css";
import carrito from "../../assets/logotipo.png"
import CartWidget from './CartWidget.js';
import Categorias from "./Categorias.js";

const NavBar = ({name, id }) => {
    
    return (
        <div className="container">
            <div className="container-logo">
                <img src={carrito} alt="icono carrito" />
                <h1>Bienvenido "{name}"</h1>
            </div>

            <Categorias/>

            <div className="container-carrito">
                <CartWidget/>
            </div>
        </div>
    )
}

export default NavBar;