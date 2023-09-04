const API_ENDPOINT = "http://localhost:3001/";

export const getAllProjects = async () => {
  const res = await fetch(`${API_ENDPOINT}project/`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getOneProject = async (id: number) => {
  const res = await fetch(`${API_ENDPOINT}project/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
