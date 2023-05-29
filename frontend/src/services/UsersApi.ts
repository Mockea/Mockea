import { IUser } from "../interfaces";

export const getUsersFromApi = async () => {
  const response =  await fetch(`${import.meta.env.VITE_API_SERVER_URL}/Users`);
  return await response.json() as IUser[];
}

export const getuserFromApi = async (id: number) => {
  const response = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/Users/${id}`);
  return await response.json() as IUser;
}
