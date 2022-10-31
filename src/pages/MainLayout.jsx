import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const MainLayout = () => {
  return (
    <main className="main-layout__position">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
