import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type ReqBody = {
  email: string;
  password: string;
};

export async function POST(req: Request) {
  const { email, password }: ReqBody = await req.json();

  try {
    const fetchResult = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (fetchResult.status === 401) {
      return new Response(JSON.stringify({ response: "Unauthorized" }), {
        status: 400,
      });
    }
    const user = await fetchResult.json();
    cookies().set({
      name: String(process.env.AUTH_COOKIE_NAME),
      value: user.accessToken,
      httpOnly: true,
      path: "/",
    });
    return new Response(JSON.stringify({ response: "Success" }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ response: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
