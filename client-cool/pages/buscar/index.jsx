import React from "react";
import Categorizer from "../../components/sections/categorizer/categorizer";
import data from "../../data/staticData.json";
import { useAppContext } from "../../context/AppContext";

export default function buscar() {
  const { user } = useAppContext();

  return (
    <>
      {user ? (
        <Categorizer data={data.categorias} />
      ) : (
        <>Inicia sesión primero</>
      )}
    </>
  );
}

// onLoad={() => router.push(`/buscar/${user.area}`)}
// onLoad={() => router.push("/")}
