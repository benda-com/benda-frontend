import Link from "next/link";

import BendaLogo from "./benda-logo";

export default function Nav() {
  return (
    <nav className="flex w-full items-center justify-between  border pl-10">
      <BendaLogo />
      <ul className="flex space-x-10 pl-10">
        <Link className="text-blue-primary text-lg" href="/">
          Home
        </Link>
        <Link className="text-blue-primary text-lg" href="/">
          Products
        </Link>
        <Link className="text-blue-primary text-lg" href="/">
          Pricing
        </Link>
        <Link className="text-blue-primary text-lg" href="/about">
          About
        </Link>
      </ul>
      <span className="space-x-10 pr-10">
        <Link
          href="/login"
          className="rounded-3xl border bg-[#1C1678] px-10 py-2 text-white hover:bg-blue-800"
        >
          Log in
        </Link>
        <Link
          href="/sign-up"
          className="bg-blue-primary rounded-3xl border px-10 py-2 text-white hover:bg-blue-500"
        >
          Sign Up
        </Link>
      </span>
    </nav>
  );
}
