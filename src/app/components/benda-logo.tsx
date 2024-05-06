import Image from "next/image";
import Link from "next/link";

import bendaLogo from "../images/logo.png";

export default function BendaLogo({ width = 75, height = 75 }) {
  return (
    <Link href="/">
      <Image
        src={bendaLogo}
        alt="Logo of Benda"
        width={width}
        height={height}
      />
    </Link>
  );
}
