import React, { useEffect, useState } from "react";
import { products } from "../../Components/assets/productos";
import { customFetch } from "../../Utils/customFetch"
import { ItemList } from "./ItemList";
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) =>{
   const [listProducts, setListproducts] = useState([])
   const [loading, setLoading] = useState(true)
   let {IdCategoria} = useParams();
  
  
   useEffect(()=>{
      customFetch(products)
         .then(res=> {
            const dato =  res.filter(function (traer) { return traer.category === IdCategoria; })
               setListproducts(dato)
               setLoading(false)
            
            }
             )
   },[IdCategoria])
  
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