// src/components/SectionMediaLeft.jsx
import React from "react";

export default function SectionMediaLeft() {
  return (
    <section id="seccion2" className="section bg-white text-dark">
      <div className="container">
        <div className="row align-items-center flex-md-row-reverse">
          {/* Texto a la derecha (entra desde la derecha) */}
          <div className="col-md-6 mb-4 mb-md-0 reveal from-right">
            <h2 className="fw-semibold mb-3">Calidad y precisión en cada proyecto</h2>
            <p>
              Nuestro equipo desarrolla resistencias adaptadas a las{" "}
              <span className="u-underline">necesidades técnicas</span> y ambientales de cada proceso
              industrial. Trabajamos con materiales certificados y garantizamos la trazabilidad
              completa de cada componente.
            </p>
            <p>
              Desde el diseño inicial hasta la producción final, cuidamos cada detalle para asegurar
              el máximo rendimiento.
            </p>
          </div>

          {/* Imágenes a la izquierda (entran desde la izquierda) */}
          <div className="col-md-6 text-center">
            <div
              className="bg-secondary rounded mb-3 reveal from-left"
              style={{ height: "140px", opacity: 0.3 }}
              aria-label="Imagen simulada 1"
            >
              [ Imagen 1 ]
            </div>
            <div
              className="bg-secondary rounded reveal from-left"
              style={{ height: "140px", opacity: 0.3 }}
              aria-label="Imagen simulada 2"
            >
              [ Imagen 2 ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
