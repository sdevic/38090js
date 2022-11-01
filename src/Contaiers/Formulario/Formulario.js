import swal from 'sweetalert'
import { useState} from "react";
import React, {useContext} from "react";
import { Context } from "../../Context/CustomContext";
import {db} from "../../firebase/firebase"
import {collection,addDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Formulario = () => {
    const navigate = useNavigate();
    //traigo el logeo para luego usar el nombre de usuario
    let usr = JSON.parse(localStorage.getItem("Usuario")) ; 
    const {cart, totalPrecio,reset}= useContext(Context); 
    const usuarioInicial={
        nombreUsuario:"",
        apellidoUsuario: "",
        numeroTarjeta:""
    }
    const [usuario, setUsuario] = useState(usuarioInicial);
    
   
    
    const cargaUsuario  =(e)=> {
            
            e.preventDefault();
            const {name,value} = e.target;
            setUsuario({...usuario,[name]: value})
            
            
            
        
            };
        //chequeo si los campos son distintos a vacio envio el formulario y borro los datos
     const enviarDatos = async (e)  =>{
        e.preventDefault();
        if(usuario.nombreUsuario !=="" && usuario.apellidoUsuario !=="" && usuario.numeroTarjeta !==""){
        const venta = { Comprador :{...usuario},Producto: cart.map(prod =>({ id: prod.id, prodcuto: prod.product, precio: prod.price, cantidad: prod.cantidad})), total:totalPrecio()};
        const ordenProductos =  collection(db , 'ventas');
        addDoc(ordenProductos, venta)
        
        .then(({id})=>
        swal("El ID de su compra es: "+ id ));
        
        navigate("/");
        
        setUsuario(usuarioInicial);    
        reset();   
        
        }else{
            swal("Debe completar todos los campos","los campos no estan completos");
        }
        
     }     

     
    
    return(
        <>
        <h2 id='titVenta'>{usr.usr}, ingresa los datos de tu tarjeta</h2>
        <h2 id='precVenta'>Total: ${totalPrecio()}</h2>
        <div id='divVenta'>
            
            <form id='formVenta' onSubmit={enviarDatos} >
                <label htmlFor="nombreUsuario">Nombre: 
                    <input onChange={cargaUsuario } value={usuario.nombreUsuario} name="nombreUsuario" type="text"placeholder="Ingrese su nombre"></input>
                </label>
                <label htmlFor="apellidoUsuario">Apellido: 
                    <input onChange={cargaUsuario } value={usuario.apellidoUsuario} type="text" name="apellidoUsuario" placeholder="Ingrese su apellido"></input>
                </label>
                <label htmlFor="numeroTarjeta">Tatjeta numero:
                    <input onChange={cargaUsuario } value={usuario.numeroTarjeta} type="num" name="numeroTarjeta" placeholder="Ingrese los 16 numeros"></input>
                </label>
            
                    <button id='btnVenta'>Pagar</button>|
            
            </form>
        </div>
        </>
    )
  
}



export default Formulario