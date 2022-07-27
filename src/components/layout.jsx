import React from "react";
import "./index.sass";
import "./App.sass";
import NavBar from "./navbar";

export const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);
