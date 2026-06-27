// ═══════════════════════════════════════════════════════════
//  script.js  —  Global component loader + UI behaviours
// ═══════════════════════════════════════════════════════════

// ── Component Loader ────────────────────────────────────────
// HTML-only templates — CSS lives in css/components.css,
// JS behaviours are initialised by initHeaderBehaviours().

const HEADER_HTML = `
<header class="dcg-header" id="dcgHeader">

  <div class="dcg-header-container">

    <!-- LOGO -->

    <a href="{{BASE_PATH}}index.html" class="dcg-logo-wrap">
      <img 
        src="{{BASE_PATH}}images/logo.png"
        alt="Decades Capital Group"
        class="dcg-logo"
      >
    </a>

    <!-- NAVIGATION -->

    <nav class="dcg-nav">

      <ul class="dcg-nav-menu">

        <li>
          <a href="{{BASE_PATH}}index.html">Home</a>
        </li>

        <li>
          <a href="{{BASE_PATH}}pages/about.html">About Us</a>
        </li>

        <li>
          <a href="{{BASE_PATH}}pages/leadership.html">Leadership</a>
        </li>

        <li>
          <a href="{{BASE_PATH}}pages/opportunities.html">Opportunities</a>
        </li>
        
        <li>
          <a href="{{BASE_PATH}}pages/track-record.html">Track Record</a>
        </li>
        
        <li>
          <a href="{{BASE_PATH}}pages/case-studies.html">Case Studies</a>
        </li>

        <li>
          <a href="{{BASE_PATH}}pages/market.html">Market</a>
        </li>

        <li>
          <a href="{{BASE_PATH}}pages/resources.html">Resources</a>
        </li>

        <li>
          <a href="{{BASE_PATH}}pages/faq.html">FAQ</a>
        </li>

        <li>
          <a href="{{BASE_PATH}}pages/contact.html">Contact</a>
        </li>

      </ul>

    </nav>

    <!-- CTA -->

    <a href="https://investor.avestorinc.com/decadescapital" target="_blank" rel="noopener noreferrer" class="dcg-header-btn">
      INVESTOR PORTAL
    </a>

    <!-- MOBILE MENU -->

    <button class="dcg-mobile-toggle" id="dcgMobileToggle">

      <span></span>
      <span></span>
      <span></span>

    </button>

  </div>

  <!-- MOBILE NAV -->

  <div class="dcg-mobile-menu" id="dcgMobileMenu">

    <a href="{{BASE_PATH}}index.html">Home</a>
    <a href="{{BASE_PATH}}pages/about.html">About Us</a>
    <a href="{{BASE_PATH}}pages/leadership.html">Leadership</a>
    <a href="{{BASE_PATH}}pages/opportunities.html">Opportunities</a>
    <a href="{{BASE_PATH}}pages/track-record.html">Track Record</a>
    <a href="{{BASE_PATH}}pages/case-studies.html">Case Studies</a>
    <a href="{{BASE_PATH}}pages/market.html">Market</a>
    <a href="{{BASE_PATH}}pages/resources.html">Resources</a>
    <a href="{{BASE_PATH}}pages/faq.html">FAQ</a>
    <a href="{{BASE_PATH}}pages/contact.html">Contact</a>

    <a href="https://investor.avestorinc.com/decadescapital" target="_blank" rel="noopener noreferrer" class="dcg-mobile-btn">
      INVESTOR PORTAL
    </a>

  </div>

</header>`;

const FOOTER_HTML = `<!-- FOOTER -->
<footer class="dcg-footer">
  <div class="dcg-footer-container">
    <div class="dcg-footer-top">
      <div class="dcg-footer-brand">
        <a href="{{BASE_PATH}}index.html" class="dcg-footer-logo">
          <img
            src="{{BASE_PATH}}images/logo.png"
            alt="Decades Capital Group">
        </a>
        <p>A private investment firm giving investors access to professionally managed hotel investments designed for
          long-term appreciation and consistent cash flow.</p>
        <p class="dcg-footer-location">📍 Austin, Texas</p>
        <div class="dcg-social-icons">
          <a href="#" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
      <div class="dcg-footer-col">
        <h5>Company</h5>
        <a href="{{BASE_PATH}}pages/about.html">About Us</a>
        <a href="{{BASE_PATH}}pages/leadership.html">Leadership</a>
        <a href="{{BASE_PATH}}pages/why-invest.html">Why Invest</a>
        <a href="{{BASE_PATH}}pages/contact.html">Get in Touch</a>
      </div>
      <div class="dcg-footer-col">
        <h5>Invest</h5>
        <a href="{{BASE_PATH}}pages/opportunities.html">Opportunities</a>
        <a href="{{BASE_PATH}}pages/track-record.html">Track Record</a>
        <a href="{{BASE_PATH}}pages/case-studies.html">Case Studies</a>
        <a href="{{BASE_PATH}}pages/market.html">Market</a>
        <a href="{{BASE_PATH}}pages/resources.html">Resources</a>
        <a href="{{BASE_PATH}}pages/faq.html">FAQ</a>
        <a href="https://investor.avestorinc.com/decadescapital" target="_blank" rel="noopener noreferrer">Investor Portal</a>
      </div>
      <div class="dcg-footer-col">
        <h5>Connect</h5>
        <a href="mailto:shariq@decadescapitalgroup.com">shariq@decadescapitalgroup.com</a>
        <a href="tel:+16789787222">(678) 978-7222</a>
        <a href="{{BASE_PATH}}pages/contact.html" class="dcg-footer-contact-btn">Contact Us</a>
      </div>
    </div>
    <div class="dcg-footer-legal">
      <p class="dcg-footer-disclaimer">This website is for informational purposes only and does not constitute an offer
        to sell or solicitation of an offer to buy any security. Investments are available to accredited investors only
        as defined by SEC regulations.</p>
      <div class="dcg-footer-bottom">
        <div class="dcg-footer-bottom-links">
          <a href="{{BASE_PATH}}pages/privacy-policy.html">Privacy Policy</a>
          <a href="{{BASE_PATH}}pages/terms-of-service.html">Terms of Service</a>
        </div>
        <p class="dcg-footer-copyright">&copy; 2026 Decades Capital Group. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>`;

function loadComponent(id, basePath) {
  try {
    let html = id === 'site-header' ? HEADER_HTML : FOOTER_HTML;
    html = html.replace(/\{\{BASE_PATH\}\}/g, basePath);

    const element = document.getElementById(id);
    if (!element) return;

    element.innerHTML = html;

    if (id === 'site-header') {
      initHeaderBehaviours();
      setActiveNavLink(element);
    }
  } catch (err) {
    console.error('Failed to load component: ' + id, err);
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
    loadComponent('site-header', basePath);
  }
  if (document.getElementById('site-footer')) {
    loadComponent('site-footer', basePath);
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
