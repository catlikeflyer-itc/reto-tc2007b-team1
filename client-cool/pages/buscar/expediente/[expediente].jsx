import React from "react";
import { useRouter } from "next/router";
import Looker from "../../../components/sections/looker/looker";
import { useAppContext } from "../../../context/AppContext";

export default function DocByExpedient() {
  const router = useRouter();
  const { user } = useAppContext();
  const { expediente } = router.query;

  return (
    <>
      {user ? (
        <Looker routerParam={expediente} />
      ) : (
        <div onLoad={() => router.push("/")}>Ingrese con su cuenta primero</div>
      )}
    </>
  );
}

export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: {},
  };
}

export async function getStaticPaths() {
  let paths = [];

  const fetchData = async () => {
    fetch("http://localhost:3000/api/expedientes/all-expedientes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.map((item) => {
          paths.push({ params: { expediente: item.expediente } });
        });
      });
  };

  await fetchData();

  return { paths, fallback: false };
}
