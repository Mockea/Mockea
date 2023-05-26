
export const getCMSData = async () => {
  const response = await fetch("frontend/src/data.json");
  return await response.json();
}