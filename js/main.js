/*
 * El Cuscatleco — interacciones de la página.
 */

// Número de WhatsApp: solo dígitos con código de país (ej. "14845551234").
// PENDIENTE: poner el número real. Mientras esté vacío, los botones avisan que falta.
const WHATSAPP = "";
const WHATSAPP_MENSAJE = "Hola El Cuscatleco, quiero hacer un pedido:";

(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Fotos (definidas en images/fotos.js)
  const fotos = window.FOTOS || {};
  document.querySelectorAll("[data-foto]").forEach((img) => {
    const src = fotos[img.dataset.foto];
    if (!src) return;
    img.addEventListener("load", () => img.classList.add("is-loaded"), { once: true });
    img.src = src;
  });

  // Botones de WhatsApp
  const toast = document.getElementById("toast");
  let toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3200);
  }
  document.querySelectorAll(".js-whatsapp").forEach((a) => {
    if (WHATSAPP) {
      a.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(WHATSAPP_MENSAJE);
    } else {
      a.removeAttribute("target");
      a.addEventListener("click", (e) => {
        e.preventDefault();
        showToast("WhatsApp: número PENDIENTE. Mientras tanto, llámanos al (484) 461-3156.");
      });
    }
  });

  // Menú de navegación en celular
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });
  document.querySelectorAll("#navLinks a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );

  // Barra de navegación con fondo al bajar
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Pestañas del menú
  const tabs = Array.from(document.querySelectorAll(".tab"));
  function selectTab(tab) {
    tabs.forEach((t) => {
      const active = t === tab;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
      t.tabIndex = active ? 0 : -1;
      const panel = document.getElementById(t.getAttribute("aria-controls"));
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
      if (active) panel.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    });
    tab.scrollIntoView({ block: "nearest", inline: "center", behavior: reduceMotion ? "auto" : "smooth" });
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
      next.focus();
      selectTab(next);
    });
  });

  // Animaciones suaves al bajar la página
  const revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  // Resaltar el día de hoy en el horario
  const today = new Date().getDay();
  const row = document.querySelector('#hoursList [data-days="' + today + '"]');
  if (row) row.classList.add("is-today");

  document.getElementById("year").textContent = new Date().getFullYear();
})();
