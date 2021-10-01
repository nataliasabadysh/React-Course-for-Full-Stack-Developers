// Core
import React from "react";
// Instruments
import { LayoutWrapper } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <LayoutWrapper theme={""}>
      <div
        style={{
          textTransform: "uppercase",
          cursor: "pointer",
          textAlign: "end",
        }}
      ></div>
      {children}
    </LayoutWrapper>
  );
};
