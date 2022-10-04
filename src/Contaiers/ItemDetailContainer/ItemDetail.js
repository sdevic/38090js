import { Button } from "@chakra-ui/react";
import { Item } from "../Item/Item";
 import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../../Context/CustomContext";




const ItemDetail = ({producto})=>{
   
    const [sendCart, setSendCart] = useState (false); 
    
   
    const {addProd}= useContext(Context);
   

    const onAdd = (cantidad) => {
        setSendCart(true);
        addProd(producto,cantidad);
        
        
        
        
            };
   
    return(
        <>
        {producto.map( (prod, i) =>
        <div key={`${prod.product}-${i}`}>
         <Item product={prod} /> 
         {sendCart? <div id="divFin"><Link to='/cart'><Button id="finCompra">Terminar mi Compra</Button></Link> </div>
         :<ItemCount initial={1} stock = {prod.stock} onAdd={onAdd}/> 
        }
         </div>
         )}
         
         
            
            
        
        
        
        </>
        
    )
   
}


                
             
          

export  {ItemDetail}  