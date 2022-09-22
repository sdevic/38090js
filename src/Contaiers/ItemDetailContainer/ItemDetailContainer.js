import React, { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { ItemDetail } from "../ItemDetail/Item";


const ItemDetailContainer = ({greeting}) =>{
    const [producto, setProducto] = useState([]) ;  
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const getItem = async ()=>{
            try{
                const item = await  fetch('https://fakestoreapi.com/products/1');
                const dato =  await item.json();
                setProducto(dato);
            }
            catch{
                console.err("un error");
            }
            finally{
                setLoading(false    );
            }

        } 
        getItem();
       
    },[])
   
  return(
    <>
       <h2>{greeting}</h2>
       {loading ?
       <CircularProgress />
       :
       <ItemDetail producto={producto}/>
       }
     </> 
  )
 
 }
 
 export default ItemDetailContainer 