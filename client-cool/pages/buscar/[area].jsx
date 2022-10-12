import React, { useEffect } from "react";
import { useRouter } from "next/router";
import DataFilter from "../../components/sections/dataFilter/dataFilter";
import dummy from "../../data/dummyData.json";

// Add getStaticProps to fetch real data

export default function Tipo() {
  const router = useRouter();
  const { area } = router.query;
  const [type, setType] = React.useState("");

  const areas = [
    {
      slug: "legal",
      title: "Legal",
    },
    {
      slug: "penal",
      title: "Penal",
    },
    {
      slug: "juridica",
      title: "Jurídica",
    },
    {
      slug: "laboral",
      title: "Laboral",
    },
    {
      slug: "todos",
      title: "todo",
    },
  ];

  useEffect(() => {
    setType(areas.find((item) => item.slug === area));
  }, [area]);

  return <DataFilter title={type.title} filter={type.title} />;
}
