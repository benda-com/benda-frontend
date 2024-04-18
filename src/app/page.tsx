import type { Metadata } from "next";
import "./globals.css";

import Nav from "@/app/components/nav";

export const metadata: Metadata = {
  title: "Home",
  description: "Benda website",
};

export default function Home() {
  return (
    <main>
      <Nav />
      <h1>Home page</h1>
    </main>
  );
}
