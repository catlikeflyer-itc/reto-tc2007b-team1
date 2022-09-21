import React from "react";
import Link from "next/link";

export default function Navlink({ href, children }) {
  return (
    <Link href={href}>
      <a className="p-4 m-2 mk3 font-bold hover:text-slate-300 text-white">{children}</a>
    </Link>
  );
}
