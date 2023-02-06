import React from "react";
import "./Helmet.scss";

const Helmet = ({ title, children }) => {
  document.title=title
  return <div className="w-100">{children}</div>;
};

export default Helmet;
