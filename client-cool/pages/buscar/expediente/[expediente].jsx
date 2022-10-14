import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Looker from "../../../components/sections/looker/looker";
import dummy from "../../../data/dummyData.json";

// Add getStaticProps to fetch real data

export default function DocByExpedient( ) {
  const router = useRouter();
  const { expediente } = router.query;

  return <Looker data={dummy.dummyBuscador} routerParam={expediente} />;
}
