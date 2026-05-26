// src/components/SectionIconGrid.jsx
import React from "react";

export default function SectionIconGrid() {
  const iconos = [
    { icon: "bi-lightning-charge", texto: "Alta eficiencia" },
    { icon: "bi-pencil-square", texto: "Diseño industrial" },
    { icon: "bi-shield-check", texto: "Seguridad garantizada" },
    { icon: "bi-clock-history", texto: "Resistencias de larga duración" },
    { icon: "bi-people", texto: "Soporte técnico" },
  ];

  return (
    <section
      id="ofrecemos"
      className="section bg-primary text-white text-center"
    >
      <div className="container">
        <h2 className="fw-semibold mb-5">¿Qué obtienes con HADELT?</h2>
        <div className="row justify-content-center">
          {iconos.map((item, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2 mb-4">
              <i className={`bi ${item.icon} display-5 mb-2 text-accent`}></i>
              <p className="mb-0">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
