import React from 'react';
import  './Components/Header/Header.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Contaiers/ItemListContainer/ItemListContainer'
import ItemCount from './Contaiers/ItemCount';
import { Item } from './Components/Item';
import ItemDetailContainer from './Contaiers/ItemDetailContainer/ItemDetailContainer';


const App = ()=>{
  const saludo ="Bienevenido a Wait for it";
return(
  <>
  
    <NavBar/>
    <ItemListContainer greeting={saludo}/>
    <ItemCount initial={1} stock = {22}/>
    <ItemDetailContainer/>
    <Item/>
    
  </>
)

}

export default App;
