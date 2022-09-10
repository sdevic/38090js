import React from "react";
import logo from './../assets/logo.jpeg'
import CartWitget from '../CartWidtget/CartWidget'





const NavBar = ()=> {
    return (
        <header>
            <img src={logo} alt="logo" />
            <h1> Wait for it</h1>
            <nav>
                <ul>
                <li> <a href="">Comida</a></li>
                <li> <a href="">Bebidas</a></li>
                <li> <a href="">Postres</a></li>
                </ul>
            </nav>
        
            <CartWitget/>
      
        </header>
  
    )
  }
  
  export default NavBar;