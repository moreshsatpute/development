import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './routes/Home';

import React from 'react';
import PRODUCTS from './routes/PRODUCTS.JS';
import SERVICES from './routes/SERVICES.JS';
import ABOUTUS from './routes/ABOUTUS.JS';
import CONTACT from './routes/CONTACT.JS';
import PageNotFound from './routes/PageNotFound';


// channel name   
//Tech2 etc
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<SERVICES />} />
        <Route path="/products" element={<PRODUCTS />} />
        <Route path="/aboutus" element={<ABOUTUS />} />
        <Route path="/contact" element={<CONTACT />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  );
}


export default App;



