// src/components/SectionFaq.jsx

const faqItems = [
  {
    icon: "bi-question-circle",
    question: "¿Tengo que saber exactamente qué resistencia necesito?",
    answer:
      "No. Puedes explicarnos tu aplicación, las condiciones de trabajo y las limitaciones de tu instalación. Te asesoramos para definir una solución adecuada.",
  },
  {
    icon: "bi-clipboard-check",
    question: "¿Qué información conviene enviar?",
    answer:
      "Uso previsto, medidas, potencia, tensión, temperatura, entorno de trabajo y cualquier requisito técnico que pueda afectar al diseño.",
  },
  {
    icon: "bi-gear",
    question: "¿Diseñáis resistencias a medida?",
    answer:
      "Sí. El objetivo es adaptar la resistencia a tu aplicación industrial, no obligarte a encajar tu caso en una solución genérica.",
  },
  {
    icon: "bi-check-circle",
    question: "¿La resistencia se entrega lista para mi aplicación?",
    answer:
      "HADELT diseña la solución y entrega una resistencia preparada para las condiciones de uso indicadas en el proyecto.",
  },
  {
    icon: "bi-calendar-check",
    question: "¿Trabajáis con plazos acordados?",
    answer:
      "Sí. Definir bien la necesidad desde el inicio ayuda a reducir ajustes, evitar bloqueos y avanzar con más seguridad en los tiempos previstos.",
  },
  {
    icon: "bi-arrow-right-circle",
    question: "¿Qué ocurre después de contactar?",
    answer:
      "Revisamos la información recibida, aclaramos los datos necesarios y te orientamos para avanzar con una propuesta ajustada a tu caso.",
  },
];

export default function SectionFaq() {
  return (
    <section id="faq" className="faq-section py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h2 className="section-title">Preguntas frecuentes</h2>
          </div>
        </div>

        <div className="row g-4">
          {faqItems.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.question}>
              <article className="faq-card h-100">
                <div className="faq-card-icon" aria-hidden="true">
                  <span>
                    <i className={`bi ${item.icon}`}></i>
                  </span>
                </div>

                <div className="faq-card-body">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
