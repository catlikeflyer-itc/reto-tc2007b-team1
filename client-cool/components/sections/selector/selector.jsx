import React from "react";
import SelectorCard from "../../cards/selectorCard.jsx/selectorCard";
import { useAppContext } from "../../../context/AppContext";

export default function Selector({ data }) {
  const { user } = useAppContext();

  return (
    <div className="container flex flex-col justify-start items-center m-4 mb-64">
      <h1 className="text-3xl font-bold text-center text-blue-900 m-4">
        Portal de archivos
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {data.map((item, index) => (
          <SelectorCard key={index} data={item} />
        ))}
      </div>
      {user && "User active"}
    </div>
  );
}
