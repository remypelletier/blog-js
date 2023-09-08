const API_ENDPOINT = "http://localhost:3001/";

export const getAllUsers = async () => {
  const res = await fetch(`${API_ENDPOINT}user/`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

export const getOneUser = async (id: number) => {
  const res = await fetch(`${API_ENDPOINT}user/${id}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};
