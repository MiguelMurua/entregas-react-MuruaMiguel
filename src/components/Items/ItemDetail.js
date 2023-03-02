import React from "react";
import Detail from "./Detail.js";

const ItemDetail = ({product})=>{

    return (
        
    <Detail key={product.id} product={product}/>
        
        
    )


}

export default ItemDetail

