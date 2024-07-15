"use client";

import {
  UserGroupIcon,
  HomeIcon,
  ChatBubbleBottomCenterIcon,
  UsersIcon,
  PencilIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const NavLinks = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/dashboard", icon: HomeIcon },
    {
      name: "Patients",
      href: "/dashboard/patients",
      icon: UserGroupIcon,
    },
    {
      name: "Messages",
      href: "/dashboard/messages",
      icon: ChatBubbleBottomCenterIcon,
    },
    {
      name: "Appointment",
      href: "/dashboard/appointment",
      icon: UsersIcon,
    },
    {
      name: "Todos",
      href: "/dashboard/todo",
      icon: PencilIcon,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: CogIcon,
    },
  ];
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex w-full justify-between px-10 py-2 hover:bg-blue-100",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="text-xl text-blue-600 md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};
