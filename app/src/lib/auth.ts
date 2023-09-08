const API_ENDPOINT = "http://localhost:3001/";

type credentials = {
  email: string;
  password: string;
};

export const login = async (credentials: credentials) => {
  const { email, password } = credentials;
  const res = await fetch(`${API_ENDPOINT}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};
