// src/components/Navbar.jsx
import React from "react";
import logoNegativo from "../assets/logo-negativo.png";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top py-2"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#inicio" aria-label="Ir al inicio">
          <img
            src={logoNegativo}
            alt="Hadelt"
            style={{ height: "80px", width: "auto", display: "block" }}
          />
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
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ofrecemos">
                ¿Qué te ofrecemos?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
