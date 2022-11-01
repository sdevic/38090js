import React from 'react';
import  './Components/Style/Style.css';
import  './Components/Login/logStyle.css';
import NavBar from './Components/NavBar/NavBar';
import Cart from './Contaiers/CartView/Cart';
import ItemListContainer from './Contaiers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Contaiers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Customprovider from './Context/CustomContext';
import Formulario from './Contaiers/Formulario/Formulario';
import  Login from './Components/Login/Login';




const App = ()=>{
  const saludo ="Bienevenido a Wait for it";
  
  
return(
  <>
    <BrowserRouter>
      <Customprovider>
      <NavBar/>
        <Routes>
          <Route path='/'  element={<ItemListContainer greeting={saludo}/>}/>
          <Route path='/categoria/:IdCategoria' element={<ItemListContainer greeting={saludo}/>}/>
          <Route path='/producto/:IdProd' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/pago' element={<Formulario/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes> 
      </Customprovider>
    </BrowserRouter>
  </>
)

}

export default App;




