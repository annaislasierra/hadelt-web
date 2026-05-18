// src/components/SectionHero.jsx
import React from "react";

export default function SectionHero() {
  return (
    <section id="inicio" className="section bg-primary text-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Texto */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="fw-bold mb-3">Diseño de <span className="u-underline reveal">resistencias</span> industriales</h1>
            <p>
              Ofrecemos soluciones personalizadas para fábricas y empresas que necesitan resistencias
              fiables y de <span className="u-underline">alto rendimiento</span>. Ingeniería, calidad y servicio a su medida.
            </p>
            <p>
              Ofrecemos soluciones personalizadas para fábricas y empresas que necesitan resistencias
              fiables y de <span className="u-underline">alto rendimiento</span>. Ingeniería, calidad y servicio a su medida.
            </p>
            <p>
              Ofrecemos soluciones personalizadas para fábricas y empresas que necesitan resistencias
              fiables y de <span className="u-underline">alto rendimiento</span>. Ingeniería, calidad y servicio a su medida.
            </p>
            <a href="#contacto" className="btn btn-light mt-3">
              Solicitar información
            </a>
          </div>

          {/* Imagen simulada */}
          <div className="col-md-6 text-center">
            <div
              className="bg-light rounded"
              style={{
                height: "250px",
                width: "100%",
                opacity: 0.4,
              }}
            >
              <p className="text-dark pt-5">[ Imagen simulada ]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
