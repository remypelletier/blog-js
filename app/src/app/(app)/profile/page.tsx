import { ProfileForm } from "@/components/ProfileForm";
import { getOneUser } from "@/lib/user";
import { cookies } from "next/headers";
import jwt_decode from "jwt-decode";

type UserToken = {
  email: string;
  sub: number;
  name: string;
  role: string;
  iat: number;
  exp: number;
};

export default async function page() {
  const cookieStore = cookies();
  const token = cookieStore.get("tokenTSJS");
  const decoded: UserToken = jwt_decode(String(token?.value));
  const user = await getOneUser(decoded.sub);
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="container mx-auto p-4">
        <ProfileForm {...user}></ProfileForm>
      </div>
    </div>
  );
}
