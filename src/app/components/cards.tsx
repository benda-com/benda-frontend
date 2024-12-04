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
    <div className="flex flex-col space-y-3 rounded-lg border border-gray-300 px-5 py-5 shadow-xl md:w-1/4">
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
    <section className="flex w-full flex-col items-center justify-around md:flex-row">
      <div className="flex flex-col space-y-5  md:w-1/3">
        <h2 className="text-center text-2xl text-blue-primary md:text-left">
          {props.heading}
        </h2>
        <p className="text-justify md:w-full">{props.description}</p>
      </div>
      <Image
        src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/image.png"
        alt=""
        width={350}
        height={350}
      />
    </section>
  );
};

export const InverseAboutCard = (props: {
  heading: string;
  description: string;
}) => {
  return (
    <section className="flex w-full flex-col items-center justify-around space-x-10  md:flex-row-reverse ">
      <div className="flex flex-col space-y-5 md:w-1/3">
        <h2 className="text-center text-2xl text-blue-primary md:text-left">
          {props.heading}
        </h2>
        <p className="text-justify md:w-full">{props.description}</p>
      </div>
      <Image
        src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/image.png"
        alt=""
        width={350}
        height={350}
      />
    </section>
  );
};

export const TeamMemberCard = () => {
  return (
    <div className="flex w-full flex-col space-x-10 md:flex-row  md:items-center md:justify-center">
      <Image
        className="rounded-lg border"
        src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/image.png"
        alt=""
        height={300}
        width={300}
      />
      <div className="place-self-start md:w-1/3">
        <p className="pb-2 text-2xl font-black">Emmanuel Sandjio</p>
        <p className="pb-7">Developer At Benda</p>
        <p className="text-justify">
          Emmanuel always had a fascination for technology, and becoming a
          developer was an opportunity not only to use new technologies to their
          full potential, but also to help people by developing innovative
          solutions. He is responsible of implementing the business logic in our
          backend. He likes playing video games and watching vlogs on YouTube.
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

export const PricingCard = ({ planType }) => {
  const planDetails = {
    basic: {
      title: "Bènda Basic Plan",
      price: "$0",
      description: "Basic features for up to 10 users",
      features: [
        "1 month free access to our app",
        "Basic support",
        "Up to 10 users",
        "Basic analytics",
        "Access to community forum",
      ],
      bgColor: "bg-white", // Set background color for basic
      buttonText: "Start for free",
      buttonTextColor: "text-white",
      buttonBgColor: "bg-blue-primary ",
      buttonHoverColor: "hover:bg-blue-500 ",
    },
    standard: {
      title: "Bènda Standard Plan",
      price: "$19",
      description: "Standard features for up to 50 users",
      features: [
        "3 months free access to our app",
        "Priority support",
        "Up to 50 users",
        "Advanced analytics",
        "Access to premium features",
      ],
      bgColor: "bg-white", // Set background color for standard
      buttonText: "Choose Standard",
      buttonTextColor: "text-white",
      buttonBgColor: "bg-blue-primary",
      buttonHoverColor: "hover:bg-blue-500 ",
    },
    premium: {
      title: "Bènda Premium Plan",
      price: "$49",
      description: "Premium features for unlimited users",
      features: [
        "6 months free access to our app",
        "24/7 support",
        "Unlimited users",
        "Premium analytics",
        "Access to all features",
      ],
      bgColor: "bg-[#0A2141]", // Set background color for premium
      buttonText: "Go Premium",
      buttonTextColor: "text-black",
      buttonBgColor: "bg-[#9DC6FF]",
      headlineTextColor: "text-blue-primary",
      textColor: "text-white",
      buttonHoverColor: "hover:bg-blue-200 ",
    },
  };

  // Select the appropriate plan based on the prop
  const plan = planDetails[planType] || planDetails.basic; // Default to basic if no planType is provided

  return (
    <div
      className={`flex flex-col items-center space-y-5 rounded-2xl border ${plan.bgColor} ${plan.textColor} px-5 py-5 shadow-lg`}
    >
      <h2 className={`text-3xl font-black text-blue-primary ${plan.textColor}`}>
        {plan.title}
      </h2>
      <div className="flex space-x-2">
        <span className="text-4xl font-semibold">{plan.price}</span>
        <span>per user per month</span>
      </div>
      <p>{plan.description}</p>
      <h3 className="text-lg font-semibold">Features</h3>
      <p>Included in our {plan.title}</p>
      <ul className="space-y-2">
        {plan.features.map((feature: any, index: any) => (
          <li key={index} className="space-x-2">
            <i className="fa-solid fa-check"></i>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        className={`rounded-lg border px-3 py-3  ${plan.buttonHoverColor} ${plan.buttonTextColor} ${plan.buttonBgColor} `}
        href=""
      >
        {plan.buttonText}
      </a>
    </div>
  );
};
