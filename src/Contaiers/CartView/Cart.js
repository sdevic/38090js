import React, {useContext} from "react";
import { Context } from "../../Context/CustomContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
const Cart = () => {
    const {cart, totalPrecio}= useContext(Context); 
    console.log(cart);
  
    // si el array esta vacio link al home
    if(cart.length ===0){
    return(
        <>
        <p>El carrito esta vacio</p>
        <Link to='/'>Realizar compras</Link>
        </>
    )
    };
    return(
        <>
        {
            
            cart.map((product) => <CartItem key={product.id} product={product}/>)
        
        }
        
        <p>Total:{totalPrecio()}</p>
        </>
    )
}



export default Cart