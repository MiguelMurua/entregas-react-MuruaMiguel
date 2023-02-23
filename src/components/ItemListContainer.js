import React, {useState} from "react";
import burguer from "../assets/burguer2.jpg"
import "./ItemList.css"


const ItemListContainer = ({tittle, stock})=>{

    const [contador, setContador] = useState(1)

    const handlerAdd = ()=>{
        setContador(contador +1)
    }

    const handlerRest = ()=>{
        setContador(contador -1)
    }

    return (
        <main>
            <h1>{tittle}</h1>
            <div className="container-cards">
                <div className="card">
                    <img src={burguer} alt="" />
                    <h3>Hamburguesa</h3>
                    <p>$1000</p>
                    <p>stock:{stock} </p>
                    <div className="container-button">
                        <button onClick={handlerRest}>-</button>
                        <p>{contador}</p>
                        <button onClick={handlerAdd}>+</button>
                    </div>
                    <div className="send-carrito">
                        <button >Enviar al Carrito</button>
                    </div>
                </div>
                <div className="card">
                    <img src={burguer} alt="" />
                    <h3>Hamburguesa</h3>
                    <p>$1000</p>
                    <p>stock:{stock} </p>
                    <div className="container-button">
                        <button onClick={handlerRest}>-</button>
                        <p>{contador}</p>
                        <button onClick={handlerAdd}>+</button>
                    </div>
                    <div className="send-carrito">
                        <button >Enviar al Carrito</button>
                    </div>
                </div>
                <div className="card">
                    <img src={burguer} alt="" />
                    <h3>Hamburguesa</h3>
                    <p>$1000</p>
                    <p>stock:{stock} </p>
                    <div className="container-button">
                        <button onClick={handlerRest}>-</button>
                        <p>{contador}</p>
                        <button onClick={handlerAdd}>+</button>
                    </div>
                    <div className="send-carrito">
                        <button >Enviar al Carrito</button>
                    </div>
                </div>
            </div>
        </main>
    )

}

export default ItemListContainer;