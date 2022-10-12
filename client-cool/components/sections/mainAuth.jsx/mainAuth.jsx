import React from "react";
import Image from "next/image";
import MainButton from "../../buttons/mainButton/mainButton";
import TextInput from "../../inputs/textInput/textInput";
import { useAppContext } from "../../../context/AppContext";

// Add ref or onchange state management

export default function MainAuth({ data, user }) {
  const { setUser, userSetter } = useAppContext();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  return (
    <div className="w-screen grid md:grid-cols-2 grid-cols-1 min-h-screen">
      <div className="h-full md:col-span-1 hidden md:block bg-green-500" />
      <div className="h-full md:col-span-1 flex flex-col items-start justify-start p-4">
        <Image
          src={data.logo.src}
          alt={data.logo.alt}
          width={150}
          height={50}
          objectFit="cover"
        />
        {user ? (
          <>
            <TextInput
              labelx={"Correo"}
              placeholder="Ingresa tu correo"
              onChange={(e) => setEmail(e.target.value)}
              
            />
            <TextInput
              labelx={"Contraseña"}
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setPass(e.target.value)}
            
            />
            <MainButton
              label="Iniciar sesión"
              color="bg-green-500"
              hoverColor="hover:bg-blue-600"
              onClick={() => setUser(true)}
             
            />
          </>
        ) : (
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
        )}
      </div>
    </div>
  );
}
