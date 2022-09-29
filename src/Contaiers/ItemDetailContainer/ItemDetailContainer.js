import React, { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { ItemDetail } from "./ItemDetail";
import { customFetch } from "../../Utils/customFetch"
import { products } from "../../Components/assets/productos";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({greeting}) =>{
    const [producto, setProducto] = useState([]) ;  
    const [loading, setLoading] = useState(true);
    let {IdProd} = useParams();
    
    
   
    
    useEffect(()=>{
        const getItem = async ()=>{
            try{
                const item = await  customFetch(products);
                
                const dato =  await item.filter(function (traer) { return traer.id === IdProd; })
                
               
              setProducto(dato)
               
            }
            catch{
                console.err("un error");
            }
            finally{
                setLoading(false    );
                
                
            }

        } 
        getItem();
       
    },[IdProd])
   
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
