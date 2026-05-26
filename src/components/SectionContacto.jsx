// src/components/SectionContacto.jsx
import React, { useEffect } from "react";

export default function SectionContacto() {
  useEffect(() => {
    const loadTally = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };

    if (window.Tally) {
      loadTally();
      return;
    }

    const script = document.querySelector(
      'script[src="https://tally.so/widgets/embed.js"]',
    );

    if (script) {
      script.addEventListener("load", loadTally);
      return () => script.removeEventListener("load", loadTally);
    }
  }, []);

  return (
    <section id="contacto" className="section bg-white text-dark">
      <div className="container">
        <div className="row align-items-start gx-lg-5 gy-4">
          {/* Datos de contacto */}
          <div className="col-lg-5">
            <h2 className="fw-semibold mb-4">Contacto</h2>

            <p>
              <strong>Email:</strong> info@hadelt.com
            </p>
            <p>
              <strong>Teléfono:</strong> +34 600 000 000
            </p>
            <p>
              <strong>Dirección:</strong> Polígono Industrial Delta, Barcelona
            </p>

            <div className="contact-legal-note mt-4">
              <p className="small mb-2">
                <strong>Información básica sobre protección de datos</strong>
              </p>
              <p className="small mb-1">
                Responsable: [NOMBRE / RAZÓN SOCIAL].
              </p>
              <p className="small mb-1">
                Finalidad: atender la solicitud de información enviada a través
                de este formulario.
              </p>
              <p className="small mb-1">
                Legitimación: consentimiento de la persona interesada.
              </p>
              <p className="small mb-1">
                Destinatarios: no se cederán datos a terceros, salvo obligación
                legal o proveedores necesarios para la gestión del formulario.
              </p>
              <p className="small mb-0">
                Derechos: puede acceder, rectificar y suprimir sus datos, así
                como ejercer otros derechos, escribiendo a [EMAIL].
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div className="col-lg-6 offset-lg-1">
            <div className="tally-embed-wrapper">
              <iframe
                data-tally-src="https://tally.so/embed/7RpYEZ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="799"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Formulario de solicitud de información Hadelt"
              >
                Cargando…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
