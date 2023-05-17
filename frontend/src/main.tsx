
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import './index.scss';
import { ProductsProvider } from './context/ProductsContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductsProvider>
    <App />
  </ProductsProvider>
)
