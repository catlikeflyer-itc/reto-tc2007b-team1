import React from "react";

export default function MainButton({ color, hoverColor, label }, props) {
  return (
    <button
      className={`rounded-lg flex flex-row items-center justify-center py-2 px-2 ${color} ${hoverColor} shadow-xl my-2 text-white`}
      {...props}
    >
      {label}
    </button>
  );
}
