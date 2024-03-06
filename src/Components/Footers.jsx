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
          <a href="https://www.linkedin.com/in/alan-robledo-44ba00267" className="fa fa-linkedin"></a>
          <a href="https://wa.me/qr/ONFHGZAR62OLA1" className="fa-brands fa-whatsapp "></a>
          <a href="mailto:robledoalan.it@gmail.com" className="fa-solid fa-envelope"></a>
        </div>
      </div>
    </footer>
  );
}
