import { useEffect, useState } from 'react'

import { IProduct } from './interfaces';
import { getProducts } from './services/mockeaApi';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ToBeDeveloped } from './pages/ToBeDeveloped';
import { NotFound } from './pages/NotFound';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);


  const getData =  async () => {
    return setProducts(await getProducts());
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      < Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route index element={<Home/>}/>
          <Route path="CustomerService" element={<ToBeDeveloped />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
      <main className="h-[500px]"></main>
      <Footer />
    </>
  )
}

export default App
