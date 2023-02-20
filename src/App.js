
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from './Components/Cart';
import Default from './Components/Default';
import Details from './Components/Details';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import ByCategory from './Components/ByCategory';
import View from './Components/View';
import Searchpage from './Components/Searchpage';
import {Router,Routes, Route } from 'react-router-dom';
import Carousel from './Components/Carousel';
import Login from './Components/Login';
import Registraction from './Components/Registraction';


function App() {
  return (
   <div className='str'>
   <Navbar />
   <Routes>
      <Route exact path="/" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
      <Route element={<Default />} />
      <Route path="/details" element={<Details/>} />
      <Route path="/search" element={<Searchpage />} />
      <Route path="/view" element={<View />} />
      <Route path="/category" element={<ByCategory />} />
      <Route path="/carousel" element={<Carousel />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registraction />} />
    </Routes>
    </div>
  );
}

export default App;
