import Link from "next/link";

import BendaLogo from "./benda-logo";

export default function Nav() {
  return (
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
    </nav>
  );
}
