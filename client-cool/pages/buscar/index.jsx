import React from "react";
import Categorizer from "../../components/sections/categorizer/categorizer";
import data from "../../data/staticData.json";

export default function buscar() {
  return <Categorizer data={data.categorizer} />;
}

// onLoad={() => router.push(`/buscar/${user.area}`)}
// onLoad={() => router.push("/")}
