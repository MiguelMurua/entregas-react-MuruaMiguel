import React from "react";
import "./NavBar.css";
import logotipo from "../../assets/logotipo.png"
import CartWidget from './CartWidget.js';
import Categorias from "./Categorias.js";
import { Link } from "react-router-dom";

const NavBar = ({ name, id }) => {

    return (
        <div className="container">
            <div className="container-logo">
                <Link to={`/`}>
                    <img src={logotipo} alt="logo" />
                </Link>
                <h1>Bienvenido "{name}"</h1>
            </div>

            <Categorias />

            <Link className="container-carrito" to={`/cart`}>
                <CartWidget />
            </Link>

        </div>
    )
}

export default NavBar;