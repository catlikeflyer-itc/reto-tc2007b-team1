import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "../../../context/AppContext";

export default function SelectorCard({ data }) {
  const { user } = useAppContext();

  return (
    <Link
      href={
        user.level !== "admin-top" && data.search ? `buscar/${user.area}` : data.link
      }
    >
      <div
        className={`${data.bg} rounded-lg shadow-xl flex flex-col p-4 justify-start items-start m-2 col-span-1 cursor-pointer`}
      >
        <h1 className="font-bold text-xl text-white">{data.label}</h1>
        <div className="w-full flex flex-col justify-center items-center">
          <Image src={data.image} width={100} height={100}></Image>
        </div>
      </div>
    </Link>
  );
}
