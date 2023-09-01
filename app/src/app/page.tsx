"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);
  const handleClick = () => {
    axios
      .get("http://localhost:3001/user/")
      .then((result: any) => {
        setUsers(result.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/auth">Se connecter</Link>
      <button onClick={handleClick}>Get users</button>
      {users
        ? users.map((user) => {
            const { id, email, name } = user;
            return (
              <ul key={id}>
                <li>{id}</li>
                <li>{email}</li>
                <li>{name}</li>
              </ul>
            );
          })
        : "No users"}
    </main>
  );
}
