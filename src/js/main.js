import '../scss/main.scss';

document.querySelectorAll('a[href^="#"], button[data-scroll]').forEach((el) => {
  el.addEventListener('click', (e) => {
    const target = el.getAttribute('href') || el.dataset.scroll;
    if (!target || target === '#') return;

    const section = document.querySelector(target);
    if (!section) return;

    e.preventDefault();
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

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
