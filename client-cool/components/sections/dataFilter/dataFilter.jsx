import Link from "next/link";
import React from "react";

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
  {
    slug: "todos",
    title: "todo",
  },
];

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
    <td>{areas.find((item) => item.slug === data.area).title}</td>
    <td>{data.issue}</td>
    <td>{data.createdBy}</td>
    <td>{data.generatedAt.split("T")[0]}</td>
  </tr>
);

export default function DataFilter({ title, filter }) {
  const [datax, setData] = React.useState("");

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
          {filter === "todos"
            ? datax.map((item) => <TableRow data={item} />)
            : datax
                .filter((item) => item.area === filter)
                .map((item) => <TableRow data={item} />)}
        </tbody>
      </table>
    </div>
  );

  return <div>{datax ? <Show /> : <p>No hay expedientes</p>}</div>;
}
