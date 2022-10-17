import { useRouter } from "next/router";
import React from "react";
import { useAppContext } from "../../../context/AppContext";
import MainButton from "../../buttons/mainButton/mainButton";

export default function Looker({ routerParam }) {
  const expediente = routerParam;
  const { user } = useAppContext();
  const [exp, setExp] = React.useState({});
  const [docs, setDocs] = React.useState([]);
  const router = useRouter();

  React.useEffect(() => {
    const fetchData = async () => {
      fetch(
        "http://localhost:3000/api/documentos/get-docs?expedient=" + expediente,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setDocs(data);
        });
    };
    const fetchData2 = async () => {
      fetch(
        "http://localhost:3000/api/expedientes/get-exp?expedient=" + expediente,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setExp(data);
        });
    };
    const updateData = async () => {
      fetch(
        `http://localhost:3000/api/expedientes/log?expedient=${expediente}&email=${user.email}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
    };

    fetchData();
    fetchData2();
    updateData();
  }, []);

  const handleUpdate = () => {
    fetch(
      "http://localhost:3000/api/expedientes/update-expediente?expedient=" +
        expediente,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(exp),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Expediente actualizado");
        router.push("/");
      });
  };

  return (
    <div className="container flex flex-col justify-start items-center m-4 mb-64 w-full">
      <h1 className="text-3xl font-bold text-center text-blue-900 m-4">
        {exp.title}
      </h1>
      <div className="flex flex-col justify-start items-start w-full">
        <span className="text-md font-bold text-left text-blue-900 my-2">
          Expediente:
        </span>
        <p className="my-2">{exp.expediente}</p>
        <span className="text-md font-bold text-left text-blue-900 my-2">
          Descripcion:
        </span>
        <p className="my-2">{exp.desc}</p>
        <span className="text-md font-bold text-left text-blue-900 my-2">
          Area:
        </span>
        <p className="my-2">{exp.area}</p>
        <span className="text-md font-bold text-left text-blue-900 my-2">
          Asunto:
        </span>
        <p className="my-2">{exp.issue}</p>
        <span className="text-md font-bold text-left text-blue-900 my-2">
          Encargadx:
        </span>
        <p className="my-2">{exp.createdBy}</p>
        <span className="text-md font-bold text-left text-blue-900 my-2">
          Historial
        </span>
        <div className="overflow-scroll rounded-lg bg-gray-100 p-2 my-2 max-h-24">
          {exp.logs &&
            exp.logs.map((item, index) => (
              <p key={index} className="my-2">
                {item} - {item.user}
              </p>
            ))}
        </div>
        <span
          className={`text-md font-bold text-left ${
            exp.status === "En proceso" ? "text-green-500" : "text-red-500"
          }  my-2`}
        >
          {exp.status}
        </span>
        {(user.permission === false ||
          user.permission.includes(exp.expediente) ||
          user.email === exp.createdBy) &&
        exp.status !== "Finalizado" ? (
          <MainButton
            color="green"
            label="Cambiar estatus"
            onClick={handleUpdate}
          />
        ) : (
          <></>
        )}
      </div>
      {docs &&
        docs.map((doc) => (
          <div className="m-4 grid grid-cols-1 md:grid-cols-2 rounded-lg bg-gray-200 shadow-xl">
            <div className="flex flex-col justify-start items-start col-span-1 rounded-l-lg">
              <embed
                src={doc.file}
                width="500"
                height="375"
                type="application/pdf"
              />
            </div>
            <div className="flex flex-col justify-start items-start col-span-1 rounded-r-lg p-4">
              <h1>Folio: {doc.folio}</h1>
              <h1>Fecha: {doc.generatedAt}</h1>
              <h1>Subido por: {doc.createdBy}</h1>
            </div>
          </div>
        ))}
    </div>
  );
}
