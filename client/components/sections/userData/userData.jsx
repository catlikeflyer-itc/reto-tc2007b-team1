import React from "react";
// Add getStaticProps to get data

const UserDiv = ({ text, data }) => (
  <div className="grid grid-cols-3 w-full m-4">
    <p className="col-span-1">{text}:</p>
    <span className="col-span-2 font-bold">{data}</span>
  </div>
);

export default function UserDataSection({ data }) {
  return (
    <div className="container flex flex-col m-2 p-4 justify-center items-center">
      <h1 className="text-4xl text-center font-bold mb-4">
        Información de usuario
      </h1>
      <div className="flex flex-col justify-center items-center m-4">
        {data.map((data, index) => (
          <UserDiv text={data.text} data={index} />
        ))}
      </div>
    </div>
  );
}
