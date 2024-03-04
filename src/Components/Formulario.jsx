import "../Styles/styles.css";

export function Formulario() {
  return (
    <div className="formulario">
      <form
        action="https://formsubmit.co/Robledoalan.it@gmail.com"
        method="POST"
      >
        <h2>Envie un mail para contactarme:</h2>

        <label for="Nombre">Nombre</label>
        <input type="text" name="name" />

        <label for="email">Mail</label>
        <input type="email" name="email" />

        <label for="subject">Asunto</label>
        <input type="text" name="subject" />

        <label for="comments">Mensaje</label>
        <textarea name="comments" cols="15" rows="5"></textarea>

        <input className="btnEnviar" type="submit" value="Enviar" />

        <input type="hidden" name="_captcha" value="true" />
        <input type="hidden" name="_next" value="http://127.0.0.1:5500" />
      </form>
    </div>
  );
}
