import Image from "next/image";
import { StaticImageData } from "next/image";

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

interface AvatarProps {
  imgSrc: StaticImageData | string; // Can be either imported image or a string URL
}

export const Avatar: React.FC<AvatarProps> = ({ imgSrc }) => {
  return (
    <>
      <Image
        className="rounded-full "
        src={imgSrc}
        alt="Avatar"
        width={100}
        height={100}
      />
    </>
  );
};
