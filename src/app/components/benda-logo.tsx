import Image from "next/image";
import Link from "next/link";

import bendaLogo from "../images/logo.png";

export default function BendaLogo() {
  return (
    <Link href="/">
      <Image src={bendaLogo} alt="Logo of Benda" width={200} height={200} />
    </Link>
  );
}
