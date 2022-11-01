import React, { useContext } from "react";
import { Context } from "../../Context/CustomContext";

//muestro el producto y con el boton eliminar llamo a la funcion deletprod mandando el id del producto a borrar

const CartItem = ({product})=>{
const {deleteProd}= useContext(Context);


    return(
        
        <div id="productos">
            
                <img id='imgProd' src={product.image} alt="" /> 
                <p> Producto: {product.product}</p>
                <p> cantidad:{product.cantidad}</p>
                <p> Precio unitario:$ {product.price}</p>
                <p> Subtotal: ${product.price *product.cantidad }</p>
                <button onClick={()=>deleteProd(product.id)}>eliminar</button>
           
        </div>
        
    )
}

export default CartItem