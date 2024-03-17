import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainApp from "./components/Main";

const rootElement = document.getElementById("Home");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);
