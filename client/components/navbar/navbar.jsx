import React from "react";
import Image from "next/image";
import Navlink from "../routers/navlink/navlink";
import { BiMenu } from "react-icons/bi";
import data from "../../data/staticData.json"
import LoginButton from "../routers/login/login";
import SignupButton from "../routers/signup/signup";

export default function Navbar() {
  const [toggle, setToggle] = React.useState(false);

  return (
    <nav
      className="flex flex-row justify-between items-center h-14 bg-gray-800 fixed t-0 l-0 w-full z-10 px-2 transition-opacity ease-in-out duration-300"
      onLoad={console.log(data)}
    >
      <div className="flex flex-row items-center justify-start md:w-1/4 h-12" >
        <Image src={data.logo.src} alt={data.logo.alt} width={150} height={50} objectFit="cover" />
      </div>
      <div className="lg:flex flex-row items-center justify-center md:w-1/2 hidden">
        {data.navbar.map((item) => (
          <Navlink key={item.text} href={item.url}>
            {item.text}
          </Navlink>
        ))}
      </div>
      <div className="lg:hidden flex flex-row items-center justify-end md:w-1/5">
        <span onClick={() => setToggle(!toggle)}>
          <BiMenu size={30} color="white" />
        </span>
      </div>
      <div className="flex flex-row items-center justify-end md:w-1/4">
        <LoginButton />
        <SignupButton />
      </div>
      
      {toggle && (
        <div className="lg:hidden absolute top-14 left-0 flex flex-col items-center justify-center w-full bg-green-600 transition ease-in-out duration-300">
          {data.navbar.map((item) => (
            <Navlink key={item.text} href={item.url}>
              {item.text}
            </Navlink>
          ))}
        </div>
      )}
    </nav>
  );
}
