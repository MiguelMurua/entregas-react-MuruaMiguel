import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import "./ItemDetail.css"



const ItemDetailContainer = ({tittle})=>{


    const [products , setProducts] = useState([]);
    const [error, setError] = useState(false)

    useEffect(()=>{

    const getProducts = async () =>{
        try{
            const resp = await fetch('https://fakestoreapi.com/products')
            const data = await resp.json()
            setProducts(data)
            console.log(data);
        } catch {
            setError (true)
            }

    };
    getProducts();

    }, []);

    return (

        <main>
            <h1 className="tituloMain">{tittle}</h1>

            <div className="containerCards">
        <>
        {!error ? (   
            <>
                {products.length ? (
                    <ItemDetail products ={products}/>
                ) : (
                    <h1>Cargando...</h1>
                    
            )}
            
            </>
        ) : (
            <h1>Hubo un error</h1>
        )} 
        
    
        </>
        </div>
        </main>
    )

}

export default ItemDetailContainer