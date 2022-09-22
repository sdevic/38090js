import React, { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) =>{
 
  let [contador, setContador] = useState(initial);
  let [titulo, setTitulo] = useState("");
  let [producto, setProducto] = useState(stock);


  const sumar = ()=>{
    if(contador < producto){
    setTitulo("");
    setContador(contador + 1);
    }else{
      
      setTitulo("No hay mas stock");
    }
  
  }

  const restar = ()=>{
    if(contador < initial){
      
     setTitulo("No puede ser un numero negativo");
    
    }else{
      setContador(contador - 1);
     setTitulo("");

    }
    
  }
  const add = ()=>{
    if(contador > 0){
      
     setTitulo(`Se agrego al carrito ${contador} milanesas`);
     setProducto(producto - contador);
     setContador(contador = 0);
     
    }else{
      setTitulo("No hay productos seleccionados");

    }
    

    
    
  }

 return(
    <>
    <p id="stock">Cantidad de milanesas disponibles:{producto}</p>
    <button onClick={restar}>-</button>
    <input id="cantidad" type="number" value={contador} readOnly></input>
    <button onClick={sumar}>+</button>
    <button onClick={add}>Agregar</button>
    <h3>{titulo}</h3>
    </>

  )

}

export default ItemCount