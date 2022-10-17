import React from "react";
import UploadExpedient from "../../components/sections/expedient/uploadExpedient";
import { useRouter } from "next/router";
import { useAppContext } from "../../context/AppContext";

export default function index() {
  const { user } = useAppContext();
  const router = useRouter();

  return (
    <>
      {user ? (
        <UploadExpedient />
      ) : (
        <div onLoad={() => router.push("/")}>Ingrese con su cuenta primero</div>
      )}
    </>
  );
}
