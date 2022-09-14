import React, { useEffect, useState } from "react";
import { products } from "../../Components/assets/productos";
import { customFetch } from "../../Utils/customFetch"
import { ItemList } from "../../Components/ItemList";

const ItemListContainer = ({greeting}) =>{
   const [listProducts, setListproducts] = useState([])
   useEffect(()=>{
      customFetch(products)
         .then(res=> setListproducts(res))
   },[])
  
 return(
   <>
      <h2>{greeting}</h2>
      <ItemList listProducts={listProducts}/>
    </> 
 )

}

export default ItemListContainer