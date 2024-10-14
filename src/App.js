import React from 'react';
import {Routes,Route,} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './components/Home/Navbar';
import Carousel from './components/caurosel images/caurosel';
import FeaturedProducts from './components/Featured Products/FeaturedProducts';
import {TopProducts} from './components/Top Products/TopProducts';
import Advantages from './components/Advantages/Advantages';
import Footer from './components/Footer/Footer';
import EmptyCartPage from './components/ALL-PRODUCTS/EmptyCartpage';
import AllProducts from './components/ALL-PRODUCTS/All-Products';
import ProductDetails from './components/PRODUCT-DETAILS/Productdetails';
import Cart from './components/CART/CartPage';

function App() {
  
  return (
    <>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <>
            <Carousel/>
            <FeaturedProducts/>
            <TopProducts/>
            <Advantages/>
            <Footer/>
          </>}>
        </Route>
        <Route path='/emptycart' element={<EmptyCartPage/>}></Route>
        <Route path='/all-products' element={<AllProducts/>}></Route>
        <Route path='/Product-Details/:id' element={<ProductDetails/>}></Route>
        <Route path='/cart-page' element={<Cart/>}></Route>
      </Routes>
      
      
      
    </>
    
  );
}

export default App;
