import React from "react";
import Link from "next/link";

export default function LoginButton() {
  return (
    <Link href="/login">
      <div className="m-2 p-2 text-white bg-blue-600 rounded-lg hover:to-blue-400 transition-all ease-in-out">
        Log In
      </div>
    </Link>
  );
}
