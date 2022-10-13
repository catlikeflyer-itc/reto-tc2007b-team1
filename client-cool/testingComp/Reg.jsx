import React from "react";
import { useState } from "react";
import Image from "next/image";
import MainButton from "../components/buttons/mainButton/mainButton";
import TextInput from "../components/inputs/textInput/textInput";

// Add ref or onchange state management

export default function Reg({data}) {
  const [user = false, setUser] = useState(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  return (
    <div className="w-screen grid md:grid-cols-2 grid-cols-1 min-h-screen">
      <div className="h-full md:col-span-1 hidden md:block bg-green-500" />
      <div className="h-full md:col-span-1 flex flex-col items-start justify-start p-4">
        <Image
          data-cy = "logo"
          src={data.logo.src}
          alt={data.logo.alt}
          width={150}
          height={50}
          objectFit="cover"
        />
          <>
            <TextInput
              labelx={"Correo"}
              placeholder="Ingresa tu correo"
              onChange={(e) => setEmail(e.target.value)}
  
            />
            <TextInput
              labelx={"Nombre"}
              placeholder="Ingresa tu nombre"
              onChange={(e) => setName(e.target.value)}
              
            />
            <TextInput
              labelx={"Contraseña"}
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setPass(e.target.value)}
             
            />
            <TextInput
              labelx={"Confirmar contraseña"}
              placeholder="Ingresa tu contraseña"
             
            />
            <MainButton
              label="Registrar"
              color="bg-green-500"
              id="registerButton"
              hoverColor="hover:bg-blue-600"
              
              onClick={() => {
                console.log("Click");
                setUser(true);
              }}
            />
          </>
      </div>
    </div>
  );
}
