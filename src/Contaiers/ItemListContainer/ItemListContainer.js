import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom";
import {db} from "../../firebase/firebase"
import {getDocs,collection,query,where} from "firebase/firestore";



const ItemListContainer = ({greeting}) =>{
   const [listProducts, setListproducts] = useState([])
   const [loading, setLoading] = useState(true)
  
   let {IdCategoria} = useParams();
    
   useEffect(()=>{
      const todosProductos =  collection(db , 'productos');
      
      if(IdCategoria){
      const q = query(todosProductos, where('category','==', IdCategoria)); 
      getDocs(q)
      .then((data) =>{
         const lista = data.docs.map((products)=>{
            
            return{ 
               ...products.data(),
               id: products.id
            
            }
         })
         setListproducts(lista);
        
         
         
      })
      
      .finally(()=>{
         setLoading(false);
      })}else{
         getDocs(todosProductos)
         .then((data) =>{
            const listaCompleta = data.docs.map((products)=>{
               
               return{ 
                  ...products.data(),
                  id: products.id                
               
               }
            })
            setListproducts(listaCompleta);
            
            
         })
         
         .finally(()=>{
            setLoading(false);

         })
      }
   }
        ,[IdCategoria])
  
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

 
