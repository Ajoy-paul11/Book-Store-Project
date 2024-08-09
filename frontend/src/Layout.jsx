import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./pages";
function Layout() {
  return (
    <>
      <div className=" bg-slate-200 text-black dark:bg-slate-900 dark:text-slate-300">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
