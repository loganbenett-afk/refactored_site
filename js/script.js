// ═══════════════════════════════════════════════════════════
//  script.js  —  Global component loader + UI behaviours
// ═══════════════════════════════════════════════════════════

// ── Component Loader ────────────────────────────────────────
async function loadComponent(id, path, basePath) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    let html = await response.text();
    html = html.replace(/\{\{BASE_PATH\}\}/g, basePath);

    const element = document.getElementById(id);
    if (!element) return;

    element.innerHTML = html;

    // ── Execute any <script> tags injected into the component
    element.querySelectorAll('script').forEach((oldScript) => {
      const newScript = document.createElement('script');
      Array.from(oldScript.attributes).forEach(attr =>
        newScript.setAttribute(attr.name, attr.value)
      );
      newScript.textContent = oldScript.textContent;
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });

    // ── Header-specific init
    if (id === 'site-header') {
      initHeaderBehaviours();
      setActiveNavLink(element);
    }

  } catch (err) {
    console.error(`Failed to load component: ${path}`, err);
  }
}

// ── Active nav link highlighter ─────────────────────────────
function setActiveNavLink(headerEl) {
  const currentPath = window.location.pathname;
  const allLinks = headerEl.querySelectorAll(
    '.dcg-nav-menu a, .dcg-mobile-menu a'
  );

  allLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (!href) return;

    let pathName = currentPath;
    if (pathName.endsWith('/') || pathName === '') pathName += 'index.html';

    const fileName = href.split('/').pop();
    if (fileName && pathName.endsWith(fileName)) {
      link.classList.add('active');
    }
  });
}

// ── Header behaviours (scroll hide/show + mobile menu) ──────
function initHeaderBehaviours() {
  const header = document.getElementById('dcgHeader');
  if (!header) return;

  // — Scroll effect (scrolled background)
  function handleScrollStyle() {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }

  // — Hide on scroll DOWN, reveal on scroll UP
  let lastScrollY = window.scrollY;
  let ticking = false;

  function handleScrollDirection() {
    const current = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(() => {
        // Always show near the very top
        if (current < 80) {
          header.classList.remove('dcg-nav-hidden');
        } else if (current > lastScrollY + 6) {
          // Scrolling DOWN — hide
          header.classList.add('dcg-nav-hidden');
          // Close mobile menu if open
          const mobileMenu = document.getElementById('dcgMobileMenu');
          if (mobileMenu) mobileMenu.style.display = 'none';
        } else if (current < lastScrollY - 6) {
          // Scrolling UP — reveal
          header.classList.remove('dcg-nav-hidden');
        }
        lastScrollY = current;
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', handleScrollStyle,      { passive: true });
  window.addEventListener('scroll', handleScrollDirection,  { passive: true });
  handleScrollStyle();

  // — Mobile toggle
  const toggle   = document.getElementById('dcgMobileToggle');
  const mobileMenu = document.getElementById('dcgMobileMenu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileMenu.style.display === 'flex';
      mobileMenu.style.display = isOpen ? 'none' : 'flex';
    });
  }
}

// ── Scroll-to-Top button ────────────────────────────────────
function initScrollToTop() {
  const btn = document.createElement('button');
  btn.id = 'dcgScrollTop';
  btn.setAttribute('aria-label', 'Scroll to top');
  btn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2.5"
         stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 19V5M5 12l7-7 7 7"/>
    </svg>`;
  document.body.appendChild(btn);

  btn.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );

  window.addEventListener('scroll', () => {
    btn.classList.toggle('dcg-scroll-top-visible', window.scrollY > 400);
  }, { passive: true });
}

// ── Scroll Reveal (global .dcg-reveal elements) ─────────────
function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('dcg-visible');
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.dcg-reveal').forEach(el => observer.observe(el));
}

// ── Bootstrap ────────────────────────────────────────────────
function init() {
  const isInPages = window.location.pathname.includes('/pages/');
  const basePath  = isInPages ? '../' : './';

  if (document.getElementById('site-header')) {
    loadComponent('site-header', `${basePath}components/header.html`, basePath);
  }
  if (document.getElementById('site-footer')) {
    loadComponent('site-footer', `${basePath}components/footer.html`, basePath);
  }

  initScrollToTop();
  initScrollReveal();
}

// ── Fix: DOMContentLoaded may have already fired when script
//    is placed at the bottom of <body>. Check readyState first.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}