import React from "react";

export default function Looker({ data, routerParam }) {
  const folio = routerParam;
  const [doc, setDoc] = React.useState({});

  React.useEffect(() => {
    if (folio) {
      data.map((item) => {
        if (item.folio === parseInt(folio)) {
          setDoc(item);
        }
      });
      console.log(doc);
    }
  }, []);

  return (
    <div className="container flex flex-col justify-start items-center m-4 mb-64">
      <h1 className="text-3xl font-bold text-center text-blue-900 m-4">
        {doc.title}
      </h1>
      <div className="m-4 grid grid-cols-1 md:grid-cols-2 rounded-lg bg-slate-200 shadow-xl">
        <div className="flex flex-col justify-start items-start col-span-1 rounded-l-lg">
          <embed
            src="https://www.africau.edu/images/default/sample.pdf"
            width="500"
            height="375"
            type="application/pdf"
          />
        </div>
        <div className="flex flex-col justify-start items-start col-span-1 rounded-r-lg p-2">
          <h1>Folio: {doc.folio}</h1>
          <h1>Fecha: {doc.fecha}</h1>
          <h1>Admin: {doc.admin}</h1>
        </div>
      </div>
    </div>
  );
}
