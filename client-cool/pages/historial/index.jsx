import React from "react";
import DataFilter from "../../components/sections/dataFilter/dataFilter";
import { useAppContext } from "../../context/AppContext";

export default function index() {
  const { user } = useAppContext();

  return (
    <>
      {user ? (
        <DataFilter
          title={"Expedientes cerrados"}
          status={true}
          filter={"todos"}
        />
      ) : (
        "Permisos insuficientes"
      )}
    </>
  );
}
