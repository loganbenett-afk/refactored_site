/**
 * pages.js — Shared scroll-reveal animations for secondary pages.
 * Uses the .dcg-reveal / .dcg-visible classes defined in styles.css.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll Reveal ──────────────────────────────────────────────
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('dcg-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.dcg-reveal').forEach((el) => {
    revealObserver.observe(el);
  });

});
