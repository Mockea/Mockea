import { IProduct } from "./interfaces";


export type ProductsContextType = {
  products: IProduct[],
  fetchProducts: () => void,
  getProduct: (id: number) => IProduct
}
