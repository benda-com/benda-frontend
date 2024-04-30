"use client";
import { useState } from "react";
import "../globals.css";

export const Faq = (props: {question:string, answer:string}) => {
  const [collapse, setCollapse] = useState(false);

  return <div className="flex flex-col border-b-2 space-y-2">
    <div className="flex items-center place-content-between">
      <p className="font-bold text-lg">{props.question}</p>
      <button className="" onClick={() => setCollapse((prev) => !prev)}>
      {collapse ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-plus"></i>}
      </button>
    </div>
    <div className={`text-gray-600 long-text ${collapse ? "expanded":""}`}><p>{props.answer}</p></div>
  </div>
};
