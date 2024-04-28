// This file is only to preview components during development and should not be sent to prodcution

import { Footer } from "./footer";
import Nav from "./nav";
import { TestimonialCard } from "@/app/components/cards";
import { Faq } from "./faq";
export default function ComponentsPage() {
  return (
    <main className="mt-10 flex justify-center   ">
      {/* <Nav></Nav>
      <Footer></Footer> */}
      {/* <TestimonialCard /> */}
      <Faq />
    </main>
  );
}
