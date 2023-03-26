import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount.js";
import { CustomContext } from "../../context/CustomContext.js";

const ItemDetail = ({ product }) => {

    const [count, setCount] = useState(0);
    const {totals} = useContext(CustomContext);

    const handlerClickAdd = () => {
        if (count >= totals.qty) {
            setCount(count + 1);
        }
    };

    const handlerClickSubtrack = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const [isPressedButton, setIsPressedButton] = useState(false);
    const { addProduct } = useContext(CustomContext);


    const onAdd = (count) => {
        setIsPressedButton(true);
        addProduct(product, count)
    };


return (
    <>
        <ItemCount key={product.id} product={product} handlerClickAdd={handlerClickAdd}
        handlerClickSubtrack={handlerClickSubtrack} count={count} onAdd={onAdd} isPressedButton={isPressedButton}
        />

    </>



)


}

export default ItemDetail

