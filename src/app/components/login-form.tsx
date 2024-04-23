// TODO: Before redirecting the  user to the dashboard show an animation to confirm login
// TODO: Change the button to a component

"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { loginUser } from "../lib/actions";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="" action="#" method="post">
      <div className="grid w-auto flex-col justify-items-start ">
        <span className="space-x-12  space-y-6">
          <label className="text-lg font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-sm border py-1"
            type="email"
            name="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>
        <span className="space-x-4 space-y-6">
          <label className="text-lg font-medium" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-sm border py-1"
            type="password"
            name="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </span>
      </div>
      <div className="grid w-auto flex-col justify-items-center ">
        <button
          className="my-5 w-20 justify-items-center rounded-lg border bg-blue-600 py-1 text-sm text-white hover:bg-blue-500"
          type="submit"
          onClick={() => router.push("/dashboard")}
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
