import React from "react";
import "./ItemList.css"
import { Link } from "react-router-dom";

const List = ({ product }) => {


    const onAdd = () => {

    };

    return (

        <>

            <div key={product.id} className="cards">
                <img src={product.image} alt="" />
                <h3>
                    {product.title}
                </h3>
                <p>$ {product.price}</p>
                <Link to={`/product/${product.id}`} >
                    <button className="botonCards">Ver detalles</button>
                </Link>
            </div>

        </>

    )

};

export default List;