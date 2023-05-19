// import { IProduct } from "../interfaces";

import { ICategory } from "../interfaces";

export const getCategories = async () => {
  const response =  await fetch(`${import.meta.env.VITE_API_SERVER_URL}/Categories`);
  return await response.json() as ICategory[];
}
