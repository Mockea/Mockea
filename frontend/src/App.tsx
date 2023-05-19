// import { useContext} from 'react'
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ToBeDeveloped } from './pages/ToBeDeveloped';
import { NotFound } from './pages/NotFound';
// import { ProductsContext } from './context/ProductsContext';
// import { ProductsContextType } from './types';

function App() {

  // const {products, fetchProducts} = useContext(ProductsContext) as ProductsContextType;

  // useEffect(() => {
  //   fetchProducts();
  // }, [])
  {/* {products.map((product) => <p>{product.name}hi</p>)} */}
  {console.log(import.meta.env.VITE_SOME_KEY)}

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
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
