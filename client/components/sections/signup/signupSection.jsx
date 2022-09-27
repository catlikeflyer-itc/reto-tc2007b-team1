import React from "react";
import InputBox from "../../inputs/inputbox";
import Signup from "../../buttons/signup/signup";
import datas from "../../../data/staticData.json";

export default function SignupSection() {
  const [data, setData] = React.useState({});
  const [error, setError] = React.useState(false);

  const InputDiv = ({ refi, type, id }) => (
    <div className="grid grid-cols-3 w-full m-4">
      <label htmlFor={id} className="col-span-1">
        {id}
      </label>
      <InputBox
        type={type}
        id={id}
        onChange={(e) => setData({ ...data, [refi]: e.target.value })}
      />
    </div>
  );

  return (
    <div className="container flex flex-col m-2 p-4 justify-center items-center">
      <h1 className="text-4xl text-center font-bold mb-4">
        Registro de administrador
      </h1>
      <div className="flex flex-col justify-center items-center m-4">
        {datas.signup.map((data) => (
          <InputDiv refi={data.ref} type={data.type} id={data.id} />
        ))}
      </div>
      <Signup classX={"w-40"} />

      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}
