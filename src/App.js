import React from 'react';
import  './Components/Header/Header.css';
import NavBar from './Components/NavBar/NavBar';
import Cart from './Contaiers/CartView/Cart';
import ItemListContainer from './Contaiers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Contaiers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



const App = ()=>{
  const saludo ="Bienevenido a Wait for it";
return(
  <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={saludo}/>} />
        <Route path='/categoria/:IdCategoria' element={<ItemListContainer greeting={saludo}/>}/>
        <Route path='/producto/:IdProd' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
      
      
    </BrowserRouter>
  </>
)

}

export default App;




