import React,{useContext} from "react";
import CartWidget from '@mui/icons-material/ShoppingCart';
import { CustomContext } from "../../context/CustomContext";


const Cart = ()=>{

    const { totals } = useContext(CustomContext);

    return (
        <>
            <CartWidget fontSize="large" color="secondary" />  
            {totals.qty > 0 && <p>{totals.qty}</p>}     
        </>
    )


};

export default Cart;