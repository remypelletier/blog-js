import { ProfileForm } from "@/components/ProfileForm";
import { getOneUser } from "@/lib/user";
import { getUserJwtInfo } from "@/lib/auth";
import { UserToken } from "@/lib/auth";

export default async function page() {
  const tokenInfo: UserToken = getUserJwtInfo();
  const user = await getOneUser(tokenInfo.sub);
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="container mx-auto p-4">
        <ProfileForm {...user}></ProfileForm>
      </div>
    </div>
  );
}
