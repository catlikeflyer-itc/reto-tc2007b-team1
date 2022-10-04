import React from "react";

export default function SelectInput({ label, selectOptions }, props) {
  return (
    <div className="mr-4 my-2">
      <label htmlFor={label}>{label}</label>
      <select
        {...props}
        id={label}
        name={label}
        className="border-2 border-gray-300 rounded-lg p-2 w-full shadow-xl text-black bg-slate-200"
      >
        {selectOptions.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}
