import { IProduct } from "../interfaces";

export const getProductsFromApi = async () => {
  const response =  await fetch(`${import.meta.env.VITE_API_SERVER_URL}/Products`);

  if (response.status !== 200) {
    console.log(`Error: ${response.status}: ${response.statusText}.`)
  }

  console.log(await response.json());
  return (await response.json()) as IProduct[];
}

export const getProductFromApi = async (id: number) => {
  const response = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/Products/${id}`);
  return await response.json() as IProduct;
}

export const deleteProductFromApi = async (id: number) => {
  const response = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/Products/${id}`,
  {
    method: "DELETE",

  });
  return await response.json() as IProduct;
}
