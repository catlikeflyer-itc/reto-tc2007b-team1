import React from "react";
import MainButton from "../../buttons/mainButton/mainButton";
import SelectInput from "../../inputs/selectInput/SelectInput";
import TextInput from "../../inputs/textInput/textInput";
import TextAreaInput from "../../inputs/textArea/textAreaInput";
import { useAppContext } from "../../../context/AppContext";
import { useRouter } from "next/router";

const areas = [
  {
    slug: "legal",
    title: "Legal",
  },
  {
    slug: "penal",
    title: "Penal",
  },
  {
    slug: "juridica",
    title: "Jurídica",
  },
  {
    slug: "laboral",
    title: "Laboral",
  },
];

export default function UploadExpedient() {
  // React get file path
  const { user } = useAppContext();
  const [expediente, setExpediente] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [area, setArea] = React.useState("todo");
  const [status, setStatus] = React.useState("");
  const [issue, setIssue] = React.useState("");
  const today = new Date();

  const router = useRouter();

  const handleCreate = async (e) => {
    e.preventDefault();

    if (
      expediente === "" ||
      title === "" ||
      area === "" ||
      status === "" ||
      issue === "" ||
      desc === ""
    ) {
      alert("Todos los campos son obligatorios");
    } else {
      let res = await fetch(
        "http://localhost:3000/api/expedientes/create-expediente",
        {
          method: "POST",
          body: JSON.stringify({
            expediente,
            desc,
            title,
            area:
              user.level === "admin-top"
                ? areas.find((item) => item.title === area).slug
                : user.area,
            issue,
            generatedAt: today,
            createdBy: user.email,
            status,
            logs: []
          }),
        }
      );

      res = await res.json();
      alert("Expediente creado");
      router.push("/");
    }
  };

  // handle upload

  return (
    <div
      className="container flex flex-col justify-start items-center m-4 mb-64"
      onLoad={console.log(user)}
    >
      <h1 className="text-3xl font-bold text-center text-blue-900 m-4">
        Generar expediente{" "}
      </h1>
      <div className="m-4 flex-col flex justify-start items-start">
        <TextInput
          labelx="Expediente"
          placeholder="Num de expediente"
          onChange={(e) => setExpediente(parseInt(e.target.value))}
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
        {user.level === "admin-top" && (
          <SelectInput
            labelx="Área"
            onChange={(e) => setArea(e.target.value)}
            selectOptions={["Legal", "Penal", "Jurídica", "Laboral"]}
            state={area}
          />
        )}

        <SelectInput
          labelx="Asunto"
          onChange={(e) => setIssue(e.target.value)}
          selectOptions={[
            "Amparo",
            "Laboral",
            "Civil",
            "Juicios de nulidad",
            "Acción pública",
            "Lesividad",
          ]}
          state={issue}
        />
        <SelectInput
          labelx="Estatus"
          onChange={(e) => setStatus(e.target.value)}
          selectOptions={["En proceso", "Finalizado"]}
          state={status}
        />
        <MainButton
          label="Crear expediente"
          onClick={handleCreate}
          color="bg-blue-700"
          hoverColor="bg-blue-500"
        />
      </div>
    </div>
  );
}
