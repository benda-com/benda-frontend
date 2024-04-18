import Link from "next/link";

import BendaLogo from "./benda-logo";

export default function Nav() {
  return (
    <nav className="flex w-full items-center border pl-10">
      <BendaLogo />
      <ul className="flex  space-x-4 pl-10">
        <Link href="/">Home</Link>
        <Link href="/">Products</Link>
        <Link href="/">Pricing</Link>
        <Link href="/login">Log in</Link>
        <Link href="/sign-up">Sign Up</Link>
      </ul>
    </nav>
  );
}
