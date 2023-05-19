import { ICategory, IReview } from "../interfaces";

export const getReviews = async () => {
  const response =  await fetch(`${import.meta.env.VITE_API_SERVER_URL}/Reviews`);
  return await response.json() as IReview[];
}
