import React from "react";

export default function UploadSection() {
  return (
    <div className="container flex flex-col m-2 p-4 justify-center items-center">
      <h1 className="text-4xl text-center font-bold mb-4">Subir documento</h1>
      <div className="flex flex-col justify-center items-center m-4">
        <div className="grid grid-cols-3 w-full m-4">
          <label htmlFor="titulo" className="col-span-1">
            Título del documento:{" "}
          </label>
          <InputBox type="text" id="titulo" />
        </div>
        <div className="grid grid-cols-3 w-full m-4">
          <label htmlFor="materia" className="col-span-1">
            Materia:{" "}
          </label>
          <InputBox type="text" id="materia" />
        </div>
      </div>
    </div>
  );
}
