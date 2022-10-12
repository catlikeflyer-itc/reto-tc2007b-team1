import React from "react";
import Categorizer from "../../components/sections/categorizer/categorizer";
import data from "../../data/staticData.json";

export default function index() {
  return <Categorizer data={data.categorizer}></Categorizer>;
}
