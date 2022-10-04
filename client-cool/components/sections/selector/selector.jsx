import React from "react";
import SelectorCard from "../../cards/selectorCard.jsx/selectorCard";

export default function Selector({ data }) {
  return (
    <div className="container flex flex-col justify-start items-center m-4 mb-64">
      <h1 className="text-3xl font-bold text-center text-blue-900 m-4">
        Portal de archivos
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {data.map((item, index) => (
          <SelectorCard
            key={index}
            data={item}
          />
        ))}
      </div>
    </div>
  );
}