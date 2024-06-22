import Image from "next/image";
import Link from "next/link";

export default function BendaLogo() {
  return (
    <Link href="/">
      <Image
        src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/logo.png"
        alt="Logo of Benda"
        width="200"
        height="200"
      />
    </Link>
  );
}
