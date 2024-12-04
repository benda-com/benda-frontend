"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import BendaLogo from "./benda-logo";
// import "../globals.css";

export default function Nav() {
  const [MenuIcon, setMenuIcon] = useState(false);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`sticky top-0 z-50 flex w-full transform items-center justify-between border bg-white shadow-lg transition-transform duration-500 ease-in-out md:pl-10 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <BendaLogo />
        <ul className="hidden space-x-10 pl-10 md:flex">
          <Link className="text-lg text-blue-primary hover:underline" href="/">
            Home
          </Link>
          <Link className="text-lg text-blue-primary hover:underline" href="/">
            Products
          </Link>
          <Link
            className="text-lg text-blue-primary hover:underline"
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-lg text-blue-primary hover:underline"
            href="/about"
          >
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
        className={`long-text rollout-container sticky top-[60px] z-20 transform  bg-white transition-transform duration-500 ease-in-out ${MenuIcon && isVisible ? "expanded  translate-y-0" : "-translate-y-full"}`}
      >
        <ul className="flex flex-col items-center md:hidden">
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
