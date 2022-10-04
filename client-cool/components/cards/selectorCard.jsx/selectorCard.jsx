import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SelectorCard({ data }) {
  return (
    <Link href={data.link}>
      <div
        className={`${data.bg} ${data.hoverBg} rounded-lg shadow-xl flex flex-col p-4 justify-start items-start m-2 col-span-1 cursor-pointer`}
      >
        <h1 className="font-bold text-xl text-white">{data.label}</h1>
        <div className="w-full flex flex-col justify-center items-center">
          <Image src={data.image} width={100} height={100}></Image>
        </div>
      </div>
    </Link>
  );
}
