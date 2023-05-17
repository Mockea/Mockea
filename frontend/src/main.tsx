
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import './index.scss';
import { ProductsContext } from './context/ProductsContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductsContext.Provider value={[]}>
    <App />
  </ProductsContext.Provider>
)
