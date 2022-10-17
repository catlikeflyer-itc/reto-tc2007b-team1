import React, { useEffect } from "react";
import { useRouter } from "next/router";
import DataFilter from "../../components/sections/dataFilter/dataFilter";
import dummy from "../../data/dummyData.json";

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
  }, [area]);

  return <DataFilter title={type.title} filter={type.title} />;
}

export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: {},
  };
}

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = areas.map((area) => ({
    params: { area: area.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
