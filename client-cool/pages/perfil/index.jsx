import React from "react";
import { useAppContext } from "../../context/AppContext";

export default function index() {
  const { user } = useAppContext();

  return (
    <div className="container flex flex-col justify-start items-center m-4 mb-64">
      <h1 className="text-3xl font-bold text-center text-blue-900 m-4">
        Mi perfil
      </h1>
      {user && (
        <div className="m-4 grid grid-cols-2 rounded-lg">
          <div className="flex flex-col justify-start items-start col-span-1 rounded-l-lg font-bold">
            <p>Nombre:</p>
            <p>Correo:</p>
            <p>Area:</p>
            <p>Permisos:</p>
          </div>
          <div className="flex flex-col justify-start items-end col-span-1 rounded-r-lg">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.area}</p>
            <p>
              {user.permission.map((perm) => {
                return perm + ", ";
              })}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
