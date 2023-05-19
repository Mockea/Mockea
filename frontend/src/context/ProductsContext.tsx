import React, { createContext, useState } from 'react'
import { getProductFromApi, getProductsFromApi } from '../services/ProductsApi';
import { IProduct } from '../interfaces';
// import { ProductsContextType } from '../types';


export const ProductsContext = createContext({});

type ProductsProviderProps = {
  children: React.ReactNode
}

export const ProductsProvider = ({children} : ProductsProviderProps) => {

  const [products, setProducts] = useState<IProduct[]>([]);


  const fetchProducts = async () => {
    const products = await getProductsFromApi();
    console.log(products);
    setProducts(products);
  }

  const getProduct = async (id:number ) => {
    const product = await getProductFromApi(id);
    return product as IProduct;
  }



  return (
    <ProductsContext.Provider value={{products, fetchProducts, getProduct}}>
      {children}
    </ProductsContext.Provider>
  )
}
