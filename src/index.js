import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Encabezado } from "./Components/Header";
import { PiePagina } from "./Components/Footers";
import { Formulario } from "./Components/Formulario";
import { Bibliografia } from "./Components/Bibliografia";
import { Proyectos } from "./Components/Proyectos";

function App() {
  const [activeLink, setActiveLink] = useState("persona");

  return (
    <>
      <Encabezado activeLink={activeLink} setActiveLink={setActiveLink} />

      {/* Contenido que cambia según el enlace activo */}
      {activeLink === "proyectos" && <Proyectos />}
      {activeLink === "persona" && <Bibliografia />}
      {activeLink === "contacto" && <Formulario />}

      <PiePagina />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")); //Crea el elemento raiz de react

root.render(<App />);
