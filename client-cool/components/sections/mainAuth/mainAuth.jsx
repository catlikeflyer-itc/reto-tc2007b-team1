import React from "react";
import Image from "next/image";
import MainButton from "../../buttons/mainButton/mainButton";
import TextInput from "../../inputs/textInput/textInput";
import { useAppContext } from "../../../context/AppContext";
import SelectInput from "../../inputs/selectInput/SelectInput";

// Add ref or onchange state management

export default function MainAuth({ data, state }) {
  const { setUser } = useAppContext();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [area, setArea] = React.useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || pass === "") {
      alert("Please fill all fields");
    } else {
      let res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          name,
          pass,
          email,
        }),
      });

      res = await res.json();
      setUser(res);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "" || pass === "") {
      alert("Please fill all fields");
    } else {
      let res = await fetch(
        `http://localhost:3000/api/auth/login?email=${email}&password=${pass}`,
        {
          method: "GET",
        }
      );

      res = await res.json();
      setUser(res);
    }
  };

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
        {state === "login" ? (
          <>
            <h1 className="text-3xl font-bold text-center text-blue-900 my-4">
              Ingresa con tu cuenta
            </h1>
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
              onClick={handleLogin}
            />
          </>
        ) : (
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
              onChange={(e) => setPass(e.target.value)}
            />
            <SelectInput
              labelx={"Area"}
              placeholder={"Area a la que pertenece"}
              selectOptions={["Legal", "Penal", "Jurídica", "Laboral"]}
              onChange={(e) => setArea(e.target.value)}
            />
            <MainButton
              label="Registrar"
              color="bg-green-500"
              hoverColor="hover:bg-blue-600"
              onClick={handleSignup}
            />
            <p className="text-gray-500 text-sm mt-2">
              ¿Ya tienes una cuenta?{" "}
              <span
                className="text-green-500 cursor-pointer"
                onClick={() => setAction("login")}
              >
                Inicia sesión
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
