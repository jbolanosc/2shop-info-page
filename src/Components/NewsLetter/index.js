import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function index() {
  const notify = () =>
    toast("Gracias por suscribirte, pronto recibiras la mejor información");
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-center text-primary covered">Suscribete</h2>
      <h4 className="text-center">
        Para obtener la información más reciente :)
      </h4>
      <div className="d-flex justify-content-center align-items-center">
        <form
          action={process.env.REACT_APP_MAILCHIMP_URL}
          className="d-flex border border-primary rounded"
        >
          <input
            type="text"
            className="form-control border-0"
            name="email"
            placeholder="Escribe tu correo"
          />
          <input
            type="submit"
            className="btn btn-primary rounded-0"
            value="Suscribirse"
          />
        </form>
      </div>
    </div>
  );
}
