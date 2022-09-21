import React from "react";

export default function Login({ classX }, props) {
  return (
    <button
      className={`m-2 p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-400 transition-all ease-in-out ${classX}`}
      {...props}
    >
      Log In
    </button>
  );
}
