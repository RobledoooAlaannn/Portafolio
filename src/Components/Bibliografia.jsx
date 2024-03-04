import React, { useState } from "react";
import "../Styles/styles.css";
import FotoPerfil from "../img/PERFL.jpg";
import CV from "../img/Mi CV.pdf";
import Modal from "./modal";

export function Bibliografia() {
  const [modalAbierto, setModalAbierto] = useState(false);

  const toggle = () => {
    setModalAbierto(!modalAbierto);
  };

  return (
    <div className="contenedorPerfil">
      <div className="contImag">
        <img className="Foto_perfil" src={FotoPerfil} alt="Foto de perfil" />
      </div>
      <div className="contBibliografia">
        <h2 id="nombre">Nombre: Alan Robledo</h2>
        <h2 id="nacimiento">FdN: 09/11/2001</h2>
        <div className="descripcion">
          <p>
            ¡Hola! Soy Alan, un apasionado de la informática con 22 años de edad
            y en camino de convertirme en Analista en Sistemas. Actualmente
            estoy cursando la Licenciatura en Informática en la prestigiosa
            Universidad Nacional del Oeste. Estoy emocionado de compartir mi
            trayectoria contigo. Me encuentro en la etapa final de mi carrera, a
            solo dos materias de obtener mi título de Analista en Sistemas, lo
            que demuestra mi dedicación y compromiso con la excelencia
            académica. Mi formación académica me ha proporcionado una sólida
            base en programación, diseño de sistemas y resolución de problemas,
            habilidades que estoy ansioso por aplicar en proyectos del mundo
            real. Además de mi pasión por la informática, tengo diversos
            intereses que enriquecen mi vida. Uno de mis hobbies favoritos es el
            boxeo, donde encuentro una forma de mantenerme en forma física y
            mentalmente. Creo firmemente que esta diversidad de intereses me
            proporciona una perspectiva única y habilidades transferibles que
            pueden beneficiar mi trabajo como programador. Estoy emocionado de
            seguir creciendo profesionalmente y enfrentar nuevos desafíos en el
            mundo de la tecnología. ¡Espero poder compartir mi experiencia y
            contribuir al éxito de futuros proyectos! ¡Gracias por visitar mi
            portafolio!
          </p>
          <button class="botonSaber" onClick={toggle}>
            Saber más
          </button>

          <a download="Robledo Alan cv" href={CV} className="CV">
            {" "}
            Descargar CV
          </a>

          <button class="botonSaber">
            Mis Skills
          </button>

          <Modal active={modalAbierto} toggle={toggle}>
            <div modalAbierto class="modalInfo">
              <p>
                ¡Hola! Soy Alan, un apasionado de la informática con 22 años de
              </p>
              <div class="contenedor-botonCerrar">
                <button class="botonCerrar" onClick={toggle}>
                  Cerrar
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
