import React, {useEffect , useState} from "react";
import ItemList from "./ItemList.js";
import "./ItemList.css"

const ItemListContainer = ({tittle})=>{



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
                        <ItemList products ={products}/>
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

export default ItemListContainer;