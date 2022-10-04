import React from "react";
import DownloadButton from "../../buttons/downloadButton/downloadButton";
import SelectInput from "../../inputs/selectInput/SelectInput";

const TableRow = ({ data }) => (
  <tr>
    <td>{data.folio}</td>
    <td>{data.title}</td>
    <td>{data.admin}</td>
    <td>{data.fecha}</td>
    <td>
      <DownloadButton link={data.link} />
    </td>
  </tr>
);

export default function DataFilter({ data, title }) {
  return (
    <div className="container flex flex-col justify-start items-center m-4 mb-64">
      <h1 className="text-3xl font-bold text-center text-blue-900 m-4">
        Buscar archivos de {title}
      </h1>
      <div>{/** Add category information */}</div>
      <div className="flex flex-row justify-start items-start w-full">
        <SelectInput label="Año" selectOptions={[2002, 2003, 2004]} />
        <SelectInput label="Nombre" selectOptions={["Jane Doe", "John Doe"]} />
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th>Folio</th>
            <th>Título</th>
            <th>Admin</th>
            <th>Fecha</th>
            <th>Descargar</th>
          </tr>
        </thead>
        <tbody>
          {/** Add filters */}
          {data.map((item) => (
            <TableRow data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
