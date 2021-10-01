import React, { useState } from "react";
import { Context } from "../../context/theme";

export const Theme = () => {
  const { theme, onToggle } = useContext(Context);

  return (
    <button type="button" onClick={onToggle}>
      {theme === "light" ? "light" : "dark"}
    </button>
  );
};
