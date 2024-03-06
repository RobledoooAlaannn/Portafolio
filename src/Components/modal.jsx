import { Component } from "react";
import React from "react";
import Portal from "../portal";
import "../Styles/styles.css";

export default class Modal extends Component {
  render() {
    const { children, toggle, active, modalPara } = this.props;

    return (
      <Portal> {/* Utiliza el componente Portal para renderizar este modal fuera de la jerarquía de DOM normal */}
      {/* Si la prop 'active' es true, muestra el modal */}
        {active && (  
          <div style={styles.wrapper} > {/* Contenedor del modal */}
            <div style={modalPara ? styles.window : styles.windowRound }> {/* Ventana del modal */}
              <div className="modalSkills"> {children}</div> {/* Renderiza el contenido del modal */}
            </div>
            <div onClick={toggle} style={styles.background}/> {/* Un fondo opaco que se cierra cuando haces clic en él */}
          </div>
        )}
      </Portal>
    );
  }
}

const styles = {
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%", // Cambiado de 'heigth' a 'height'
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  window: {
    position: "relative",
    background: "#fff",
    borderRadius: 5,
    padding: 15,
    boxShadow: "2px 2px 10px rgba(0,0,0,0.3)",
    zIndex: 10,
    minWidth: 320,
  },
  windowRound: {
    position: "relative",
    background: "#fff",
    borderRadius: "50%", // Establece el radio para hacerlo circular
    width: "800px", // Tamaño del círculo
    height: "800px", // Tamaño del círculo
    padding: "15px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.3)",
    zIndex: 10,
    minWidth: 320,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: '#000',
    opacity: 0.8,
  }
};
