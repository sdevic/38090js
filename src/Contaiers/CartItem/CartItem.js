import React, { useContext } from "react";
import { Context } from "../../Context/CustomContext";


const CartItem = ({product})=>{
const {deleteProd}= useContext(Context);

    return(
        <div>
            
                <img id='imgProd' src={product.image} alt="" /> 
                <p> Producto: ${product.product}</p>
                <p> cantidad:{product.cantidad}</p>
                <p> Precio unitario:$ {product.price}</p>
                <p> Subtotal: ${product.price *product.cantidad }</p>
                <button onClick={()=>deleteProd(product.id)}>eliminar</button>
           
        </div>
    )
}

export default CartItem