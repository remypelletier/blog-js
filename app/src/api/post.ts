const API_ENDPOINT = "http://localhost:3001/";

export const getAllPosts = async () => {
  const res = await fetch(`${API_ENDPOINT}post`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};
