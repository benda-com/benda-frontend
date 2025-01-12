import Image from "next/image";
import Link from "next/link";

export default function BendaLogo() {
  return (
    <Link href="/">
      <Image
        src="https://benda-images.s3.eu-north-1.amazonaws.com/logo.png"
        alt="Logo of Benda"
        width="200"
        height="200"
      />
    </Link>
  );
}
