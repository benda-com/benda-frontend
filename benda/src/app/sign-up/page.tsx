import { Metadata } from "next";
import Image from "next/image";

import BendaLogo from "../components/benda-logo";
import doctorImg from "../images/doctor-img.jpg";
import SignUpForm from "@/app/components/sign-up";

export const metadata: Metadata = {
  title: "Sig up",
  description: "Sign Up Page",
};

export default function SignUpPage() {
  return (
    <main className="flex flex-row">
      <section className="h-screen w-1/2 border">
        <Image
          className="h-full "
          src={doctorImg}
          alt="A doctor forming a heart shape with her stestoscope"
        />
      </section>
      <section className="flex w-1/2 flex-col">
        <BendaLogo />
        <h1>Create account</h1>
        <SignUpForm />
      </section>
    </main>
  );
}
