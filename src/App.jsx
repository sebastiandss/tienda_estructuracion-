import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Storefront from './pages/Storefront';
import Checkout from './pages/Checkout';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Cambiamos la ruta principal directamente al Storefront minimalista */}
        <Route path="/" element={<Storefront />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
