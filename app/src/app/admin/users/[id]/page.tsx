"use client";

import { useEffect, useState } from "react";
import { getOneUser, updateOneUser } from "@/lib/user";

export default function UserPage({ params }: { params: { id: number } }) {
  const [id, setId] = useState(params.id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(id);
    console.log(name);
    console.log(email);
    updateOneUser(id, { name: name, email: email })
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getOneUser(params.id)
      .then((res) => {
        console.log(res);
        const { name, email } = res;
        setName(name);
        setEmail(email);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User detail</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            ID
          </label>
          <p className="p-2 border rounded bg-gray-200">{id}</p>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update User
        </button>
      </form>
    </div>
  );
}
