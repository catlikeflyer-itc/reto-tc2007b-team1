import React from "react";
import Link from "next/link";

export default function DownloadButton({ link }, props) {
  return (
    <Link href={link}>
      <button
        className={`rounded-lg flex flex-row items-center justify-center py-2 px-2 bg-green-500 hover:bg-green-700 shadow-xl my-2 text-white`}
        {...props}
      >
        Descargar
      </button>
    </Link>
  );
}
