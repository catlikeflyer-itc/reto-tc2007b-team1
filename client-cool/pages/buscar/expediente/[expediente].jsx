import React from "react";
import { useRouter } from "next/router";
import Looker from "../../../components/sections/looker/looker";
import dummy from "../../../data/dummyData.json";
import { useAppContext } from "../../../context/AppContext";

export default function DocByExpedient() {
  const router = useRouter();
  const { user } = useAppContext();
  const { expediente } = router.query;

  return (
    <>
      {user ? (
        <Looker data={dummy.dummyBuscador} routerParam={expediente} />
      ) : (
        <div onLoad={() => router.push("/")}>Ingrese con su cuenta primero</div>
      )}
    </>
  );
}
