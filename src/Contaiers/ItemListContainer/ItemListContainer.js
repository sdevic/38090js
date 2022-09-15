import React, { useEffect, useState } from "react";
import { products } from "../../Components/assets/productos";
import { customFetch } from "../../Utils/customFetch"
import { ItemList } from "../../Components/ItemList";
import CircularProgress from '@mui/material/CircularProgress';


const ItemListContainer = ({greeting}) =>{
   const [listProducts, setListproducts] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(()=>{
      customFetch(products)
         .then(res=> {
               setListproducts(res)
               setLoading(false)
            
            }
             )
   },[])
  
 return(
   <>
      <h2>{greeting}</h2>
      {loading ?
      <CircularProgress />
      :
      <ItemList listProducts={listProducts}/>
      }
    </> 
 )

}

export default ItemListContainer