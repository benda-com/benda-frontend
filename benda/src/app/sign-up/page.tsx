import { Metadata } from "next";
import Image from "next/image";

import BendaLogo from "../components/benda-logo";
import doctorImg from "../images/doctor-img.jpg";
import SignUpForm from "@/app/components/sign-up";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign Up Page",
};

export default function SignUpPage() {
  return (
    <main className="flex flex-row">
      <section className="hidden h-screen w-1/2 border md:block">
        {/* TODO: Change the image below to something more user-friendly */}
        <Image
          className="h-full "
          src={doctorImg}
          alt="A doctor forming a heart shape with her stestoscope"
        />
      </section>
      <section className="mt-10 flex w-full flex-col items-center space-y-10 md:w-1/2">
        <BendaLogo />
        <h1 className="text-4xl font-bold">Create account</h1>
        <SignUpForm />
      </section>
    </main>
  );
}
