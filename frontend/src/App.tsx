import { useContext, useEffect} from 'react'
// import { Product } from './types';
// import { getProducts } from './services/mockeaProductsApi';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { ToBeDeveloped } from './pages/ToBeDeveloped';
import { NotFound } from './pages/NotFound';
import { ProductsContext } from './context/ProductsContext';
import { ProductsContextType } from './types';
// import { ProductsContext } from './context/ProductsContext';
// import { ProductsContextType } from './types';

function App() {
    const {fetchProducts} = useContext(ProductsContext) as ProductsContextType;

  const getData =  async () => {
    await fetchProducts();
  }

  useEffect(() => {
    // fetchProducts();
    // getData();
  }, [])
  {/* {products.map((product) => <p>{product.name}hi</p>)} */}

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
