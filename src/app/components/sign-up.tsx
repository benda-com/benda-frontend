//TODO: Implement a function to validate that the password and the confirm password matches
// TODO: Before redirecting the user user to the login show an animation to confirm signup
"use client";

import Link from "next/link";
import React, { useState } from "react";

import { signUpUser } from "../lib/actions";
import { Button } from "./widgets";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let newErrors: any = {};
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit logic here
      console.log("we are in the submit");
    }
    signUpUser(
      formData.email,
      formData.first_name,
      formData.last_name,
      formData.password,
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center "
      action=""
      method="post"
    >
      <div className="flex flex-col space-y-5   md:space-y-2">
        <div className="flex flex-col md:block md:space-x-4 md:space-y-6">
          <label className="text-lg" htmlFor="first-name">
            First Name
          </label>
          <input
            className="rounded-md border py-1"
            type="text"
            placeholder="Enter first name"
            name="first_name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:block md:space-x-4 md:space-y-6">
          <label className="text-lg" htmlFor="last-name">
            Last Name
          </label>
          <input
            className="rounded-md border py-1"
            type="text"
            placeholder="Enter last name"
            name="last_name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:block md:space-x-4 md:space-y-6">
          <label className="text-lg" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md border py-1"
            type="email"
            placeholder="Enter email"
            name="email"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:block md:space-x-4 md:space-y-6">
          <label className="text-lg" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-md border py-1"
            type="password"
            placeholder="Enter password"
            name="password"
            required
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="flex flex-col md:block md:space-x-4 md:space-y-6">
          <label className="text-lg" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            className="rounded-md border py-1"
            type="password"
            placeholder="Confirm password"
            name="confirm-password"
            required
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
      </div>
      <Button name="Sign Up" redirectLocation="/login" />
      <p className="text-sm">
        Already having an account?
        <Link className="font-medium hover:underline " href="/login">
          Login
        </Link>
      </p>
    </form>
  );
}
