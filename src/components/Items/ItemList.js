import React from "react";
import "./ItemDetail.css"

const ItemList = ({product})=>{

    return (

        <>
        
            <div key={product.id} className="cards">
                <img src={product.image} alt="" />
                <h3>
                    {product.title}
                </h3>
                <p>$ {product.price}</p>
            </div>
        
        </>

    
    )


}

export default ItemList