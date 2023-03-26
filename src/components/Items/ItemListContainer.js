import React, {useEffect , useState} from "react";
import ItemList from "./ItemList.js";
import "./ItemList.css"
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase.js";
import {getDocs, collection, query,where} from "firebase/firestore"

const ItemListContainer = ({tittle})=>{




        const [products , setProducts] = useState([]);
        const [error, setError] = useState(false)
        const {name} = useParams()
        // const URL = `https://fakestoreapi.com/products/category/${name}`;
        // const URL2 = `https://fakestoreapi.com/products`;

        useEffect(()=>{

            const productsCollection = collection(db,'products');
            const qry = name
                ? query (productsCollection, where('category','==',name))
                : productsCollection


            getDocs(qry).then((data)=>{
                const list = data.docs.map(product =>{
                    return {
                        ...product.data(),
                        id: product.id,
                    }
                });
                setProducts(list)
            })
            .catch(()=>{setError (true)})
        // const getProducts = async () =>{
        //     try{
        //         if(name){
        //             const resp = await fetch(URL)
        //             const data = await resp.json()
        //             setProducts(data)
        //         }
        //         else{
        //             const resp = await fetch(URL2)
        //             const data = await resp.json()
        //             setProducts(data)
        //         }
        //     } catch {
        //         setError (true)
        //         }
    
        // };
        // getProducts();
    
    }, [name]);
    
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