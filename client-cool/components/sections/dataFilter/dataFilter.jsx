import Link from "next/link";
import React from "react";
import SelectInput from "../../inputs/selectInput/SelectInput";

const TableRow = ({ data }) => (
  <tr>
    <td>{data.expediente}</td>
    <td>
      <Link href={"/buscar/expediente/" + data.expediente}>
        <span className="underline text-blue-500 hover:text-cyan-300">
          {data.title}
        </span>
      </Link>
    </td>
    <td>{data.area}</td>
    <td>{data.issue}</td>
    <td>{data.createdBy}</td>
    <td>{data.generatedAt.split("T")[0]}</td>
  </tr>
);

export default function DataFilter({ title, filter }) {
  const [datax, setData] = React.useState("");
  const [filterx, setFilter] = React.useState("");

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

  const Show = () => (
    <div className="container flex flex-col justify-start items-center m-4 mb-64">
      <h1 className="text-3xl font-bold text-center text-blue-900 m-4">
        Buscar expedientes de {title}
      </h1>
      <div>{/** Add area information */}</div>
      <div className="flex flex-row justify-start items-start w-full">
        <SelectInput
          labelx="Asunto"
          selectOptions={[
            "Amparo",
            "Laboral",
            "Civil",
            "Juicios de nulidad",
            "Acción pública",
            "Lesividad",
          ]}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th>Expedientes</th>
            <th>Título</th>
            <th>Área</th>
            <th>Asunto</th>
            <th>Admin</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {/** Add filters */}
          {filter !== "todo"
            ? datax.map((item) => <TableRow data={item} />)
            : filterx === ""
            ? datax
                .filter((item) => item.area === filter)
                .map((item) => <TableRow data={item} />)
            : datax
                .filter((item) => item.area === filter)
                .filter((item) => item.issue === filterx)
                .map((item) => <TableRow data={item} />)}
        </tbody>
      </table>
    </div>
  );

  return <div>{datax ? <Show /> : <p>No hay expedientes</p>}</div>;
}
