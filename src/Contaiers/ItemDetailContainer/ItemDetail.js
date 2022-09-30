import { Button } from "@chakra-ui/react";
import { Item } from "../Item/Item";
 import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";



const ItemDetail = ({producto})=>{
    const [sendCart, setSendCart] = useState (false); 

    const onAdd = () => {setSendCart(true)};
   
    return(
        <>
        {producto.map( (prod, i) =>
        <>
         <Item key={`${prod.product}-${i}`}product={prod} /> 
         {sendCart? <div id><Link to='/cart'><Button id="finCompra">Terminar mi Compra</Button></Link> </div>
         :<ItemCount  initial={1} stock = {prod.stock} onAdd={onAdd}/> 
        }
         </>
         )}
         
         
            
            
        
        
        
        </>
        
    )
   
}


                
             
          

export  {ItemDetail}  