import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Head from "./Head";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const cssClasses = isMenuOpen ? "grid-cols-[240px_1fr]" : "grid-cols-[1fr]";

  return (
    <>
      <Head />

      <div className={`grid h-full ${cssClasses}`}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
