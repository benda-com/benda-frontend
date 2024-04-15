export default function SignUpForm() {
  return (
    <form className="border" action="" method="post">
      <div className="">
        <span>
          <label htmlFor="first-name">First Name</label>
          <input className="border" type="text" name="first-name" />
          <label htmlFor="last-name">Last Name</label>
          <input className="border" type="text" name="last-name" />
          <label htmlFor="email">Email</label>
          <input className="border" type="text" name="email" />
          <label htmlFor="password">Password</label>
          <input className="border" type="text" name="password" />
          <label htmlFor="confirm-password">Confirm Password</label>
          <input className="border" type="text" name="confirm-password" />
        </span>
      </div>
      <button className="border bg-blue-600" type="submit">
        Sign Up
      </button>
    </form>
  );
}
