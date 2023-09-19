// import Link from "next/link";
// import React from "react";

// export function AdminSideBar() {
//   return (
//     <div className="w-52 bg-gray-900 text-white h-full">
//       <ul className="space-y-2 p-4">
//         <li>
//           <Link
//             href={"/admin/projects"}
//             className="block p-2 rounded transition duration-300 ease-in-out hover:bg-gray-700"
//           >
//             Projects
//           </Link>
//         </li>
//         <li>
//           <Link
//             href={"/admin/posts"}
//             className="block p-2 rounded transition duration-300 ease-in-out hover:bg-gray-700"
//           >
//             Posts
//           </Link>
//         </li>
//         <li>
//           <Link
//             href={"/admin/tags"}
//             className="block p-2 rounded transition duration-300 ease-in-out hover:bg-gray-700"
//           >
//             Tags
//           </Link>
//         </li>
//         <li>
//           <Link
//             href={"/admin/users"}
//             className="block p-2 rounded transition duration-300 ease-in-out hover:bg-gray-700"
//           >
//             Users
//           </Link>
//         </li>
//         <li>
//           <Link
//             href={"/admin/comments"}
//             className="block p-2 rounded transition duration-300 ease-in-out hover:bg-gray-700"
//           >
//             Comments
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link"; // Assumant que vous utilisez Next.js pour le routing

export function AdminSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Bouton de basculement */}
      <button
        className="md:hidden p-4 bg-gray-900 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Barre latérale */}
      <div
        className={`w-52 bg-gray-900 text-white h-full transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <ul className="space-y-2 p-4">
          <li>
            <Link
              href={"/admin/projects"}
              className="block p-2 rounded transition duration-300 ease-in-out hover:bg-gray-700"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href={"/admin/posts"}
              className="block p-2 rounded transition duration-300 ease-in-out hover:bg-gray-700"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              href={"/admin/tags"}
              className="block p-2 rounded transition duration-300 ease-in-out hover:bg-gray-700"
            >
              Tags
            </Link>
          </li>
          <li>
            <Link
              href={"/admin/users"}
              className="block p-2 rounded transition duration-300 ease-in-out hover:bg-gray-700"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              href={"/admin/comments"}
              className="block p-2 rounded transition duration-300 ease-in-out hover:bg-gray-700"
            >
              Comments
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
