import "../Styles/styles.css"

export function PiePagina() {
  return (
    <footer className="pie">
      <div className="derechos">
        <div className="redes">
          <small>
            {" "}
            &copy;2024 <b>Robledo Alan</b>.
          </small>
          <a href="#" className="fa fa-linkedin"></a>
          <a href="#" className="fa fa-instagram"></a>
          <a href="#"  className="fa-brands fa-whatsapp "></a>
        </div>
      </div>
    </footer>
  );
}
