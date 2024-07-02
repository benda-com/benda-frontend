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
              src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/google-store.png"
              alt="Download on google-store"
              width={150}
              height={150}
            />
          </Link>
          <Link href="#">
            <Image
              src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/apple-store.png"
              alt="Download on apple-store"
              width={150}
              height={150}
            />
          </Link>
        </div>
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
        <form method="post" action="#" className="space-y-3 ">
          <div className=" pb-2 text-lg font-bold">Subscribe</div>
          <input
            className="border bg-[#E0ECFD66] px-10 py-3"
            type="email"
            placeholder="Enter your email"
            required
          />
          <button className=" pl-3" type="submit">
            <i className="fa-solid fa-paper-plane "></i>
          </button>
          <p className=" text-gray-500">
            Join our newsletter to stay up to date on features and releases
          </p>
        </form>
      </section>
      {/* <div className="">
        © Benda 2023. All rights reserved • Privacy Policy
      </div> */}
    </>
  );
};
