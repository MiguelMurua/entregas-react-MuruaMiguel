import React from "react";
import ItemList from "./ItemList";

const ItemDetail = ({products})=>{

    return (
    <>
        {products.map((product)=>{
            return (<ItemList key={product.id} product={product}/>)
        })}
    </>
    )


}

export default ItemDetail