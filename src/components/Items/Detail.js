import React from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

const Detail = ({ product }) => {



    return (
        <>
            <div key={product.id} className="cards">
                <img src={product.image} alt="" />
                <h3>
                    {product.description}
                </h3>
                <p>$ {product.price}</p>
                <button className="botonCards">Agregar al carrito</button>
            </div>
        </>
    )
}


export default Detail;

