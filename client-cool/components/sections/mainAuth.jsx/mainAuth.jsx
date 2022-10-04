import React from "react";
import Image from "next/image";
import MainButton from "../../buttons/mainButton/mainButton";
import TextInput from "../../inputs/textInput/textInput";

// Add ref or onchange state management

export default function MainAuth({ data, user }) {
  return (
    <div className="w-full grid md:grid-cols-2 grid-cols-1 min-h-screen">
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
            <TextInput labelx={"Correo"} placeholder="Ingresa tu correo" />
            <TextInput
              labelx={"Contraseña"}
              placeholder="Ingresa tu contraseña"
            />
            <MainButton
              label="Iniciar sesión"
              color="bg-green-500"
              hoverColor="hover:bg-blue-600"
            />
          </>
        ) : (
          <>
            <TextInput labelx={"Correo"} placeholder="Ingresa tu correo" />
            <TextInput labelx={"Nombre"} placeholder="John Doe" />
            <TextInput
              labelx={"Contraseña"}
              placeholder="Ingresa tu contraseña"
            />
            <TextInput
              labelx={"Confirmar contraseña"}
              placeholder="Ingresa tu contraseña"
            />
            <MainButton
              label="Iniciar sesión"
              color="bg-green-500"
              hoverColor="hover:bg-blue-600"
            />
          </>
        )}
      </div>
    </div>
  );
}
