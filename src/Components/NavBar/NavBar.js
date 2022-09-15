import React from "react";
import logo from './../assets/logo.jpeg'
import CartWitget from '../CartWidtget/CartWidget'





const NavBar = ()=> {
    return (
        <header>
            <img  id="logo" src={logo} alt="logo" />
            <h1> Wait for it</h1>
           <nav>
                <ul>
                <li> <a href="1">Comida</a></li>
                <li> <a href="2">Bebidas</a></li>
                <li> <a href="3">Postres</a></li>
                </ul>
            </nav>
        
            <CartWitget/>
      
        </header>
  
    )
  }
  
  export default NavBar;