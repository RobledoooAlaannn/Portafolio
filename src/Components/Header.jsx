import "../Styles/styles.css";
import { useState } from "react";

export function Encabezado({activeLink,setActiveLink}) {

  const handleClick = (linkId) => {
    setActiveLink(linkId);
  };

  return (
    <div className="div-inicio-principal">
      <div className="div-inicio">
        <a
          id="proyectos"
          className={activeLink !== "proyectos" ? "inicio" : "seleccionado"}
          onClick={() => handleClick("proyectos")}
        >
          Mis proyectos
        </a>
      </div>
      <div className="div-inicio">
        <a
          id="persona"
          className={activeLink !== "persona" ? "inicio" : "seleccionado"}
          onClick={() => handleClick("persona")}
        >
          Mi persona
        </a>
      </div>
      <div className="div-inicio">
        <a
          id="contacto"
          className={activeLink !== "contacto" ? "inicio" : "seleccionado"}
          onClick={() => handleClick("contacto")}
        >
          Mi contacto
        </a>
      </div>
    </div>
  );
}
