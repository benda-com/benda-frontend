import Image from "next/image";
import Link from "next/link";

import BendaLogo from "./benda-logo";

export const Footer = () => {
  return (
    <>
      <section className="flex flex-col-reverse items-center justify-evenly border-t-2 py-10 md:flex-row">
        <div className="flex flex-col space-y-3">
          <BendaLogo />
          <Link href="#">
            <Image
              src="https://benda-images.s3.eu-north-1.amazonaws.com/google-store.png"
              alt="Download on google-store"
              width={150}
              height={150}
            />
          </Link>
          <Link href="#">
            <Image
              src="https://benda-images.s3.eu-north-1.amazonaws.com/apple-store.png"
              alt="Download on apple-store"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div className="flex w-full flex-col  md:flex-row md:justify-evenly">
          <ul className="space-y-3 ">
            <li className="pb-2 text-lg font-bold">Social Media</li>
            <li>
              <Link className="hover:underline" href="#">
                Linkedin
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Facebook
              </Link>
            </li>
          </ul>
          <ul className="space-y-3 ">
            <li className="pb-2 text-lg font-bold">Pages</li>
            <li>
              <Link className="hover:underline" href="#">
                Products
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                About Us
              </Link>
            </li>
          </ul>
          <ul className="space-y-3 ">
            <li className="pb-2 text-lg font-bold">Links</li>
            <li>
              <Link className="hover:underline" href="#">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Careers
              </Link>
            </li>
          </ul>
          <form method="post" action="#" className="flex flex-col  space-y-3">
            <div className="pb-2 text-lg font-bold">Subscribe</div>
            <div>
              <input
                className="border bg-[#E0ECFD66] px-10 py-3"
                type="email"
                placeholder="Enter your email"
                required
              />
              <button className=" pl-3" type="submit">
                <i className="fa-solid fa-paper-plane "></i>
              </button>
            </div>
            <p className="hidden text-gray-500 md:block">
              Join our newsletter to stay up to date on features and releases
            </p>
          </form>
        </div>
      </section>
      <div className="place-self-center">
        © Benda 2025. All rights reserved • Privacy Policy
      </div>
    </>
  );
};
