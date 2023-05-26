import { useEffect, useState } from 'react'
import { Product } from './types';
import { getProducts } from './services/mockeaProductsApi';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { ToBeDeveloped } from './pages/ToBeDeveloped';
import { NotFound } from './pages/NotFound';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
    console.log(products);

  const getData =  async () => {
    setProducts(await getProducts());
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route index element={<Home/>}/>
          <Route path="CustomerService" element={<ToBeDeveloped />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
