import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Cargando from "./Cargando";
function ERRORPAGE({ valor }) {
  return (
    <>
      <Cargando />
      <span className="carga">
        {valor.length !== 0 ? (
          <section className="errormensaje">
            <h5>Buscando</h5>
          </section>
        ) : (
          <section className="errormensaje">
            <span className="e404">404</span>
            <span>Oops, it looks like an error has occurred.</span>

            <span className="otross">
              <Link to="/">Home</Link>
            </span>
          </section>
        )}
      </span>
    </>
  );
}

export default ERRORPAGE;
