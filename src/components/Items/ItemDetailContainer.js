import React, {useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import "./ItemDetail.css"



const ItemDetailContainer = ()=>{

    const [product , setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        const getProduct = async () =>{
            try{
                const res = await fetch ('https://fakestoreapi.com/products/1');
                const data = await res.json();
                setProduct(data);
                console.log(data);
            } finally {
                setLoading(false);
            }
    };

    getProduct();

    },[]);

    return (
    <>
    {<>{loading ? <h3>Cargando...</h3> : <ItemDetail product={product} /> }</>}

    </>
    );

}

export default ItemDetailContainer

