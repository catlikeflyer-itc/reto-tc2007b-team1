import React from "react";
import MainButton from "../../buttons/mainButton/mainButton";
import FileInput from "../../inputs/fileInput/fileInput";
import SelectInput from "../../inputs/selectInput/SelectInput";
import TextAreaInput from "../../inputs/textArea/textAreaInput";
import TextInput from "../../inputs/textInput/textInput";

export default function UploadDocument() {
    const [folio, setFolio] = React.useState("");
    const [expediente, setExpediente] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [type, setType] = React.useState("");
    const [file, setFile] = React.useState("");
  // React get file path

  // handle upload

  return (
    <div className="container flex flex-col justify-start items-center m-4 mb-64">
      <h1 className="text-3xl font-bold text-center text-blue-900 m-4">
        Subir documento
      </h1>
      <div className="m-4 flex-col flex justify-start items-start">
        <TextInput labelx="Folio" placeholder="Folio" onChange=
        {(e) => setFolio(e.target.value)}
        />
        <SelectInput
          labelx="Expediente"
          placeholder="Expediente"
          onChange={(e) => setExpediente(e.target.value)}
          selectOptions={["Expediente 1", "Expediente 2", "Expediente 3"]}
          state={expediente}
        />
        <TextInput
          labelx="Título"
          placeholder="Título"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextAreaInput
          labelx="Descripción"
          placeholder="Descripción"
          onChange={(e) => setDesc(e.target.value)}
        />
        <TextInput
          labelx="Tipo"
          placeholder="Tipo"
          onChange={(e) => setType(e.target.value)}
        />
        <FileInput
          labelx="Archivo"
          placeholder="Archivo"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <MainButton
          label="Subir"
          onClick={() => console.log("Subir")}
          color="bg-blue-700"
          hoverColor="bg-blue-500" 

        />
      </div>
    </div>
  );
}
