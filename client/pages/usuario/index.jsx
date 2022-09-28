import React from "react";
import UserDataSection from "../../components/sections/userData/userData";
import data from "../../data/staticData.json"

export default function usuario() {
  return <UserDataSection data={data.userInfo} />;
}
