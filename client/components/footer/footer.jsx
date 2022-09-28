import React from "react";
import Image from "next/image";
import data from "../../data/staticData.json";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-blue-900 jusity-center items-center text-white">
      <div className="container grid md:grid-cols-3 grid-cols-1 min-h-64">
        <div className="col-span-1 flex flex-col justify-center items-center h-full">
          <Image src={data.logo.src} width={300} height={200} objectFit="contain"/>
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col justify-center items-start h-full">
          <p>{data.footer.address}</p>
          <a href={`mailto:${data.footer.email}`}>{data.footer.email}</a>
          <p>Tel: {data.footer.phone}</p>
        </div>
      </div>
    </footer>
  );
}
