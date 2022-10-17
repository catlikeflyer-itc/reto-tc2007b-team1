import React from "react";

export default function TextInput({ labelx, placeholder, onChange, type = "text"}, props) {
  return (
    <div className="my-2">
      <label htmlFor="label">{labelx}:</label>
      <input
        type={type}
        placeholder={placeholder}
        id={labelx}
        className="border-2 border-gray-300 rounded-lg p-2 w-full shadow-xl text-black bg-slate-200"
        {...props}
        onChange={onChange}
      />
    </div>
  );
  
}
