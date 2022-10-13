import React from "react";
import Categorizer from "../../components/sections/categorizer/categorizer";
import data from "../../data/staticData.json";
import { useAppContext } from "../../context/AppContext";
import { useRouter } from "next/router";

export default function index() {
  const { user } = useAppContext();
  const router = useRouter();

  if (user.level === "admin-top") {
    return <Categorizer data={data.categorizer} />;
  } else if (user.level === "admin-mid") {
    router.push(`/buscar/${user.area}`);
  }
}
