import Link from "next/link";
import Image from "next/image";

import { Avatar } from "./widgets";

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
