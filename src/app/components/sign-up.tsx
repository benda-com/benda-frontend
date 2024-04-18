export default function SignUpForm() {
  return (
    <form className="flex flex-col items-center" action="#" method="post">
      <div className="flex flex-col  space-y-2">
        <label className="text-lg" htmlFor="first-name">
          First Name
        </label>
        <input
          className="rounded-md border py-1"
          type="text"
          placeholder="Enter first name"
          name="first-name"
        />
        <label className="text-lg" htmlFor="last-name">
          Last Name
        </label>
        <input
          className="rounded-md border py-1"
          type="text"
          placeholder="Enter last name"
          name="last-name"
        />
        <label className="text-lg" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md border py-1"
          type="email"
          placeholder="Enter email"
          name="email"
        />
        <label className="text-lg" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md border py-1"
          type="password"
          placeholder="Enter password"
          name="password"
        />
        <label className="text-lg" htmlFor="confirm-password">
          Confirm Password
        </label>
        <input
          className="rounded-md border py-1"
          type="password"
          placeholder="Confirm password"
          name="confirm-password"
        />
      </div>
      <button
        className="my-8 rounded-lg border bg-blue-600 px-10 py-2 text-white hover:bg-blue-500"
        type="submit"
      >
        Sign Up
      </button>
      <p className="text-sm">
        Already having an account?{" "}
        <a className="font-medium hover:underline " href="/login">
          Login
        </a>
      </p>
    </form>
  );
}
