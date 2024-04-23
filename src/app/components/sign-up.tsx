//TODO: Implement a function to validate that the password and the confirm password matches
// TODO: Before redirecting the user user to the login show an animation to confirm signup
// TODO: Change the button to a component
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { signUpUser } from "../lib/actions";

export default function SignUpForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signUpUser(email, firstName, lastName, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center"
      action=""
      method="post"
    >
      <div className="flex flex-col  space-y-2">
        <label className="text-lg" htmlFor="first-name">
          First Name
        </label>
        <input
          className="rounded-md border py-1"
          type="text"
          placeholder="Enter first name"
          name="first-name"
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label className="text-lg" htmlFor="last-name">
          Last Name
        </label>
        <input
          className="rounded-md border py-1"
          type="text"
          placeholder="Enter last name"
          name="last-name"
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <label className="text-lg" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md border py-1"
          type="email"
          placeholder="Enter email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-lg" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md border py-1"
          type="password"
          placeholder="Enter password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="text-lg" htmlFor="confirm-password">
          Confirm Password
        </label>
        <input
          className="rounded-md border py-1"
          type="password"
          placeholder="Confirm password"
          name="confirm-password"
          required
        />
      </div>
      <button
        className="my-8 rounded-lg border bg-blue-600 px-10 py-2 text-white hover:bg-blue-500"
        type="submit"
        onClick={() => router.push("/login")}
      >
        Sign Up
      </button>
      <p className="text-sm">
        Already having an account?
        <Link className="font-medium hover:underline " href="/login">
          Login
        </Link>
      </p>
    </form>
  );
}
