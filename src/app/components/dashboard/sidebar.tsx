import Link from "next/link";
import { NavLinks } from "./nav-links";

import Image from "next/image";

export const Sidebar = () => {
  return (
    <aside className="flex h-dvh w-[15rem] flex-col items-center space-y-20 border">
      <Image
        className="pt-5"
        src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/logo.png"
        alt="Logo of Benda"
        width="150"
        height="150"
      />
      <ul className="flex w-full flex-col  justify-center space-y-3">
        <NavLinks />
      </ul>
    </aside>
  );
};
