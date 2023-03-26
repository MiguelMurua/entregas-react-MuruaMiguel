import React, { useContext } from "react";
import {CustomContext} from "../../context/CustomContext"
import {Link} from "react-router-dom"

const Cart = ()=>{

    const {cart} = useContext(CustomContext)


    return (
        <>
        {!cart.lenght ?(
            <h1>No hay productos en el carrito, ir a <Link to={"/"}>home</Link> </h1>
        ):(
            <div>
            {cart.map((product)=>{
                return <h1 key={product.id}>{product.title}</h1>
            })
            }
        </div>

        )}
        </>
    )

};

export default Cart;