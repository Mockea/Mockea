import React, { createContext, useEffect, useState } from 'react'
import { getProductFromApi, getProductsFromApi } from '../services/ProductsApi';
import { IProduct } from '../interfaces';

export const ProductsContext = createContext({});

type ProductsProviderProps = {
  children: React.ReactNode
}

export const ProductsProvider = ({children} : ProductsProviderProps) => {

  const [products, setProducts] = useState<IProduct[]>([]);


  const getProducts = async () => {
    const Products = await getProductsFromApi();
    setProducts(Products);
    return Products as IProduct[];
  }

  const getProduct = async (id:number ) => {
    const Product = await getProductFromApi(id);
    return Product as IProduct;
  }

  // const getData =  async () => {
  //   return setProducts(await getProductsFromApi());
  // }

  // useEffect(() => {
  //   getData();
  // }, [])



  return (
    <ProductsContext.Provider value={{products, getProducts, getProduct}}>
      {children}
    </ProductsContext.Provider>
  )
}
