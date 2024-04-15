import { Metadata } from "next";

import LoginForm from "../components/login-form";
import BendaLogo from "../components/benda-logo";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main className="flex w-full flex-col items-center justify-center py-5">
      <BendaLogo />

      <h1 className="pb-10 pt-20 text-2xl font-bold">Log in</h1>
      <section className="">
        <LoginForm />
      </section>
    </main>
  );
}
