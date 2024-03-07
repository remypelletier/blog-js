"use client";

import { getAllUsers, getUserNumber } from "@/lib/user";
import { User } from "@/types";
import Link from "next/link";
import Modal from "@/components/Modal";
import { AddEntry } from "@/components/AddEntry";
import { uid } from "uid";
import { DeleteBtn } from "@/components/DeleteBtn";
import useSWR, { mutate } from "swr";
import { useEffect, useState } from "react";
import { table } from "console";

function useUsers(page: number) {
  const { data, error, isLoading, mutate } = useSWR(`/users?page${page}`, () =>
    getAllUsers(page)
  );

  return {
    users: data,
    isLoading,
    isError: error,
    mutate: mutate,
  };
}

function useUsersNumber() {
  const [userNumber, setUserNumber] = useState(0);
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    const getUserNumberAsync = async () => {
      const res = await getUserNumber();
      const paginationNumber = Math.ceil(res._count.id / 10);
      const arr = [];
      for (let i = 1; i <= paginationNumber; i++) {
        arr.push(i);
      }
      setPagination(arr);
    };
    getUserNumberAsync();
  }, []);

  return { userNumber, pagination };
}

export default function UsersPage() {
  const { userNumber, pagination } = useUsersNumber();
  const [page, setPage] = useState(1);
  const { users, isLoading, isError, mutate } = useUsers(page);

  if (isError) return <div>échec du chargement</div>;
  if (isLoading) return <div>chargement...</div>;

  const handleDelete = (id: number) => {
    mutate([...users.filter((user: any) => user.id !== id)]);
  };

  const tableData = {
    head: ["#", "id", "Name", "Email", "Actions"],
    body: users.map((user: any, index: number) => {
      return [
        user.id,
        user.name,
        user.email,
        <Link href={`users/${user.id}`}>Detail</Link>,
        <DeleteBtn id={user.id} handleDelete={handleDelete} />,
      ];
    }),
  };

  return (
    <div>
      <div className="flex">
        <h1 className="text-2xl font-bold mb-4 mr-4">Users</h1>
        <Modal />
      </div>
      <Table data={tableData}></Table>
      <div className="flex">
        <button
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
          className="mr-3"
        >{`< back`}</button>
        {pagination.map((pagi, index) => {
          let styleString = "";
          if (page === index + 1) styleString += " bg-blue-500";
          return (
            <button
              onClick={() => setPage(pagi)}
              className={`px-2 m-2 border-2 ${styleString}`}
            >
              {pagi}
            </button>
          );
        })}
        <button
          onClick={async () => {
            setPage(page + 1);
          }}
          className="ml-3"
        >{`foreward >`}</button>
      </div>
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
