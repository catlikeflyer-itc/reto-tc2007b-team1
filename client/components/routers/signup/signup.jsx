import React from "react";
import Link from "next/link";

export default function SignupButton({classX}) {
  return (
    <Link href="/signup">
      <div className={`m-2 p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-400 transition-all ease-in-out ${classX}`}>
        Sign Up
      </div>
    </Link>
  );
}