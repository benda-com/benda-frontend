"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function LoginForm() {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleChange = (e: any) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = (e: any) => {
    // perform post request here
    e.preventDefault();
    loginUser(email, password);
    // alert(formData.email, formData.password);
  };

  const loginUser = async (email: string, password: string) => {
    const base64encodedData = Buffer.from(`${email}:${password}`).toString(
      "base64",
    );
    await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Basic ${base64encodedData}`,
      },
    })
      // const res = await response.json()
      .then((response) => {
        response.json().then((res) => {
          let token = res.token;
          console.log("token: ", token);
        });
      })
      .then((formData) => {
        // setUser((username) => [data, ...username]);
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="" action="" method="post">
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
