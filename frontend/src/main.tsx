import ReactDOM from 'react-dom/client'
import './index.css';
// import { ProductsProvider } from './context/ProductsContext.tsx';
import App from './App';
import { CMSDataProvider } from './context/CMSDataProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <CMSDataProvider>
        <App />
    </CMSDataProvider>
)
