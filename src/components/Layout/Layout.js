import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routes from "../../routers/Routers";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routes />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
