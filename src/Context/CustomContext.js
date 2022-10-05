
import React, {createContext, useState} from "react";
export const Context = createContext();

const Customprovider = ({children})=>{
    
   const [cart, setCart] = useState([]);

   const addProd = (producto,cantidad) =>{
  if(cart.filter(prod=> prod.id !== producto.id)){
    setCart([...cart, {...producto, cantidad}]);
  }
   
  
   
   };
   console.log(cart); 
  
   
   const deleteProd = (id) =>   cart.find(product => product.id === id)? true:false ;   

   const prodRepetido = (id) =>{     
      setCart(cart.filter(product => product.id !== id));
   };
   const reset = () =>{ setCart([]);};
return(
    <Context.Provider value={{addProd,prodRepetido, deleteProd,reset}}>
        {children}
    </Context.Provider>
)

}

export default Customprovider