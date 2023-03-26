import React from "react";
//import "./ItemDetail.css";
import { Link } from "react-router-dom";


const ItemCount = ({ product, handlerClickAdd, handlerClickSubtrack, onAdd, count, isPressedButton }) => {



  return (
    <>
      <div key={product.id} className="cards">
        <img src={product.image} alt="" />
      </div>
      <div>
        <h3>
          {product.description}
        </h3>
      </div>
      <div>
        <button onClick={() => handlerClickSubtrack()}>
          -
        </button>
        <h2>{count}</h2>
        <button onClick={() => handlerClickAdd()}>
          +
        </button>
      </div>
      <div>
        <p>{product.price}</p>

        {isPressedButton ? (
          <Link to="/cart">
            <button>Finalizar compra</button>
          </Link>
        ) : (
          <button onClick={onAdd}>Agregar al carrito</button>
        )}

      </div>
    </>
  )
}


export default ItemCount;


/*


{isPressedButton ? (
          <Link to="/cart">
            <button>Finalizar compra</button>
          </Link>
        ) : (
          <ItemCount onAdd={onAdd} />
        )}

*/
