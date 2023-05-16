import { useEffect, useState } from 'react'

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

  return (
    <>

      < Navbar/>
      {/* <p>{products.map(product => <ProductCard product={product}/>)}</p> */ }
      <main className="h-[500px]"></main>
      <Footer />
    </>
  )
}

export default App
