import React from "react";
import { useAppContext } from "../../context/AppContext";
import { useRouter } from "next/router";

export default function index() {
  const { user } = useAppContext();
  const router = useRouter();

  return (
    <div className="container flex flex-col justify-start items-center m-4 mb-64">
      <h1 className="text-3xl font-bold text-center text-blue-900 m-4">
        Mi perfil
      </h1>
      {user ? (
        <div className="m-4 grid grid-cols-2 rounded-lg">
          <p className="font-bold text-blue-900 m-2">Nombre:</p>
          <p className="m-2">{user.name}</p>
          <p className="font-bold text-blue-900 m-2">Correo:</p>
          <p className="m-2">{user.email}</p>
          <p className="font-bold text-blue-900 m-2">Nivel administrativo:</p>
          <p className="m-2">{user.level}</p>
          <p className="font-bold text-blue-900 m-2">Permisos:</p>
          <p className="m-2">
            {user.permission
              ? user.permission.map((perm) => {
                  return perm + ", ";
                })
              : "Este usuario tiene todos los permisos"}
          </p>
        </div>
      ) : (
        <div onLoad={() => router.push("/")}>Ingrese con su cuenta primero</div>
      )}
    </div>
  );
}
