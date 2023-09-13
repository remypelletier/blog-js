import { cookies } from "next/headers";
import jwt_decode from "jwt-decode";

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

export type UserToken = {
  email: string;
  sub: number;
  name: string;
  role: string;
  iat: number;
  exp: number;
};

export const getUserJwtInfo = (): UserToken => {
  const cookieStore = cookies();
  const token = cookieStore.get("tokenTSJS");
  return decodeUserJwt(String(token?.value));
};

export const decodeUserJwt = (token: string) => {
  const decoded: UserToken = jwt_decode(token);
  return decoded;
};
