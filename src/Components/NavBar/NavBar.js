import React, {useContext}  from "react";
import logo from './../assets/logo.jpeg'
import CartWitget from '../CartWidtget/CartWidget'
import Nav from "./Nav/Nav";
import { Link } from "react-router-dom";
import { Context } from "../../Context/CustomContext";
import { useNavigate } from "react-router-dom";





const NavBar = ({nombre,id})=> {
    const navigate = useNavigate();

    const {btnIngresar,desLogeo,}= useContext(Context); 
    
    const categorias = [
        {id:0, nombre:'Comida', ruta:'/categoria/comida'},
        {id:1, nombre:'Bebidas', ruta:'/categoria/bebidas'},
        {id:2, nombre:'Postres', ruta:'/categoria/postres'}]
        
    //con el cambio de estado de btnIngresar cambio el texto del boton del logeo, si esta en texto ingresar
    // lo envio al componente para loguearse, si esta en cerrar sesion borro el local storage y lo envio al home
    const ingresarOcerrar  =(e)=> {
            
        e.preventDefault();
        
        if(btnIngresar === "Ingresar"){
            
            navigate("/login");
        }else{
            
            localStorage.clear();
            desLogeo();
            

        }
    
    
    };
    
    
    return (
        <header>
            <Link to={'/'}>
                <img  id="logo" src={logo} alt="logo"  />
            </Link>
            <h1> Wait for it</h1>
            <Nav categorias ={categorias}/>
            <Link to={'/cart'}>
                <CartWitget/>   
            </Link>   
            <div id="inicio">
                <Link to={'/login'}>
                    <button onClick={ingresarOcerrar} id="btnInicio">{btnIngresar}</button>  
                </Link>
            </div>
        </header>
  
    )
  }
  
  export default NavBar;