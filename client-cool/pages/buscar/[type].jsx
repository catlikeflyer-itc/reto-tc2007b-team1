import React from "react";
import { useRouter } from "next/router";
import DataFilter from "../../components/sections/dataFilter/dataFilter";
import dummy from "../../data/dummyData.json";

// Add getStaticProps to fetch real data

export default function Tipo() {
  const router = useRouter();
  const { type } = router.query;

  return <DataFilter title={type} data={dummy.dummyBuscador} />;
}
