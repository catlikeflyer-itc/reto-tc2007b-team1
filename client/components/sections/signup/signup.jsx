import React from "react";
import InputBox from "../../inputs/inputbox";
import Signup from "../../buttons/signup/signup";

export default function index() {
  return (
    <div className="container flex flex-col m-2 p-4 justify-center items-center">
      <h1 className="text-4xl text-center font-bold mb-4">
        Registro de administrador
      </h1>
      <div className="flex flex-col justify-center items-center m-4">
        <div className="grid grid-cols-3 w-full m-4">
          <label htmlFor="username" className="col-span-1">
            Usuario:{" "}
          </label>
          <InputBox type="text" id="username"/>
        </div>
        <div className="grid grid-cols-3 w-full m-4">
          <label htmlFor="email" className="col-span-1">
            Correo Electronico:{" "}
          </label>
          <InputBox type="email" id="email" />
        </div>
        <div className="grid grid-cols-3 w-full m-4">
          <label htmlFor="pw" className="col-span-1">
            Contrasena:{" "}
          </label>
          <InputBox type="password" id="pw"/>
        </div>
        <div className="grid grid-cols-3 w-full m-4">
          <label htmlFor="cpw" className="col-span-1">
            Confirmar contrasena:{" "}
          </label>
          <InputBox type="password" id="cpw" />
        </div>
      </div>
      <Signup classX={"w-40"} />
    </div>
  );
}
