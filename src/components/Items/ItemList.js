import React from "react";
import List from "./List.js";

const ItemList = ({products})=>{


        return (
            <>
                {products.map((product)=>{
                    return (<List key={product.id} product={product}/>)
                })}
            </>
            )
        
    



}

export default ItemList