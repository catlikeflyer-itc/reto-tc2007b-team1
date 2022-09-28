import React from "react";
import SignupSection from "../../components/sections/signup/signupSection";
import data from "../../data/staticData.json"

export default function signup() {
  return <SignupSection data={data.signup}/>;
}
