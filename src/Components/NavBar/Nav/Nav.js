import React from "react";
import { Link } from "react-router-dom";



   


const Nav = ({categorias})=> {
    return(
    
       <nav id="menu">
        {categorias.map((categoria =>{
            return <Link key={categoria.id} to={categoria.ruta} id="menuOpciones" >{categoria.nombre}</Link>
        }))}
       </nav>
  
    )
  }
  
  export default Nav;