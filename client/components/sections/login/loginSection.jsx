import React from "react";
import Login from "../../buttons/login/login";
import InputBox from "../../inputs/inputbox";

const InputDiv = ({ refi, type, id }) => (
  <div className="grid grid-cols-3 w-full m-4">
    <label htmlFor={id} className="col-span-1">
      {id}
    </label>
    <InputBox
      type={type}
      id={id}
      //onChange={(e) => setData({ ...data, eval(refi + ":" + e.target.value )})}
    />
  </div>
);

export default function LoginSection({ data }) {
  return (
    <div className="container flex flex-col m-2 p-4 justify-center items-center">
      <h1 className="text-4xl text-center font-bold mb-4">
        Ingresa al sistema
      </h1>
      <div className="flex flex-col justify-center items-center m-4">
        {data.map((data) => (
          <InputDiv refi={data.ref} type={data.type} id={data.id} />
        ))}
      </div>
      <Login classX={"w-40"} />
    </div>
  );
}
