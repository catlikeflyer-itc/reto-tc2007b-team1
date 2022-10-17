import React from "react";
import Selector from "../../components/sections/selector/selector";
import data from "../../data/staticData.json";
import { useRouter } from "next/router";
import { useAppContext } from "../../context/AppContext";

export default function index() {
  const { user } = useAppContext();
  const router = useRouter();

  return (
    <>
      {user ? (
        <Selector data={data.selector} />
      ) : (
        <div onLoad={() => router.push("/")}>Ingrese con su cuenta primero</div>
      )}
    </>
  );
}
