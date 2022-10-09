
import React, {createContext, useState} from "react";
export const Context = createContext();

const Customprovider = ({children})=>{
    
   const [cart, setCart] = useState([]);
  



   const addProd = (producto,nCantidad) =>{
    const { cantidad = 0 } = cart.find(prod=> prod.id === producto.id) || {};
    const nCart = cart.filter(prod=> prod.id !== producto.id);
    setCart([...nCart, {...producto, cantidad: cantidad+ nCantidad}]);
  }
   
  
   
   
   
  
   
   const deleteProd = (id) =>  setCart( cart.filter(product => product.id !== id));   

   const prodRepetido = (id) =>{     
      setCart(cart.filter(product => product.id !== id));
   };
  
   const reset = () =>{ setCart([]);};
  
   //Sumo el precio total de los productos por la cantidad recorriendo el array con el reduce
   const totalPrecio =()=>{
    return cart.reduce((totalPago, art)=> totalPago +(art.price * art.cantidad),0);

   }
   // Sumo el total de los productos, no importe que producto sino el total de productos de la compra
   const totalProductos =()=>{
    return cart.reduce((totalProd, art)=> totalProd + art.cantidad,0);

   }

return(
    <Context.Provider value={{addProd,prodRepetido, deleteProd,reset,totalPrecio, totalProductos,cart}}>
        {children}
    </Context.Provider>
)

}

export default Customprovider