// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-light py-4">
      <div className="container text-center small">
        <p className="mb-1">&copy; {new Date().getFullYear()} Hadelt. Todos los derechos reservados.</p>
        <a href="#aviso" className="text-accent me-3">Aviso legal</a>
        <a href="#privacidad" className="text-accent me-3">Política de privacidad</a>
        <a href="#cookies" className="text-accent">Política de cookies</a>
      </div>
    </footer>
  );
}
