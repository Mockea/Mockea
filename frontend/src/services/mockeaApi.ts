import { IProduct } from "../interfaces";

const ProductURL = "http://localhost:5046/api/Products/"

export const getProducts = async () => {
  const response =  await fetch(ProductURL);
  return await response.json() as IProduct[];
}
