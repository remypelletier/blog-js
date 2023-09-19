"use client";

import { getAllUsers } from "@/lib/user";
import { User } from "@/types";
import Link from "next/link";
import Modal from "@/components/Modal";
import { AddEntry } from "@/components/AddEntry";
import { uid } from "uid";
import { DeleteBtn } from "@/components/DeleteBtn";
import useSWR from "swr";

function useUsers() {
  const { data, error, isLoading } = useSWR(`/users/`, getAllUsers);

  return {
    users: data,
    isLoading,
    isError: error,
  };
}

export default function UsersPage() {
  const { users, isLoading, isError } = useUsers();

  if (isError) return <div>échec du chargement</div>;
  if (isLoading) return <div>chargement...</div>;

  const tableData = {
    head: ["#", "Name", "Email", "Actions"],
    body: users.map((user: any) => {
      return [
        user.id,
        user.name,
        user.email,
        <Link href={`users/${user.id}`}>Detail</Link>,
        <DeleteBtn id={user.id} />,
      ];
    }),
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <Table data={tableData}></Table>
      <Modal />
    </div>
  );
}

const Table = ({ data }: any) => {
  return (
    <table className="table-auto border-collapse w-full shadow-lg bg-white rounded-lg overflow-hidden mb-2">
      <thead className="bg-gray-200">
        <tr>
          {data.head.map((data: any) => {
            return data === "Actions" ? (
              <th
                key={uid(16)}
                colSpan={2}
                className="border border-gray-300 p-4 text-left text-gray-600 font-medium"
              >
                {data}
              </th>
            ) : (
              <th className="border border-gray-300 p-4 text-left text-gray-600 font-medium">
                {data}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.body.map((row: any, rowIndex: number) => {
          return (
            <tr key={row.id} className={rowIndex % 2 === 0 ? "bg-gray-50" : ""}>
              {row.map((data: any) => {
                return (
                  <td className="border border-gray-300 p-4 text-gray-700">
                    {data}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
