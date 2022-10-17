import React from "react";
import { useState } from "react";
import TextInput from "../components/inputs/textInput/textInput";
import MainButton from "../components/buttons/mainButton/mainButton";
export default function Log({data}) {
    const [user = false, setUser] = useState(null);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    return( 
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
    )};