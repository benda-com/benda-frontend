"use client";

import Link from "next/link";

import BendaLogo from "./benda-logo";
import { useState } from "react";

export default function Nav() {
  const [MenuIcon, setMenuIcon] = useState(false);

  return (
    <>
      <nav className="flex w-full items-center justify-between  border md:pl-10">
        <BendaLogo />
        <ul className="hidden space-x-10 pl-10 md:flex">
          <Link className="text-lg text-blue-primary" href="/">
            Home
          </Link>
          <Link className="text-lg text-blue-primary" href="/">
            Products
          </Link>
          <Link className="text-lg text-blue-primary" href="/pricing">
            Pricing
          </Link>
          <Link className="text-lg text-blue-primary" href="/about">
            About
          </Link>
        </ul>
        <span className="hidden space-x-10 pr-10 md:flex">
          <Link
            href="/login"
            className="rounded-3xl border bg-[#1C1678] px-10 py-2 text-white hover:bg-blue-800"
          >
            Log in
          </Link>
          <Link
            href="/sign-up"
            className="rounded-3xl border bg-blue-primary px-10 py-2 text-white hover:bg-blue-500"
          >
            Sign Up
          </Link>
        </span>
        <button
          className="md:hidden"
          onClick={() => setMenuIcon((prev) => !prev)}
        >
          {MenuIcon ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          )}
        </button>
      </nav>
      <div
        className={`long-text rollout-container ${MenuIcon ? "expanded" : ""}`}
      >
        <ul className="flex flex-col md:hidden">
          <Link className=" text-lg text-blue-primary" href="/">
            Home
          </Link>
          <Link className="text-lg text-blue-primary" href="/">
            Products
          </Link>
          <Link className="text-lg text-blue-primary" href="/pricing">
            Pricing
          </Link>
          <Link className="text-lg text-blue-primary" href="/about">
            About
          </Link>
          <Link
            href="/login"
            className="rounded-3xl border bg-[#1C1678] px-10 py-2 text-white hover:bg-blue-800"
          >
            Log in
          </Link>
          <Link
            href="/sign-up"
            className="rounded-3xl border bg-blue-primary px-10 py-2 text-white hover:bg-blue-500"
          >
            Sign Up
          </Link>
        </ul>
      </div>
    </>
  );
}
