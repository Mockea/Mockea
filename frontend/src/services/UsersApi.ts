import { ICategory, IUser } from "../interfaces";

export const getUsers = async () => {
  const response =  await fetch(`${import.meta.env.VITE_API_SERVER_URL}/Users`);
  return await response.json() as IUser[];
}
