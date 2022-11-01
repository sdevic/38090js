import React, {useContext} from "react";
import { Context } from "../../Context/CustomContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useNavigate } from "react-router-dom";
//mi idea era guardar en el storage el carrito de compras , si bien lo guardo no logre cumplir la funcion que buscaba que era que al actualizar la pagina me los siga guardano
const Cart = () => {
    const navigate = useNavigate();
    const {cart, totalPrecio}= useContext(Context); 
    
    let usr = JSON.parse(localStorage.getItem("Usuario")) ;
    localStorage.setItem("cart",JSON.stringify(cart)); 
    let cartl = JSON.parse(localStorage.getItem("cart")) ;
   
    let total = totalPrecio();
    localStorage.setItem("TotalPrecio",JSON.stringify(total));
    let totalPreciol = JSON.parse(localStorage.getItem("TotalPrecio")) ;
    
    //chequeo, si no esta logueado cuando hago click en pagar me pide el login, sino sigu el circuito
    const pagar =(e)=> {
            
        e.preventDefault();
        if(usr === null){
           
            navigate("/login");
        }else{
            
            navigate("/pago");
        }
        
        
 };
    // si el array esta vacio link al home
    if(cartl.length ===0){
    return(
        <>
        <p>El carrito esta vacio</p>
        <Link to='/'>Realizar compras</Link>
        </>
    )
    };
    return(
        <>
        {
            
            cartl.map((product) => <CartItem key={product.id} product={product}/>)
          
        
        }
        
        <p className="cart">Total:{totalPreciol}</p>
        
        <button className="cart" onClick={pagar}>Pagar</button>
        
        </>
    )
}



export default Cart