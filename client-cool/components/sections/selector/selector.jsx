import React from "react";
import SelectorCard from "../../cards/selectorCard/selectorCard";
import { useAppContext } from "../../../context/AppContext";

export default function Selector({ data }) {
  const { user } = useAppContext();

  return (
    <div className="container flex flex-col justify-start items-center m-4 mb-64">
      <h1 className="text-3xl font-bold text-center text-blue-900 m-4">
        Portal de archivos
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {data.map((item, index) => (
          <SelectorCard key={index} data={item} />
        ))}
        {user.level === "admin-top" && (
          <SelectorCard
            data={{
              link: "/crear-usuario",
              label: "Crear usuario",
              image:
                "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsPSIjZmZmIj4KICA8cGF0aCBkPSJtNDk3LjczIDM1NC42MmgtMTAwLjM0di0xMDAuMzRoLTQyLjc3djEwMC4zNGgtMTAwLjM0djQyLjc3aDEwMC4zNHYxMDAuMzRoNDIuNzd2LTEwMC4zNGgxMDAuMzR6Ii8+CiAgPHBhdGggZD0ibTUyNy45OSAyMjQuMDFjLTQwLjI3Ny00MC4xNjQtOTQuODQ4LTYyLjY5MS0xNTEuNzMtNjIuNjM3LTU2Ljg3OSAwLjA1MDc4MS0xMTEuNDEgMjIuNjg0LTE1MS42MSA2Mi45MjJzLTYyLjc4MSA5NC43ODktNjIuNzgxIDE1MS42NyAyMi41ODIgMTExLjQzIDYyLjc4MSAxNTEuNjdjNDAuMTk5IDQwLjIzOCA5NC43MyA2Mi44NzEgMTUxLjYxIDYyLjkyMiA1Ni44NzkgMC4wNTQ2ODcgMTExLjQ1LTIyLjQ3NyAxNTEuNzMtNjIuNjM3IDQwLjI0Ni00MC4zMjggNjIuODUyLTk0Ljk3NyA2Mi44NTItMTUxLjk1IDAtNTYuOTc3LTIyLjYwNS0xMTEuNjItNjIuODUyLTE1MS45NXptLTI3MC4zOSAyNzAuMzljLTMxLjIzOC0zMS4zNzUtNDguNzUtNzMuODU5LTQ4LjY4OC0xMTguMTMgMC4wNTg1OTMtNDQuMjczIDE3LjY5MS04Ni43MTUgNDkuMDItMTE4IDMxLjMyOC0zMS4yODUgNzMuNzg5LTQ4Ljg1NSAxMTguMDYtNDguODU1czg2LjczOCAxNy41NyAxMTguMDcgNDguODU1YzMxLjMyOCAzMS4yODEgNDguOTU3IDczLjcyMyA0OS4wMiAxMThzLTE3LjQ0OSA4Ni43NTgtNDguNjg4IDExOC4xM2MtMjAuNzY2IDIwLjgxMi00Ni42NTIgMzUuNzg1LTc1LjA0NyA0My40MDYtMjguMzk4IDcuNjIxMS01OC4zMDEgNy42MjExLTg2LjY5OSAwLTI4LjM5NS03LjYyMTEtNTQuMjgxLTIyLjU5NC03NS4wNDctNDMuNDA2eiIvPgogPC9nPgo8L3N2Zz4K",
              bg: "orange",
            }}
          />
        )}
      </div>
      {user && user.email}
    </div>
  );
}
