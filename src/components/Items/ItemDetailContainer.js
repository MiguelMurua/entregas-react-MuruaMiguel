import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import "./ItemDetail.css"
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase.js";
import {getDoc, collection, doc} from "firebase/firestore"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    // const url = `https://fakestoreapi.com/products/${id}`

    useEffect(() => {

        const productsCollection = collection(db,'products');
        const refDoc = doc(productsCollection,id)
        getDoc(refDoc).then(
            (data)=>{
                setProduct({
                    id:data.id,
                    ...data.data
                });
            }
        )
        .finally(()=>{
            setLoading(false)
        })

        // const getProduct = async () => {
        //     try {
        //         const res = await fetch(url);
        //         const data = await res.json();
        //         setProduct(data);
        //         console.log(data);
        //     } finally {
        //         setLoading(false);
        //     }
        // };

        // getProduct();

    }, []);
    return (
        <>
            {<>{loading ? <h3>Cargando...</h3> 
            : 
            <ItemDetail product={product} />}</>}

        </>
    );

}

export default ItemDetailContainer

