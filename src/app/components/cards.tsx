"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { Avatar } from "./widgets";

export const TestimonialCard = (props: any) => {
  let name = props.name;
  let description = props.description;
  description = `"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure perferendis facilis laudantium quis voluptates earum sapiente nam corporis numquam explicabo odio, ea, tenetur nequ"`;

  name = "Emmanuel Sandjio";
  let role = props.role;
  role = "Python developer";
  return (
    <div className="flex w-[32rem] flex-col space-y-3 rounded-lg border border-gray-300 px-5 py-5 shadow-xl md:w-1/4">
      <p className="text-lg">{description}</p>
      <Avatar />
      <div className="text-lg font-bold">{name}</div>
      <div className="text-sm">{role}</div>
      <ul className=" flex flex-row space-x-3 place-self-end">
        <li>
          <Link href="#">
            <i className="fa-brands fa-x-twitter"></i>
          </Link>
        </li>
        <li>
          <Link href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export const AboutCard = (props: { heading: string; description: string }) => {
  return (
    <section className="flex w-1/2 flex-row items-center space-x-10">
      <div className="flex w-1/3 flex-col space-y-5">
        <h2 className="text-2xl text-blue-primary">{props.heading}</h2>
        <p>{props.description}</p>
      </div>
      <Image
        src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/image.png"
        alt=""
      />
    </section>
  );
};

export const InverseAboutCard = (props: {
  heading: string;
  description: string;
}) => {
  return (
    <section className="flex w-1/2 flex-row items-center space-x-10">
      <Image
        src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/image.png"
        alt=""
      />
      <div className="flex w-1/3 flex-col space-y-5">
        <h2 className="text-2xl text-blue-primary">{props.heading}</h2>
        <p>{props.description}</p>
      </div>
    </section>
  );
};

export const TeamMemberCard = () => {
  return (
    <div className="flex w-1/2 flex-row items-center space-x-10">
      <Image
        className="rounded-lg border"
        src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/image.png"
        alt=""
        height={300}
        width={300}
      />
      <div className="w-1/2  place-self-start">
        <p className="pb-2 text-2xl font-black">Emmanuel Sandjio</p>
        <p className="pb-7">Developer At Benda</p>
        <p>
          Emmanuel always had a fascination for technology, and becoming a
          developer was an opportunity not only to use new technologies to their
          full potential, but also to help people by developing innovative
          solutions. He is responsible of implementing the business logic in our
          backend. He likes playing video games and watching vlogs on youtube.
        </p>
        <div className="mt-10  space-x-10">
          <a className="space-x-2" href="">
            <i className="fa-brands fa-linkedin"></i>
            <span>Emmanuel_Sandjio</span>
          </a>
          <a className="space-x-2" href="">
            <i className="fa-brands fa-github"></i>
            <span>Sandjio</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const PricingCard = () => {
  return (
    <div className="flex flex-col items-center space-y-5 rounded-2xl border bg-white px-5 py-5 shadow-lg">
      <h2 className="text-3xl font-black text-blue-primary">Bènda Basic</h2>
      <div className="flex space-x-2">
        <span className="text-4xl font-semibold">$0</span>
        <span>per user per month</span>
      </div>
      <p>Basic features for up to 10 users</p>
      <h3 className="text-lg font-semibold">Features</h3>
      <p>Included in our Benda Basic Plan</p>
      <ul className="space-y-2">
        <li className="space-x-2">
          <i className="fa-solid fa-check"></i>
          <span>1 month free access to our app</span>
        </li>
        <li className="space-x-2">
          <i className="fa-solid fa-check"></i>
          <span>1 month free access to our app</span>
        </li>
        <li className="space-x-2">
          <i className="fa-solid fa-check"></i>
          <span>1 month free access to our app</span>
        </li>
        <li className="space-x-2">
          <i className="fa-solid fa-check"></i>
          <span>1 month free access to our app</span>
        </li>
        <li className="space-x-2">
          <i className="fa-solid fa-check"></i>
          <span>1 month free access to our app</span>
        </li>
      </ul>
      <a
        className="rounded-lg border bg-blue-primary px-3 py-3 text-white hover:bg-blue-500"
        href=""
      >
        Start for free
      </a>
    </div>
  );
};

export const PricingCardBlack = () => {
  return (
    <div className="flex flex-col items-center space-y-5 rounded-2xl  bg-[#0A2141] px-5 py-5 text-white shadow-xl shadow-[#a7c3e9]">
      <h2 className="text-3xl font-black text-[#9DC6FF]">Bènda Basic</h2>
      <div className="flex space-x-2">
        <span className="text-4xl font-semibold">$25</span>
        <span>per user per month</span>
      </div>
      <p>Basic features for up to 10 users</p>
      <h3 className="text-lg font-semibold">Features</h3>
      <p>Included in our Benda Basic Plan</p>
      <ul className="space-y-2">
        <li className="space-x-2">
          <i className="fa-solid fa-check"></i>
          <span>1 month free access to our app</span>
        </li>
        <li className="space-x-2">
          <i className="fa-solid fa-check"></i>
          <span>1 month free access to our app</span>
        </li>
        <li className="space-x-2">
          <i className="fa-solid fa-check"></i>
          <span>1 month free access to our app</span>
        </li>
        <li className="space-x-2">
          <i className="fa-solid fa-check"></i>
          <span>1 month free access to our app</span>
        </li>
        <li className="space-x-2">
          <i className="fa-solid fa-check"></i>
          <span>1 month free access to our app</span>
        </li>
      </ul>
      <a
        className="rounded-lg  bg-[#9DC6FF] px-3 py-3 text-black hover:bg-blue-200"
        href=""
      >
        Start for free
      </a>
    </div>
  );
};
