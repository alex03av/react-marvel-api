import React from "react";
import "../index.css";
function Cargando() {
  return (
    <div className="container__carga">
      <svg width="200" height="200" viewBox="0 0 100 100">
        <polyline
          className="line-cornered stroke-still"
          points="0,0 100,0 100,100"
          strokeWidth="10"
          fill="none"
        ></polyline>
        <polyline
          className="line-cornered stroke-still"
          points="0,0 0,100 100,100"
          strokeWidth="10"
          fill="none"
        ></polyline>
        <polyline
          className="line-cornered stroke-animation"
          points="0,0 100,0 100,100"
          strokeWidth="10"
          fill="none"
        ></polyline>
        <polyline
          className="line-cornered stroke-animation"
          points="0,0 0,100 100,100"
          strokeWidth="10"
          fill="none"
        ></polyline>
      </svg>
    </div>
  );
}

export default Cargando;
