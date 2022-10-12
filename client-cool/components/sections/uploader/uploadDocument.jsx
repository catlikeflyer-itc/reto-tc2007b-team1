import React, { useEffect } from "react";
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
  const [location, setLocation] = React.useState("");

  const [data, setData] = React.useState([]);
  const [expList, setExpList] = React.useState([]);
  // React get file path

  React.useEffect(() => {
    const fetchData = async () => {
      fetch("http://localhost:3000/api/expedientes/all-expedientes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    };
    fetchData();
  }, []);

  // handle upload
  //Document local storage

  return (
    <div className="container flex flex-col justify-start items-center m-4 mb-64">
      <h1 className="text-3xl font-bold text-center text-blue-900 m-4">
        Subir documento
      </h1>
      <div className="m-4 flex-col flex justify-start items-start">
        <TextInput
          labelx="Folio"
          placeholder="Folio"
          onChange={(e) => setFolio(e.target.value)}
        />
        <SelectInput
          labelx="Expediente"
          placeholder="Expediente"
          onChange={(e) => setExpediente(e.target.value)}
          selectOptions={data.map((exp) => {
            return exp.expediente;
          })}
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
        <TextAreaInput
          labelx="Ubicación"
          placeholder="Ubicación fisica del documento"
          onChange={(e) => setLocation(e.target.value)}
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
