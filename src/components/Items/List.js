import React from "react";
import "./ItemList.css"

const List = ({product})=>{


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
                <button className="botonCards">Agregar al carrito</button>
            </div>

        </>

    )

};

export default List;