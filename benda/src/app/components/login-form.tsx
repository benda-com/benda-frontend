import Link from "next/link";

export default function LoginForm() {
  return (
    <form className="" action="" method="post">
      <div className="grid w-auto flex-col justify-items-start ">
        <span className="space-x-12  space-y-6">
          <label className="font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-sm border py-1"
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </span>
        <span className="space-x-6 space-y-6">
          <label className="font-medium" htmlFor="passowrd">
            Password
          </label>
          <input
            className="rounded-sm border py-1"
            type="password"
            name="password"
            placeholder="Enter password"
          />
        </span>
      </div>
      <div className="grid w-auto flex-col justify-items-center ">
        <button
          className="my-5 w-20 justify-items-center rounded-lg border bg-blue-600 py-1 text-sm text-white hover:bg-blue-500"
          type="submit"
        >
          Log in
        </button>
        <p className="text-sm">
          Don&apos;t have an account?{" "}
          <Link className="font-medium hover:underline" href="/sign-up">
            Register here
          </Link>
        </p>
      </div>
    </form>
  );
}
