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

type UserUpdate = {
  name: String;
  email: String;
};

export const updateOneUser = async (
  id: number,
  { name, email }: UserUpdate
) => {
  const res = await fetch(`${API_ENDPOINT}user/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      name: name,
      email: email,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};
