import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Nav from "@/app/components/nav";
import "./globals.css";
import { Footer } from "./components/footer";
import { TestimonialCard } from "./components/cards";
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
        <div className="flex flex-col justify-evenly space-y-20  md:flex-row md:space-y-0">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </section>
      <section className="flex flex-col space-y-10  md:items-center">
        <h1 className="place-self-center py-5 text-2xl font-semibold md:text-4xl">
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
        <div className="flex flex-col justify-evenly  md:flex-row">
          <Link href="#">
            <Image
              src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/ey.png"
              alt="EY"
              width={200}
              height={200}
            />
          </Link>
          <Link href="#">
            <Image
              src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/orange.png"
              alt="EY"
              width={500}
              height={500}
            />
          </Link>
          <Link href="#">
            <Image
              className=" pt-11"
              src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/aws.png"
              alt="EY"
              width={200}
              height={200}
            />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
