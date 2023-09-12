import { useSession } from "next-auth/react";
import Link from "next/link";

export const SignInButton = () => {
  const { data: session } = useSession();
  if (session && session.user)
    return (
      <div>
        <p>{session.user.name}</p>
        <Link href={"/api/auth/signout"}>Sign out</Link>
      </div>
    );

  return (
    <div>
      <Link href={"/api/auth/signin"}>Sign In</Link>
      <Link href={"/signup"}>Sign Up</Link>
    </div>
  );
};
