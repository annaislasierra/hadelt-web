import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    const selector = ".reveal, .u-underline";
    const observeAll = () => {
      document.querySelectorAll(selector).forEach(el => io.observe(el));
    };

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target); // ya no hace falta volver a observarlo
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -15% 0px", // dispara un poco antes del borde inferior
        threshold: 0.15,
      }
    );

    // Observar lo que ya existe
    observeAll();

    // Por si se añaden nodos más tarde
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
