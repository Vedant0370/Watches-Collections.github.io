
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Componants/Home';
import Navbarnew from './Componants/Navbarnew';
import Cart from './Componants/Cart';
import { CartProvider } from 'react-use-cart';

import {BrowserRouter as Router,  Routes, Route } from "react-router-dom"
import ProductInfo from './Componants/ProductInfo';
function App() {
  return (
    
    <>
    <CartProvider>
      <Router>
        <Navbarnew/>
          <Routes>

              <Route path='/' element={<Home/>}/>
              <Route path='/productinfo/:id' element={<ProductInfo/>}/>
              <Route path='/cart' element={<Cart/>}/>

          </Routes>

      </Router>
      </CartProvider>
    
    </>
  );
}

export default App;
