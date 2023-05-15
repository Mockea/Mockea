import { useEffect, useState } from 'react'

import './App.css'
import { IProduct } from './interfaces';
import { getProducts } from './services/mockeaApi';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);


  const getData =  async () => {
    return setProducts(await getProducts());
  }

  useEffect(() => {
    getData();
  }, [])

  console.log(products);
  return (
    <>
      < Navbar/>
      {import.meta.env.VITE_API_SERVER_URL}
        {/* <p>{products.map(product => <ProductCard product={product}/>)}</p> */}
      <Footer />
    </>
  )
}

export default App
