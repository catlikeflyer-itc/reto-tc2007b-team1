import React from "react";

export default function InputBox(props) {
  // Assign type prop
  return (
    <input
      className="p-1 rounded-full w-full text-black bg-slate-300 border-gray-700 col-span-2"
      {...props}
    />
  );
}
