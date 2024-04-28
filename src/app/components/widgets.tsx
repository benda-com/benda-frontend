import Image from "next/image";
import { useRouter } from "next/navigation";

import img from "@/app/images/image.png";

export const Button = (props: any) => {
  const router = useRouter();

  let name = props.name;
  let redirectLocation = props.redirectLocation;
  return (
    <button
      type="submit"
      className="my-8 rounded-lg border bg-blue-600 px-10 py-2 text-white hover:bg-blue-500"
      onSubmit={() => router.push(redirectLocation)}
    >
      {name}
    </button>
  );
};

export const Avatar = () => {
  return (
    <>
      <Image
        className="rounded-full "
        src={img}
        alt="Avatar"
        width={100}
        height={100}
      />
    </>
  );
};
