"use client";

import Link from "next/link";
import { SignInButton } from "./SignInButton";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-0 left-0 fixed w-full bg-white p-4 shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-grey font-bold">Rémy Pelletier</div>
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link href="/" className="text-grey">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-grey">
                Projets
              </Link>
            </li>
            <li>
              <Link href="/articles" className="text-grey">
                Articles
              </Link>
            </li>
          </ul>
          <Link href="/login" className="hidden md:flex text-grey">
            Login
          </Link>
          {/* Bouton hamburger */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-grey"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Menu pour les petits écrans */}
        {isOpen && (
          <ul className="md:hidden mt-4 space-y-2">
            <li>
              <Link href="/" className="block text-grey">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/projects" className="block text-grey">
                Projets
              </Link>
            </li>
            <li>
              <Link href="/articles" className="block text-grey">
                Articles
              </Link>
            </li>
            <li>
              <Link href="/login" className="block text-grey">
                Login
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
