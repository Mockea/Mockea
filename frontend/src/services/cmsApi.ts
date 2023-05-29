
export const getCMSData = async () => {
  const response = await fetch("../../public/data.json");
  return await response.json();
}
