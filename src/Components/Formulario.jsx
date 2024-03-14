import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {Toaster, toast } from "sonner";

export function Formulario() {
  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm("service_gpqnfjc", "template_mlyjv1i", form.current, {
        publicKey: "HvKkPH2ESC1N6RuTO",
      })
      .then(
        () => {
          toast.success('Mensaje enviado con exito');
        },
        (error) => {
          toast.error('Error al enviar el mensaje', error.text);
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      _subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      email: Yup.string()
        .email("Correo electrónico inválido")
        .required("El correo electrónico es obligatorio"),
      _subject: Yup.string().required("El asunto es obligatorio"),
      message: Yup.string().required("El mensaje es obligatorio"),
    }),

    onSubmit: (values, { resetForm }) => {
      sendEmail(); // Corrección: No necesitamos pasar e aquí
      resetForm();
    },
  });

  return (
    <div className="formulario">
      <form ref={form} onSubmit={formik.handleSubmit}>
        <label htmlFor="name" className="nombre">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && (
          <div className="error">{formik.errors.name}</div>
        )}

        <label htmlFor="email" className="email">
          {" "}
          Email{" "}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}

        <label htmlFor="_subject" className="_subject">
          {" "}
          Asunto{" "}
        </label>
        <input
          type="text"
          id="_subject"
          name="_subject"
          onChange={formik.handleChange}
          value={formik.values._subject}
        />
        {formik.errors._subject && (
          <div className="error">{formik.errors._subject}</div>
        )}

        <label htmlFor="message" className="msj">
          {" "}
          Mensaje{" "}
        </label>
        <textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
        ></textarea>
        {formik.errors.message && (
          <div className="error">{formik.errors.message}</div>
        )}

        <button className="btnEnviar" type="submit">
          ENVIAR
        </button>

        <Toaster className="alerta" richColors  position='top-right' dri='auto'/>
      </form>
    </div>
  );
}
