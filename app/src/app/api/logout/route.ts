import { cookies } from "next/headers";

export async function GET(request: Request) {
  cookies().delete(String(process.env.AUTH_COOKIE_NAME));
  return new Response(JSON.stringify({ response: "Success" }), {
    status: 200,
  });
}
