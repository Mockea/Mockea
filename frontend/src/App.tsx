import { useContext, useEffect, useState } from 'react'

import { IProduct } from './interfaces';
import { getProductsFromApi } from './services/ProductsApi';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ToBeDeveloped } from './pages/ToBeDeveloped';
import { NotFound } from './pages/NotFound';
import { ProductsContext } from './context/ProductsContext';
import { ProductsContextType } from './types';

function App() {

  const {products, getProducts} = useContext(ProductsContext) as ProductsContextType;

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        {products.map((product) => <p>{product.name}</p>)}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route index element={<Home/>}/>
          <Route path="CustomerService" element={<ToBeDeveloped />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
