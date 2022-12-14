import { Button } from "@chakra-ui/react";
import { Item } from "../Item/Item";
 import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../../Context/CustomContext";



//muestro  el producto con su detalle y el count
const ItemDetail = ({producto})=>{
   
    const [sendCart, setSendCart] = useState (false); 
    
   
    const {addProd}= useContext(Context);
   

    const onAdd = (cantidad) => {
        setSendCart(true);
        addProd(producto,cantidad);
        
        
        
        
            };
   
    return(
        <>
        
        <div >
         <Item product={producto} /> 
         {sendCart? <div id="divFin"><Link to='/cart'><Button id="finCompra">Terminar mi Compra</Button></Link> </div>
         :<ItemCount initial={1} stock = {producto.stock} onAdd={onAdd}/> 
        }
         </div>
         
         
         
            
            
        
        
        
        </>
        
    )
   
}


                
             
          

export  {ItemDetail}  