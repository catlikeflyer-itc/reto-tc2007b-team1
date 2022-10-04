import React from "react";
import CatCard from "../../cards/catCard/catCard";

export default function Categorizer({ data }) {
  return (
    <div className="container flex flex-col justify-start items-center m-4 mb-64">
      <h1 className="text-3xl font-bold text-center text-blue-900 m-4">
        Categorias
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {data.map((item, index) => (
          <CatCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
