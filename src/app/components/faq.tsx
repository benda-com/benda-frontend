"use client";
import { useState } from "react";
import "../globals.css";

export const Faq = (props: { question: string; answer: string }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="flex flex-col space-y-2 border-b-2">
      <div className="flex place-content-between items-center">
        <p className="text-lg font-bold">{props.question}</p>
        <button className="" onClick={() => setCollapse((prev) => !prev)}>
          {collapse ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-plus"></i>
          )}
        </button>
      </div>
      <div
        className={`long-text transform text-gray-600 transition-transform duration-500 ease-in-out ${collapse ? "expanded translate-y-0" : "-translate-y-full"}`}
      >
        <p>{props.answer}</p>
      </div>
    </div>
  );
};
