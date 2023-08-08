
export const getCMSData = async () => {
  const response = await fetch("../../data.json");
  return await response.json();
}
