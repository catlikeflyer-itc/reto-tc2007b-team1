import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const icons = {
  Facebook: <FaFacebook />,
  Instagram: <FaInstagram />,
  WhatsApp: <FaWhatsapp />,
};

export default function Sociallink({ href, children }) {
  return (
    <Link href={href} className="text-white">
      <span className="text-white m-2 font-bold hover:text-slate-300 text-xl">{icons[children]}</span>
    </Link>
  );
}
