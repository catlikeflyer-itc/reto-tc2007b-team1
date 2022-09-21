import React from 'react'
import Login from '../../buttons/login/login'
import InputBox from '../../inputs/inputbox'

export default function LoginSection() {
  return (
    <div className="container flex flex-col m-2 p-4 justify-center items-center">
      <h1 className="text-4xl text-center font-bold mb-4">
        Ingresa al sistema
      </h1>
      <div className="flex flex-col justify-center items-center m-4">
        <div className="grid grid-cols-3 w-full m-4">
          <label htmlFor="username" className="col-span-1">
            Usuario:{" "}
          </label>
          <InputBox type="text" id="username"/>
        </div>
        <div className="grid grid-cols-3 w-full m-4">
          <label htmlFor="pw" className="col-span-1">
            Contrasena:{" "}
          </label>
          <InputBox type="password" id="pw"/>
        </div>
      </div>
      <Login classX={"w-40"} />
    </div>
  )
}
