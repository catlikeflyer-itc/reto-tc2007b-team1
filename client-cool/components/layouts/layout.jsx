import React from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="w-full h-16"></div>
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
      <Footer />
      <footer className="bg-black text-white mk3 font-semibold p-4 text-center">
        Powered by Team 1
      </footer>
    </>
  );
}
