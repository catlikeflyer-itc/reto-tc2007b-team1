import React from "react";
import { useState } from "react";
import TextInput from "../components/inputs/textInput/textInput";
import MainButton from "../components/buttons/mainButton/mainButton";
export default function Log() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const handleLogin = () => {
        setUser("logged");
        console.log("login", user, email, pass);
    };
    return( 
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
              type="password"
            />
            <MainButton
              label="Iniciar sesión"
              color="bg-green-500"
              hoverColor="hover:bg-blue-600"
              onClick={handleLogin}
            />
          </>
    )};