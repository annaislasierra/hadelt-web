// src/components/SectionHero.jsx
import React from "react";
import heroImg from "../assets/hero-resistencias.webp";

export default function SectionHero() {
  return (
    <section id="inicio" className="section bg-primary text-white">
      <div className="container">
        <div className="row align-items-center gx-lg-5 gy-4">
          {/* Texto */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="fw-bold mb-3">
              Diseño de <span className="u-underline reveal">resistencias</span>{" "}
              industriales. 100 % a tu medida
            </h1>
            <p>
              Dinos qué necesitas calentar, en qué condiciones va a trabajar la
              resistencia y qué limitaciones tiene tu instalación. En HADELT te
              asesoramos si lo necesitas, diseñamos la solución y te entregamos
              una resistencia preparada para tu aplicación.
            </p>
            <p>
              Tendrás una resistencia{" "}
              <span className="u-underline reveal">fiable</span>, de{" "}
              <span className="u-underline reveal">alto rendimiento</span> y
              entregada en{" "}
              <span className="u-underline reveal">el plazo acordado</span>.
              Menos incertidumbre técnica, menos tiempo perdido en ajustes y más
              tranquilidad para seguir adelante con tu proyecto.
            </p>
            <a href="#contacto" className="btn btn-light mt-3">
              Cuéntanos tu caso
            </a>
          </div>
          {/* Imagen simulada */}
          {/* Imagen principal */}
          <div className="col-md-6">
            <div className="hero-image-frame">
              <img
                src={heroImg}
                alt="Algunas resistencias industriales con las que trabaja Hadelt"
                className="img-fluid hero-image"
                width="800"
                height="500"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
