import React from "react";
import Image from "next/image";
import MainButton from "../../buttons/mainButton/mainButton";
import TextInput from "../../inputs/textInput/textInput";

export default function MainLogin({ data }) {
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
        <TextInput labelx={"Correo"} placeholder="Ingresa tu correo" />
        <TextInput labelx={"Contraseña"} placeholder="Ingresa tu contraseña" />
        <MainButton
          label="Iniciar sesión"
          color="bg-green-500"
          hoverColor="hover:bg-blue-600"
        />
      </div>
    </div>
  );
}
