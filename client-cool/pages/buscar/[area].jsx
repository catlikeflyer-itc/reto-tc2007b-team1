import React, { useEffect } from "react";
import { useRouter } from "next/router";
import DataFilter from "../../components/sections/dataFilter/dataFilter";

// Add getStaticProps to fetch real data

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

export default function Tipo() {
  const router = useRouter();
  const { area } = router.query;
  const [type, setType] = React.useState("");

  useEffect(() => {
    setType(areas.find((item) => item.slug === area));
  }, []);

  return <DataFilter title={type.title} filter={type.slug} />;
}

