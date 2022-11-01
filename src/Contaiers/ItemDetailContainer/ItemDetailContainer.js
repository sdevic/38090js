import React, { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import {db} from "../../firebase/firebase"
import {doc,collection,getDoc} from "firebase/firestore";

const ItemDetailContainer = ({greeting}) =>{
    const [producto, setProducto] = useState([]) ;  
    const [loading, setLoading] = useState(true);
    let {IdProd} = useParams();
       
   
    
    useEffect(()=>{
      const todosProductos =  collection(db , 'productos');
      const refProd = doc(todosProductos, IdProd); 
      
      getDoc(refProd)
      .then((result) =>{
         setProducto({
          id: result.id,
          ...result.data()
         })
                      
        })         
        .finally(()=>{
         setLoading(false);
      })},[IdProd])
   
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