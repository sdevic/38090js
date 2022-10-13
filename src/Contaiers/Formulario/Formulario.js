
import { useState} from "react";
import React, {useContext} from "react";
import { Context } from "../../Context/CustomContext";
import {db} from "../../firebase/firebase"
import {collection,addDoc} from "firebase/firestore";
const Formulario = () => {
    
    
    const {cart, totalPrecio,reset}= useContext(Context); 
    const usuarioInicial={
        nombreUsuario:"",
        apellidoUsuario: "",
        mailUsuario:""
    }
    const [usuario, setUsuario] = useState(usuarioInicial);
    
   
    
    const cargaUsuario  =(e)=> {
            
            e.preventDefault();
            const {name,value} = e.target;
            setUsuario({...usuario,[name]: value})
            
            
            
        
            };
           
     const enviarDatos = async (e)  =>{
        e.preventDefault();
        if(usuario.nombreUsuario !=="" && usuario.apellidoUsuario !=="" && usuario.mailUsuario !==""){
        const venta = { Comprador :{...usuario},Producto: cart.map(prod =>({ id: prod.id, prodcuto: prod.product, precio: prod.price, cantidad: prod.cantidad})), total:totalPrecio()};
        const ordenProductos =  collection(db , 'ventas');
        addDoc(ordenProductos, venta)
        .then(({id})=> alert("El id de la orden es: "+id));
        reset();
        setUsuario(usuarioInicial);
        

       
          
        
        
        }else{
            alert("los campos no estan completos");
        }
        
     }     


    
    return(
        <>
        <h2>Total:{totalPrecio()}</h2>
        <form onSubmit={enviarDatos} >
            <label htmlFor="nombreUsuario">Nombre: 
                <input onChange={cargaUsuario } value={usuario.nombreUsuario} name="nombreUsuario" type="text"placeholder="Ingrese su nombre"></input>
            </label>
            <label htmlFor="apellidoUsuario">Apellido: 
                <input onChange={cargaUsuario } value={usuario.apellidoUsuario} type="text" name="apellidoUsuario" placeholder="Ingrese su apellido"></input>
            </label>
            <label htmlFor="mailUsuario">Mail:
                <input onChange={cargaUsuario } value={usuario.mailUsuario} type="mail" name="mailUsuario" placeholder="Ingrese su mail"></input>
            </label>
            
                <button >Pagar</button>|
            
        </form>
        </>
    )
  
}



export default Formulario