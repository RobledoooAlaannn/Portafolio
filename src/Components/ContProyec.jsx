import "../Styles/styles.css";
import ejemplo from "../img/ejemplo.png";

export function ContProyec() {
  return (
    <div className="contProyecto">
      <div className="contProyecto-contDescripcion">
        <h2 className="contProyecto-contDescricion-titulo">
          Titulo del Proyecto
        </h2>
        <p className="contProyecto-contDescricion-descripcion">
          Descripción del proyecto...
        </p>
        <div className="contProyecto-contDescricion-contTecno">
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-css3"></i>
          <i class="fa-brands fa-node-js"></i>
        </div>
      </div>
      <div className="contProyecto2">
        <div className="contProyecto-img">
          <img
            className="img-proyecto"
            src={ejemplo}
            alt="captura de gpt"
            loading="lazy"
          />
        </div>
        <div className="contProyecto-contDescricion-contTecno">
          <i class="fa-solid fa-globe"></i>
          <i class="fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  );
}
