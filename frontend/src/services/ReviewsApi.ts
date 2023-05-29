import { IReview } from "../interfaces";

export const getReviewsFromApi = async () => {
  const response =  await fetch(`${import.meta.env.VITE_API_SERVER_URL}/Reviews`);
  return await response.json() as IReview[];
}
