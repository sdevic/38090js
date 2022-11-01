import React, { useState } from "react";
//hice un contador trayendo el stock de firestore 
const ItemCount = ({stock, initial,onAdd,producto}) =>{
 
  let [contador, setContador] = useState(initial);
  let [titulo, setTitulo] = useState("");


//solo me deja agregaar productos si tengo disponible en el stock
  const sumar = ()=>{
    if(contador < stock){
    setTitulo("");
    setContador(contador + 1);
    }else{
      
      setTitulo("No hay mas stock");
    }
  
  }
//resto hasta 0
  const restar = ()=>{
    if(contador < initial){
      
     setTitulo("No puede ser un numero negativo");
    
    }else{
      setContador(contador - 1);
     setTitulo("");

    }
    
  }

    

    
    
  

  
 return(
    <>
      <div id="itemCount">
        <p id="stock">Disponible {stock}</p>
        <button onClick={restar}>-</button>
        <input id="cantidad" type="number" value={contador} readOnly></input>        
        <button onClick={sumar}>+</button>
        <button disabled={stock <=0}  onClick={() => onAdd( contador)} >Agregar</button>
        <h3>{titulo}</h3>
      </div>
    </>

  )

}

export default ItemCount;