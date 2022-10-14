import React from "react";
import UploadDocument from "../../components/sections/uploader/uploadDocument";
import { useRouter } from "next/router";
import { useAppContext } from "../../context/AppContext";

export default function index() {
  const { user } = useAppContext();
  const router = useRouter();

  return (
    <>
      {user ? (
        <UploadDocument />
      ) : (
        <div onLoad={() => router.push("/")}>Ingrese con su cuenta primero</div>
      )}
    </>
  );
}
