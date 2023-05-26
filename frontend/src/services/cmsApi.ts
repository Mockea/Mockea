
export const getCMSData = async () => {
  const response = await fetch("src/services/data.json");
  return await response.json();
}
