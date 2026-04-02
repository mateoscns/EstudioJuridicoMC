// ──────────────────────────────────────────────
// main.js — Punto de entrada JavaScript
// Importación modular de Bootstrap (sin jQuery)
// ──────────────────────────────────────────────

// SCSS
import '../scss/main.scss';

// Bootstrap JS — solo módulos necesarios
import { Collapse } from 'bootstrap';

// ── Smooth scroll para links internos ──
document.querySelectorAll('a[href^="#"], button[data-scroll]').forEach((el) => {
  el.addEventListener('click', (e) => {
    const target = el.getAttribute('href') || el.dataset.scroll;
    if (!target || target === '#') return;
    const section = document.querySelector(target);
    if (section) {
      e.preventDefault();
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ── WhatsApp link handler ──
const WA_NUMBER = '543814762190';
const WA_MESSAGE = encodeURIComponent(
  'Hola, me comunico desde la web del estudio. Quisiera realizar una consulta.'
);

document.querySelectorAll('[data-wa]').forEach((btn) => {
  btn.addEventListener('click', () => {
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`,
      '_blank',
      'noopener,noreferrer'
    );
  });
});
