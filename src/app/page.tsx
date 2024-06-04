import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Nav from "@/app/components/nav";
import "./globals.css";
import { Footer } from "./components/footer";
import { TestimonialCard } from "./components/cards";
import aws from "@/app/images/aws.png";
import ey from "@/app/images/ey.png";
import orange from "@/app/images/orange.png";
import { Faq } from "./components/faq";
import { HeroBanner, WatchItem, AppItem } from "./components/hero";

export const metadata: Metadata = {
  title: "Home",
  description: "Benda website",
};

export default function Home() {
  return (
    <main className="flex flex-col space-y-20">
      <Nav />
      <HeroBanner />
      <h1 className="place-self-center py-5 text-4xl font-semibold">
        Discover our products
      </h1>
      <WatchItem />
      <AppItem />
      <section className="flex flex-col py-10">
        <h1 className="place-self-center py-5 text-4xl font-semibold">
          Testimonies
        </h1>
        <div className="flex flex-row  justify-evenly">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </section>
      <section className="flex flex-col items-center space-y-10">
        <h1 className="place-self-center py-5 text-4xl font-semibold">
          Frequently Ask Questions(FAQ)
        </h1>
        <Faq
          question={
            "How does the platform assist with virtual event planning ?"
          }
          answer={
            "The platform assis with virtual event planning customizable templates attendee registrations"
          }
        />
        <Faq
          question={
            "How does the platform assist with virtual event planning ?"
          }
          answer={
            "The platform assis with virtual event planning customizable templates attendee registrations"
          }
        />
        <Faq
          question={
            "How does the platform assist with virtual event planning ?"
          }
          answer={
            "The platform assis with virtual event planning customizable templates attendee registrations"
          }
        />
        <Faq
          question={
            "How does the platform assist with virtual event planning ?"
          }
          answer={
            "The platform assis with virtual event planning customizable templates attendee registrations"
          }
        />
      </section>
      <section className="flex flex-col">
        <h1 className="place-self-center py-5 text-4xl font-semibold">
          Powered By
        </h1>
        <div className="flex flex-row  justify-evenly">
          <Link href="#">
            <Image src={ey} alt="EY" />
          </Link>
          <Link href="#">
            <Image src={orange} alt="EY" />
          </Link>
          <Link href="#">
            <Image className=" pt-11" src={aws} alt="EY" />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
