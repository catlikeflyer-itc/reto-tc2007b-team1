import React from "react";

export default function TextAreaInput({ labelx, placeholder, onChange }, props) {
  return (
    <div className="my-2">
      <label htmlFor="label">{labelx}:</label>
      <textarea
        type="text"
        placeholder={placeholder}
        id={labelx}
        className="border-2 border-gray-300 rounded-lg p-2 w-full shadow-xl text-black bg-slate-200"
        {...props}
        onChange={onChange}
        rows="5"
        cols="40"
      />
    </div>
  );
}
