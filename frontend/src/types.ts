import { IProduct } from "./interfaces";


export type ProductsContextType = {
  products: IProduct[],
  getProducts: () => void,
  getProduct: (id: number) => void
}
