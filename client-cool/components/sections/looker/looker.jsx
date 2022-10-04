import React from "react";

export default function Looker({ data, routerParam }) {
  const folio = routerParam;
  const [doc, setDoc] = React.useState({});

  React.useEffect(() => {
    if (folio) {
      data.map((item) => {
        if (item.folio === folio) {
          setDoc(item);
        }
      });
      console.log(doc);
    }
  }, []);

  return (
    <div className="container flex flex-col justify-start items-center m-4 mb-64">
      <h1 className="text-3xl font-bold text-center text-blue-900 m-4">
        {data.title}
      </h1>
      <div className="m-4 grid grid-cols-1 md:grid-cols-2 rounded-lg bg-slate-200">
        <div className="flex flex-col justify-start items-start col-span-1 rounded-l-lg">
        <embed src="./test.pdf" width="800px" height="2100px" />

        </div>
        <div className="flex flex-col justify-start items-start col-span-1 rounded-r-lg p-2">
          <h1>Folio: {data.folio}</h1>
          <h1>Fecha: {data.fecha}</h1>
          <h1>Admin: {data.admin}</h1>
          <h1>Descripción: {data.description}</h1>
        </div>
      </div>
    </div>
  );
}
