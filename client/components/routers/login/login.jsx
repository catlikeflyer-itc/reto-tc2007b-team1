import React from "react";
import Link from "next/link";

export default function LoginButton({classX}) {
  return (
    <Link href="/login">
      <div className={`m-2 p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-400 transition-all ease-in-out ${classX}`}>
        Log In
      </div>
    </Link>
  );
}
