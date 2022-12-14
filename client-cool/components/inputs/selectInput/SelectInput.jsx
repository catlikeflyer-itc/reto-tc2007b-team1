import React from "react";

export default function SelectInput(
  { labelx, selectOptions, onChange, test },
  props
) {
  return (
    <div className="mr-4 my-2">
      <label htmlFor={labelx}>{labelx}</label>
      <select data-testid={test}
        {...props}
        id={labelx}
        name={labelx}
        className="border-2 border-gray-300 rounded-lg p-2 w-full shadow-xl text-black bg-slate-200"
        onChange={onChange}
      >
        <option data-testid="select-option" selected disabled>Elige una opcion</option>
        {selectOptions?.map((option) => (
          <option data-testid="select-option" value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
