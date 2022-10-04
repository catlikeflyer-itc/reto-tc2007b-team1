import React from "react";
import Selector from "../../components/sections/selector/selector";
import data from "../../data/staticData.json";

export default function index() {
  return <Selector data={data.selector} />;
}
