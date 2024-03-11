import React, { useState } from "react";
import "../Styles/styles.css";
import FotoPerfil from "../img/PERFL.jpg";
import CV from "../img/Mi CV.pdf";
import Modal from "./modal";

export function Bibliografia() {
  const [modalabierto, setModalAbierto] = useState(false);

  const toggleInfo = () => {
    setModalAbierto(!modalabierto);
  };

  const [modalSkills, setSkills] = useState(false);

  const toggleSkills = () => {
    setSkills(!modalSkills);
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

          <div className="contenedorBtns">
            <button className="botonSaber" onClick={toggleInfo}>
              Saber más
            </button>

            <a download="Robledo Alan cv" href={CV} className="CV">
              Descargar CV{" "}
              <span>
                <i className="fa-solid fa-file-arrow-down"></i>
              </span>
            </a>

            <button className="botonSaber" onClick={toggleSkills}>
              Mis Skills
            </button>
          </div>

          {/*modal de habilidades*/}
          <Modal estado={modalSkills} cambiarEstado={setSkills}>
            <h1 className="skills">Habilidades</h1>
            <i className="fa-solid fa-database" id="skill"></i>
            <i className="fa-brands fa-python" id="skill"></i>
            <i className="fa-brands fa-java" id="skill"></i>
            <i className="fa-brands fa-js" id="skill"></i>
            <i className="fa-brands fa-css3" id="skill"></i>
            <i className="fa-brands fa-sass" id="skill"></i>
            <i className="fa-brands fa-php" id="skill"></i>
            <i className="fa-brands fa-react" id="skill"></i>
            <i className="fa-brands fa-node" id="skill"></i>
            <i className="fa-solid fa-registered" id="skill"></i>
            <i class="fa-brands fa-bootstrap" id="skill"></i>
            <i className="fab fa-cuttlefish" id="skill">
              ++
            </i>
            <i className="fab fa-cuttlefish" id="skill">
              #
            </i>
            <div className="contenedor-botonCerrar">
              <button className="botonCerrar" onClick={toggleSkills}>
                Cerrar
              </button>
            </div>
          </Modal>

          {/*modal información personal*/}
          <Modal estado={modalabierto} cambiarEstado={toggleInfo} modalPara={true}>
            <div modalabierto class="modalInfo">
              <h2>Estudios</h2>
              <ul>
                <li>
                  Escuela de educación secundaria n°2, Marcos Paz — BACHILLER EN
                  ECONOMÍA Y ADMINISTRACIÓN.
                </li>
                <li>
                  Universidad nacional del oeste, Merlo — Lic. en informática.
                  enero de 2020 - en curso
                </li>
                <li>
                  Asistente de Informática, Nombre de la institución — Duración
                  del itinerario
                </li>
              </ul>

              <h2>Hobbies</h2>
              <ul>
                <li>Entrenar/Boxeo</li>
                <li>Aprender/descubrir nuevas tecnologías</li>
                <li>
                  Leer libros de crecimiento personal o de ciencia ficcion
                </li>
              </ul>

              <h2>Nivel de Inglés</h2>
              <p>Basico</p>

              <div className="contenedor-botonCerrar">
                <button className="botonCerrar" onClick={toggleInfo}>
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
