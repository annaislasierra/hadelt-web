// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top py-2"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container">
        {/* Logo (placeholder) */}
        <a className="navbar-brand fw-semibold" href="#inicio" aria-label="Ir al inicio">
          LOGO
        </a>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Alternar navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#inicio">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#seccion2">
                Sección 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#seccion3">
                Sección 3
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
