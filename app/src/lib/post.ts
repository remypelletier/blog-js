const API_ENDPOINT = "http://localhost:3001/";

export const getAllArticles = async () => {
  const res = await fetch(`${API_ENDPOINT}post/`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export const getOneArticle = async (id: number) => {
  const res = await fetch(`${API_ENDPOINT}post/${id}`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};
