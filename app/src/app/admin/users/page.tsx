import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import { User } from "../../../../types";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const usersPromise: Promise<User[]> = getAllUsers();
  const users = await usersPromise;
  return (
    <section>
      <Link href="/">Back to home</Link>
      <h2>Users</h2>
      <ul>
        {users.map((user) => {
          return (
            <li>
              <p>
                <span>{user.name} </span>
                <span>{user.email} </span>
                <Link href={`users/${user.id}`}>User detail</Link>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
