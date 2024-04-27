import { useRouter } from "next/navigation";

export const Button = (props: any) => {
  const router = useRouter();

  let name = props.name;
  let redirectLocation = props.redirectLocation;
  return (
    <button
      type="submit"
      className="my-8 rounded-lg border bg-blue-600 px-10 py-2 text-white hover:bg-blue-500"
      onClick={() => router.push(redirectLocation)}
    >
      {name}
    </button>
  );
};
