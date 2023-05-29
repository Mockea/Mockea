import { Product } from "../types";

export const getProducts = async () => {
  const response =  await fetch(`${import.meta.env.VITE_API_SERVER_URL}/Products`);
  return await response.json() as Product[];
}
