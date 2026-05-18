// src/components/SectionContacto.jsx
import React from "react";

export default function SectionContacto() {
  return (
    <section id="contacto" className="section bg-white text-dark">
      <div className="container">
        <h2 className="fw-semibold text-center mb-5">Contacto</h2>
        <div className="row">
          {/* Datos de contacto */}
          <div className="col-md-5 mb-4 mb-md-0">
            <p><strong>Email:</strong> info@hadelt.com</p>
            <p><strong>Teléfono:</strong> +34 600 000 000</p>
            <p><strong>Dirección:</strong> Polígono Industrial Delta, Barcelona</p>
          </div>

          {/* Formulario */}
          <div className="col-md-7">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Nombre" required />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Email" required />
                </div>
                <div className="col-12">
                  <input type="text" className="form-control" placeholder="Empresa" />
                </div>
                <div className="col-12">
                  <textarea className="form-control" rows="4" placeholder="Mensaje" required></textarea>
                </div>
                <div className="col-12 text-end">
                  <button type="submit" className="btn btn-primary">
                    Enviar mensaje
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
