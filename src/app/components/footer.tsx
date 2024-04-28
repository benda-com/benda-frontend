import Image from "next/image";
import Link from "next/link";

import BendaLogo from "./benda-logo";
import googleStore from "../images/google-store.png";
import appleStore from "@/app/images/apple-store.png";

export const Footer = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly">
        <div className="">
          <BendaLogo width={25} height={50} />
          <Link href="#">
            <Image
              src={googleStore}
              alt="Download on google-store"
              width={150}
              height={150}
            />
          </Link>
          <Link href="#">
            <Image
              src={appleStore}
              alt="Download on apple-store"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <ul className="space-y-3 ">
          <li className="pb-2 text-lg font-bold">Social Media</li>
          <li>
            <Link href="#">Linkedin</Link>
          </li>
          <li>
            <Link href="#">Facebook</Link>
          </li>
        </ul>
        <ul className="space-y-3 ">
          <li className="pb-2 text-lg font-bold">Pages</li>
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">About Us</Link>
          </li>
        </ul>
        <ul className="space-y-3 ">
          <li className="pb-2 text-lg font-bold">Links</li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>
            <Link href="#">Careers</Link>
          </li>
        </ul>
        <div className="space-y-3 ">
          <div className=" pb-2 text-lg font-bold">Subscribe</div>
          <input
            className="border bg-[#E0ECFD66] px-10 py-3"
            type="email"
            placeholder="Enter your email"
          />
          <p className=" text-gray-500">
            Join our newsletter to stay up to date on features and releases
          </p>
        </div>
      </div>
      {/* <div className="">
        © Benda 2023. All rights reserved • Privacy Policy
      </div> */}
    </>
  );
};
