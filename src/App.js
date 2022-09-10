import React from 'react';
import  './Components/Header/Header.css';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/NavBar/NavBar';
import ItemListContainer from './Contaiers/ItemListContainer/ItemListContainer'

const App = ()=>{
  const saludo ="Bienevenido a Wait for it";
return(
  <>
    <NavBar/>
    <ItemListContainer greeting={saludo}/>
    </>
)

}

export default App;
