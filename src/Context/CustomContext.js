import { useNavigate } from "react-router-dom";
import React, {createContext,  useState,useEffect} from "react";
export const Context = createContext();



const Customprovider = ({children})=>{
    const navigate = useNavigate();
    const [btnIngresar, setBtnIngresar] = useState();
    const [reinicio, setReinicio] = useState();
    
    
   const [cart, setCart] = useState([]);
   
// mantengo el logeo aunque se reinicie el navegador
   useEffect(()=>{
    let usr = JSON.parse(localStorage.getItem("Usuario")) ; 
    if(usr !== null){
           
        setBtnIngresar("cerrar sesion");
    }else{
        setBtnIngresar("Ingresar");
        localStorage.clear();
    }
   },[reinicio])
  //Creo con el localstorage una sensacion de estar logeado
   const logeo = () =>{ 
     
        localStorage.setItem("log",JSON.stringify(true));
        setReinicio(false);
        setBtnIngresar("cerrar sesion");
        navigate("/");
   
   };
   // borro el localstorage y vuelvo a parecer deslogueado
   const desLogeo = () =>{    
     setBtnIngresar("Ingresar");
        navigate("/");

    };



   const addProd = (producto,cantidad) =>{
    let nCart;
    
    // si existe el producto, le sumo la cantidad al atributo cantidad, sino creo uno nuevo
    let product =cart.find(product => product.id === producto.id)
    if(product){
        product.cantidad += cantidad;
        nCart = [...cart]
    }else{
        product = {...producto,  cantidad : cantidad};
        nCart = [...cart,product]
    }
    setCart(nCart)
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
    <Context.Provider value={{addProd,prodRepetido, deleteProd,reset,totalPrecio, totalProductos,logeo,desLogeo, cart,btnIngresar}}>
        {children}
    </Context.Provider>
)

}

export default Customprovider