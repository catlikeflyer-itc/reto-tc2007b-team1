import React from "react";
import Image from "next/image";
import MainButton from "../components/buttons/mainButton/mainButton";
import TextInput from "../components/inputs/textInput/textInput";
import SelectInput from "../components/inputs/selectInput/SelectInput";
import { compare, hash } from "bcryptjs";
import { useState } from "react";


// Add ref or onchange state management

export default function Reg({data}) {
  const [user , setUser] = useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [area, setArea] = React.useState("");
  const [level, setLevel] = React.useState("");
  const [permission, setPermission] = React.useState([]);

  const handleSignup = async (e) => {
    setUser("logged");
    console.log("signup", user, name, email, pass, area, level, permission);
  }
  const levelPairs = [
    {
      slug: "admin-top",
      title: "Administrador",
    },
    {
      slug: "admin-mid",
      title: "Administrador de área",
    },
    {
      slug: "admin-low",
      title: "Usuario",
    },
  ];
  const areas = [
    {
      slug: "legal",
      title: "Legal",
    },
    {
      slug: "penal",
      title: "Penal",
    },
    {
      slug: "juridica",
      title: "Jurídica",
    },
    {
      slug: "laboral",
      title: "Laboral",
    },
    {
      slug: "todos",
      title: "todo",
    },
  ];
  return (
    <div className="w-screen grid md:grid-cols-2 grid-cols-1 min-h-screen">
      <div className="h-full md:col-span-1 hidden md:block bg-green-500" />
      <div className="h-full md:col-span-1 flex flex-col items-start justify-start p-4">
                 <>
            <h1 className="text-3xl font-bold text-center text-blue-900 my-4">
              Crea un nuevo usuario
            </h1>
            <TextInput
              labelx={"Correo"}
              placeholder="Ingresa tu correo"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              labelx={"Nombre"}
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
            />
            <TextInput
              labelx={"Contraseña"}
              placeholder="Ingresa tu contraseña"
              onChange={(e) =>
                hash(e.target.value, 8, function (err, hash) {
                  setPass(hash);
                })
              }
            />
            <SelectInput
              test="select1"
              labelx={"Nivel administrativo"}
              placeholder={"nivel administrativo"}
              selectOptions={levelPairs.map((pair) => {
                return pair.title;
              })}
              onChange={(e) => setLevel(e.target.value)}
            />
            {level !== "Administrador" && (
              <SelectInput
                test="select2"
                labelx={"Area"}
                placeholder={"Area a la que pertenece"}
                selectOptions={areas.map((area) => area.title)}
                onChange={(e) => setArea(e.target.value)}
              />
            )}

            {level === "Usuario" && (
              <TextInput
                labelx={"Expedientes permitidos"}
                placeholder="Separa por coma los expedientes permitidos"
                onChange={(e) => setPermission(e.target.value.split(","))}
              />
            )}
            <MainButton
              label="Registrar"
              color="bg-green-500"
              hoverColor="hover:bg-blue-600"
              onClick={handleSignup}
            />
          </>
      </div>
    </div>
  );
}
