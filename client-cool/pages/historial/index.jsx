import React from "react";
import DataFilter from "../../components/sections/dataFilter/dataFilter";

export default function index() {
  return (
    <DataFilter title={"Expedientes cerrados"} status={true} filter={"todos"} />
  );
}
