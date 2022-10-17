import React from "react";

export default function SelectInput(
  { labelx, selectOptions, onChange },
  props
) {
  return (
    <div className="mr-4 my-2">
      <label htmlFor={label}>{label}</label>
      <select data-testid="select"
        {...props}
        id={labelx}
        name={labelx}
        className="border-2 border-gray-300 rounded-lg p-2 w-full shadow-xl text-black bg-slate-200"
        onChange={onChange}
      >
        {selectOptions?.map((option) => (
          <option data-testid="select-option" value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}
