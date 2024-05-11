import Image from "next/image";

import img from "@/app/images/image.png";

export const Button = (props: any) => {
  let name = props.name;
  return (
    <button
      type="submit"
      className="my-8 rounded-lg border bg-blue-600 px-10 py-2 text-white hover:bg-blue-500"
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
