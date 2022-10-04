import React from "react";
import Image from "next/image";
import data from "../../data/staticData.json";

export default function Navbar() {
  const [toggle, setToggle] = React.useState(false);

  return (
    <nav
      className="flex flex-row justify-between items-center h-16 bg-gray-800 fixed t-0 l-0 w-full z-10 px-2 transition-opacity ease-in-out duration-300"
      onLoad={console.log(data)}
    >
      <div className="flex flex-row items-center justify-start md:w-1/4 h-12">
        <Image
          src={data.logo.src}
          alt={data.logo.alt}
          width={150}
          height={50}
          objectFit="cover"
        />
      </div>
      <div className="absolute top-16 left-0 h-1 bg-emerald-400 w-full"></div>
    </nav>
  );
}
