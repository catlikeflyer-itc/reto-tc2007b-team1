import React from "react";

export default function TextInput({ labelx, placeholder }, props) {
  return (
    <div className="my-2">
      <label htmlFor="label">{labelx}:</label>
      <input
        type="text"
        placeholder={placeholder}
        id={labelx}
        className="border-2 border-gray-300 rounded-lg p-2 w-full shadow-xl text-black bg-slate-200"
        {...props}
      />
    </div>
  );
}