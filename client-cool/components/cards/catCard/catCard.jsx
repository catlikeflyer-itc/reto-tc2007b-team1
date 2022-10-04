import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CatCard({ data }) {
  return (
    <Link href={data.link}>
      <div className="rounded-lg shadow-xl m-2 flex flex-row bg-slate-200 col-span-1 hover:bg-slate-400">
        <div
          className={`h-24 w-24 rounded-l-lg ${data.bg} flex flex-row justify-center items-center`}
        >
          <Image src={data.image} width={90} height={90} />
        </div>
        <div className="flex flex-col justify-center items-start p-4">
          <h1 className="text-xl font-bold">{data.label}</h1>
        </div>
      </div>
    </Link>
  );
}
