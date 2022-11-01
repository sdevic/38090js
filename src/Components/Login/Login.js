import React, { useState,useContext } from "react";

import { Context } from "../../Context/CustomContext";



   


const Login = ()=> {
  const {logeo}= useContext(Context); 
  
  const usuarioInicial={
    usr:"",
    passUsuario: ""
  }
  const [usuarioInicio, setUsuarioInicio] = useState(usuarioInicial);
  //guardo los valores de los input para poder controlarlos
  const logUsuario  =(e)=> {
            
    e.preventDefault();
    const {name,value} = e.target;
    setUsuarioInicio({...usuarioInicio,[name]: value})
    
    
    

    };

  //Chequeo si el login es correcto, si es correcto dejo guardada una variable con balor true en el localstorage para poder mantener el login.
  const ingresar = async (e)  =>{
        e.preventDefault();
        
        if(usuarioInicio.usr ==="alejandro" && usuarioInicio.passUsuario ==="Fernandez"){ 
         
          logeo();
          localStorage.setItem("Usuario",JSON.stringify(usuarioInicio));
         
        }else{
          console.log("mete bien los garfios")
        }
        
      
      
     
        
     }     

   
    const [showPAss,setShowPass]=useState(true);
    return(
        <div id="inicioF">      
        <form id="inicioForm"  onSubmit={ingresar} action="" >
           <p>Ingrese al Sistema con Usuario y Contraseña</p>
           <input type="text"  id="user" name="usr" onChange={logUsuario}  placeholder="Usuario" ></input>
           {showPAss? 
            <input name="passUsuario"  onChange={logUsuario} type="password" id="pass" placeholder="Contraseña" ></input>
          :
            <input name="passUsuario"  onChange={logUsuario} type="text" id="pass" placeholder="Contraseña" ></input>
          }
          <label id="lCheckbox" >mostrar/ocultar contraseña</label> <input  onClick={(e)  =>{
          e.preventDefault();
          // Si hago click en el checkbox, cambio el estado del showPass,si el input del pass esta en type password que lo convierte en text y lo opuesto sino
          if(showPAss === true){
            setShowPass(false)
          }else{
            setShowPass(true)
        }}} type="checkbox" id="mostrarPass" ></input>
           <button id="btnUsr">Ingresar</button>         
        </form>
      </div >
      
  
    )
  }
  
  export default Login;