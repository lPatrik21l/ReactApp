export const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Could not fetch the data");
  }
  const data = await response.json();
  return data;
};
