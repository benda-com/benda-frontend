"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { loginUser } from "../lib/actions";
import { Button } from "./widgets";

export default function LoginForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    apiError: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newErrors: any = {};

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response: any = await loginUser(
          formData.email,
          formData.password,
        );
        if (response.error) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            apiError: response.message,
          }));
        } else {
          router.push("/dashboard");
        }
      } catch (error) {
        console.error("Error logging in:", error);
        setErrors((prevErrors) => ({
          ...prevErrors,
          apiError: "Invalid email or password",
        }));
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="" action="#" method="post">
      <div className="grid w-auto flex-col justify-items-start space-y-5">
        <div className="flex flex-col space-y-2 md:block  md:space-x-12 md:space-y-6">
          <label className="text-lg font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-sm border py-1"
            type="email"
            name="email"
            placeholder="Enter email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col space-y-2 md:block md:space-x-4 md:space-y-6">
          <label className="text-lg font-medium" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-sm border py-1"
            type="password"
            name="password"
            placeholder="Enter password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          {errors.apiError && <p style={{ color: "red" }}>{errors.apiError}</p>}
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
      </div>
      <div className="grid w-auto flex-col justify-items-center ">
        <Button name="Login" />
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
