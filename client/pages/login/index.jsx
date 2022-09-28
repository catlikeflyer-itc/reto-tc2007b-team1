import React from "react";
import LoginSection from "../../components/sections/login/loginSection";
import data from "../../data/staticData.json";

export default function login() {
  return <LoginSection data={data.login} />;
}
