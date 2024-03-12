import React from "react";
import styled from "styled-components";

const Modal = ({
  children,
  estado,
  mostrarOverlay,
  posicionModal,
  padding,
}) => {
  return (
    <>
      {estado && (
        <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
          <ContenedorModal padding={padding}>{children}</ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

export default Modal;
const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) =>
    props.mostrarOverlay ? "rgba(0,0,0,.8)" : "rgba(0,0,0,.0)"};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Evita el scrolling en el overlay */

  @media screen and (max-width: 768px) {
    padding: 20px;
    /* Reducir el padding en pantallas más pequeñas */
  }
`;

const ContenedorModal = styled.div`
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: ${(props) => (props.padding ? props.padding : "20px")};
  max-height: 80vh;
  overflow-y: auto; /* Agrega scrolling interno al modal */
  max-width: 80%; /* Ajusta el ancho del modal */
`;