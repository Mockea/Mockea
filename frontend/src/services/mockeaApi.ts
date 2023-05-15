import { IProduct } from "../interfaces";


// use import.meta.env.VITE_API_SERVER_URL when you can

// const LocalProductUrl = "http://localhost:5046/api/Products/";
const ProductUrl = "https://mockea-backend.azurewebsites.net/api/Products";

export const getProducts = async () => {
  const response =  await fetch(ProductUrl);
  return await response.json() as IProduct[];
}
