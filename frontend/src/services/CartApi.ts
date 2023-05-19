import { ICart, ICategory } from "../interfaces";

export const getCartFromApi = async (id: number) => {
  const response =  await fetch(`${import.meta.env.VITE_API_SERVER_URL}/Carts/${id}`);
  return await response.json() as ICart[];
}
