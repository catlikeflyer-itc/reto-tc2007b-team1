import React from "react";
import MainAuth from "../../components/sections/mainAuth/mainAuth";
import data from "../../data/staticData.json";
import { useAppContext } from "../../context/AppContext";

export default function index() {
  const { user } = useAppContext();

  return <>{user ? <MainAuth data={data} /> : "Permisos insuficientes"}</>;
}
