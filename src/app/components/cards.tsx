"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { Avatar } from "./widgets";

export const TestimonialCard = (props: any) => {
  let name = props.name;
  let description = props.description;
  let image = props.image;
  return (
    <div className="flex flex-col space-y-3 rounded-lg border border-gray-300 px-5 py-5 shadow-xl md:w-1/4">
      <p className="text-justify text-base italic ">{description}</p>
      <Avatar imgSrc={image} />
      <div className="text-lg font-bold">{name}</div>
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

export const AboutCard = (props: {
  heading: string;
  description: string;
  img: string | StaticImageData;
}) => {
  return (
    <section className="flex w-full flex-col items-center justify-around md:flex-row">
      <div className="flex flex-col space-y-5  md:w-1/3">
        <h2 className="text-center text-2xl text-blue-primary md:text-left">
          {props.heading}
        </h2>
        <p className="mx-3 text-justify md:w-full">{props.description}</p>
      </div>
      <Image src={props.img} alt="" width={700} height={700} />
    </section>
  );
};

export const InverseAboutCard = (props: {
  heading: string;
  description: string;
  img: string | StaticImageData;
}) => {
  return (
    <section className="flex flex-col items-center space-x-10 overflow-hidden md:w-full md:flex-row-reverse  md:justify-around ">
      <div className="flex flex-col space-y-5 md:w-1/3">
        <h2 className="text-center text-2xl text-blue-primary md:text-left">
          {props.heading}
        </h2>
        <p className="mx-3 text-justify md:w-full">{props.description}</p>
      </div>
      <Image src={props.img} alt="" width={700} height={700} />
    </section>
  );
};

interface TeamMemberCardProps {
  img: string | StaticImageData;
  name: string;
  role: string;
  description: string;
  linkedinName: string;
  githubName: string;
  linkedinAccountLink: string;
  githubAccountLink: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  img,
  name,
  role,
  description,
  linkedinName,
  githubName,
  linkedinAccountLink,
  githubAccountLink,
}) => {
  return (
    <div className="flex w-full flex-col items-center justify-center  space-x-10 md:flex-row">
      <Image
        className="rounded-lg border"
        src={img}
        alt={`${name}'s picture`}
        height={300}
        width={300}
      />
      <div className="place-self-start md:w-1/3">
        <p className="pb-2 text-2xl font-black">{name}</p>
        <p className="pb-7">{role}</p>
        <p className="text-justify">{description}</p>
        <div className="mt-10  space-x-10">
          <a className="space-x-2" href={linkedinAccountLink}>
            <i className="fa-brands fa-linkedin"></i>
            <span>{linkedinName}</span>
          </a>
          <a className="space-x-2" href={githubAccountLink}>
            <i className="fa-brands fa-github"></i>
            <span>{githubName}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

type PlanType = "basic" | "standard" | "premium";

interface PlanDetails {
  title: string;
  price: string;
  description: string;
  features: string[];
  bgColor: string;
  buttonText: string;
  buttonTextColor: string;
  buttonBgColor: string;
  buttonHoverColor: string;
  textColor?: string;
  headlineTextColor?: string;
}

interface PricingCardProps {
  planType: PlanType;
}

const planDetails: Record<PlanType, PlanDetails> = {
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
    bgColor: "bg-white",
    buttonText: "Start for free",
    buttonTextColor: "text-white",
    buttonBgColor: "bg-blue-primary",
    buttonHoverColor: "hover:bg-blue-500",
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
    bgColor: "bg-white",
    buttonText: "Choose Standard",
    buttonTextColor: "text-white",
    buttonBgColor: "bg-blue-primary",
    buttonHoverColor: "hover:bg-blue-500",
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
    bgColor: "bg-[#0A2141]",
    buttonText: "Go Premium",
    buttonTextColor: "text-black",
    buttonBgColor: "bg-[#9DC6FF]",
    headlineTextColor: "text-blue-primary",
    textColor: "text-white",
    buttonHoverColor: "hover:bg-blue-200",
  },
};

export const PricingCard = ({ planType }: PricingCardProps) => {
  const plan = planDetails[planType];

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
        {plan.features.map((feature, index) => (
          <li key={index} className="space-x-2">
            <i className="fa-solid fa-check"></i>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        className={`rounded-lg border px-3 py-3  ${plan.buttonHoverColor} ${plan.buttonTextColor} ${plan.buttonBgColor}`}
        href=""
      >
        {plan.buttonText}
      </a>
    </div>
  );
};
