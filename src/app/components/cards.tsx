"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { Avatar } from "./widgets";
import meAvartar from "@/app/images/image.png";

export const TestimonialCard = (props: any) => {
  let name = props.name;
  let description = props.description;
  description = `"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure perferendis facilis laudantium quis voluptates earum sapiente nam corporis numquam explicabo odio, ea, tenetur nequ"`;

  name = "Emmanuel Sandjio";
  let role = props.role;
  role = "Python developer";
  return (
    <div className="flex w-1/4 flex-col space-y-3 rounded-lg border border-gray-300 px-5 py-5 shadow-xl">
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
      <Image src={meAvartar} alt="" />
    </section>
  );
};

export const InverseAboutCard = (props: {
  heading: string;
  description: string;
}) => {
  return (
    <section className="flex w-1/2 flex-row items-center space-x-10">
      <Image src={meAvartar} alt="" />
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
        src={meAvartar}
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
