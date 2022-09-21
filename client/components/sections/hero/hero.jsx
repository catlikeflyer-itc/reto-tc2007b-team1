import Link from "next/link";
import React from "react";
import LoginButton from "../../routers/login/login";

export default function Hero({ data }) {
  return (
    <div className="container flex flex-col m-2 p-4 justify-center items-center">
      <h1 className="text-6xl text-center text-black mb-4 font-black">
        {data.title}
      </h1>
      <h2 className="text-5xl text-center text-blue-500 mb-4 font-bold">
        {data.subtitle}
      </h2>
      <p className="text-black text-center mb-4">{data.description}</p>
      <div className="flex flex-row justify-center items-center mb-4">
        {data.links.map((button, index) => (
          <Link key={index} href={button.url}>
            <span className="m-2 p-2 py-8 text-gray-500 hover:text-gray-700">
              {" "}
              {button.text}
            </span>
          </Link>
        ))}
      </div>
      <LoginButton classX="w-40 text-center"></LoginButton>
    </div>
  );
}
