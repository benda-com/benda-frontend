import Image from "next/image";

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
        src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/image.png"
        alt="Avatar"
        width={100}
        height={100}
      />
    </>
  );
};
