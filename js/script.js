// ═══════════════════════════════════════════════════════════
//  script.js  —  Global component loader + UI behaviours
// ═══════════════════════════════════════════════════════════

// ── Component Loader ────────────────────────────────────────
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
          <a href="{{BASE_PATH}}pages/resources.html">Resources</a>
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

</header>

<style>

/* =========================
   FORCE COLORS
========================= */

#dcgHeader,
#dcgHeader *{
  box-sizing:border-box;
}

/* =========================
   ROOT VARIABLES
========================= */

:root{
  --dcg-gold:#916B1D;
  --dcg-dark:#121519;
  --dcg-white:#FFFFFF;
  --dcg-text:#D5D7DA;
}

/* =========================
   HEADER
========================= */

#dcgHeader.dcg-header{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index:99999;

  background:transparent;

  transition:
    transform .45s ease,
    background .45s ease,
    backdrop-filter .45s ease,
    padding .45s ease,
    box-shadow .45s ease;

  padding:18px 0;

  border-bottom:1px solid rgba(255,255,255,0.08);
  transform: translateY(0);
}

/* HIDE ON SCROLL DOWN */
#dcgHeader.dcg-nav-hidden {
  transform: translateY(-100%);
}

/* SCROLLED */

#dcgHeader.scrolled{
  background:#121519 !important;

  backdrop-filter:blur(14px);

  box-shadow:
    0 8px 28px rgba(0,0,0,0.28);

  border-bottom:1px solid rgba(255,255,255,0.06);
}

/* =========================
   CONTAINER
========================= */

#dcgHeader .dcg-header-container{
  width:100%;
  max-width:1320px;

  margin:0 auto;

  display:flex;
  align-items:center;
  justify-content:space-between;

  padding:0 28px;
}

/* =========================
   LOGO
========================= */

#dcgHeader .dcg-logo-wrap{
  display:flex;
  align-items:center;
  text-decoration:none;
}

#dcgHeader .dcg-logo{
  width:auto;
  height:48px;
  object-fit:contain;
  display:block;
}

/* =========================
   NAVIGATION
========================= */

#dcgHeader .dcg-nav{
  display:flex;
  align-items:center;
}

#dcgHeader .dcg-nav-menu{
  display:flex;
  align-items:center;
  gap:24px;

  list-style:none;
  margin:0;
  padding:0;
}

#dcgHeader .dcg-nav-menu li{
  position:relative;
}

#dcgHeader .dcg-nav-menu li a{
  position:relative;

  color:#D7D9DC !important;

  text-decoration:none !important;

  font-size:15px;
  font-weight:500;
  font-family:"Inter",sans-serif;

  transition:
    color .3s ease;

  display:flex;
  align-items:center;
  gap:6px;
}

/* ACTIVE */

#dcgHeader .dcg-nav-menu li a.active{
  color:#916B1D !important;
}

/* HOVER */

#dcgHeader .dcg-nav-menu li a:hover{
  color:#916B1D !important;
}

/* UNDERLINE */

#dcgHeader .dcg-nav-menu li a::after{
  content:"";

  position:absolute;
  left:0;
  bottom:-8px;

  width:0%;
  height:1px;

  background:#916B1D;

  transition:width .35s ease;
}

#dcgHeader .dcg-nav-menu li a:hover::after,
#dcgHeader .dcg-nav-menu li a.active::after{
  width:100%;
}

/* DROPDOWN ICON */

#dcgHeader .dcg-dropdown svg{
  width:14px;
  height:14px;
}

/* =========================
   BUTTON
========================= */

#dcgHeader .dcg-header-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;

  height:52px;

  padding:0 34px;

  border-radius:999px;

  background:#916B1D !important;

  color:#FFFFFF !important;

  text-decoration:none !important;

  font-size:13px;
  font-weight:600;
  letter-spacing:2px;

  font-family:"Inter",sans-serif;

  transition:
    transform .35s ease,
    background .35s ease,
    box-shadow .35s ease;
}

/* BUTTON HOVER */

#dcgHeader .dcg-header-btn:hover{
  background:#A67B22 !important;

  transform:translateY(-2px);

  box-shadow:
    0 10px 26px rgba(145,107,29,0.28);
}

/* =========================
   MOBILE TOGGLE
========================= */

#dcgHeader .dcg-mobile-toggle{
  display:none;

  width:48px;
  height:48px;

  border:none;
  background:none;

  cursor:pointer;

  padding:0;
}

#dcgHeader .dcg-mobile-toggle span{
  display:block;

  width:24px;
  height:2px;

  background:#FFFFFF;

  margin:5px auto;

  transition:.3s ease;
}

/* =========================
   MOBILE MENU
========================= */

#dcgHeader .dcg-mobile-menu{
  display:none;

  flex-direction:column;
  gap:20px;

  padding:30px;

  background:#121519;

  border-top:1px solid rgba(255,255,255,0.06);
}

#dcgHeader .dcg-mobile-menu a{
  color:#FFFFFF !important;

  text-decoration:none !important;

  font-size:18px;
  font-family:"Inter",sans-serif;
}

#dcgHeader .dcg-mobile-btn{
  margin-top:10px;

  background:#916B1D;

  padding:16px 24px;

  border-radius:999px;

  text-align:center;

  letter-spacing:2px;
}

/* =========================
   TABLET
========================= */

@media(max-width:1024px){

  #dcgHeader .dcg-nav{
    display:none;
  }

  #dcgHeader .dcg-header-btn{
    display:none;
  }

  #dcgHeader .dcg-mobile-toggle{
    display:block;
  }

  #dcgHeader .dcg-logo{
    height:42px;
  }
}

/* =========================
   MOBILE
========================= */

@media(max-width:767px){

  #dcgHeader.dcg-header{
    padding:14px 0;
  }

  #dcgHeader .dcg-header-container{
    padding:0 20px;
  }

  #dcgHeader .dcg-logo{
    height:36px;
  }

  #dcgHeader .dcg-mobile-menu{
    padding:24px 20px 30px;
  }
}

</style>

<script>

document.addEventListener("DOMContentLoaded", function(){

  const header = document.getElementById("dcgHeader");

  /* =========================
     SCROLL EFFECT
  ========================= */

  function handleScroll(){

    if(window.scrollY > 40){

      header.classList.add("scrolled");

    }else{

      header.classList.remove("scrolled");

    }

  }

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  /* =========================
     MOBILE MENU
  ========================= */

  const toggle = document.getElementById("dcgMobileToggle");

  const mobileMenu = document.getElementById("dcgMobileMenu");

  toggle.addEventListener("click", function(){

    if(mobileMenu.style.display === "flex"){

      mobileMenu.style.display = "none";

    }else{

      mobileMenu.style.display = "flex";

    }

  });

});

</script>`;
const FOOTER_HTML = `<!-- ACTUAL FOOTER -->
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
</footer>

<style>
  /* =========================================
TRUE FOOTER
========================================= */

  .dcg-footer {
    background-color: #040810;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    padding: 80px 24px 40px;
    font-family: 'Inter', sans-serif;
    color: #D5D7DA;
  }

  .dcg-footer-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .dcg-footer-top {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 48px;
    margin-bottom: 60px;
  }

  .dcg-footer-brand p {
    margin-top: 24px;
    font-size: 15px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.68);
    max-width: 380px;
  }

  .dcg-footer-location {
    margin-top: 12px !important;
    color: rgba(255, 255, 255, 0.5) !important;
    font-size: 14px !important;
  }

  .dcg-footer-logo img {
    height: 48px;
    display: block;
  }

  .dcg-social-icons {
    margin-top: 24px;
    display: flex;
    gap: 16px;
  }

  .dcg-social-icons a {
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.3s ease;
  }

  .dcg-social-icons a:hover {
    color: #e0a43b;
  }

  .dcg-footer-col h5 {
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 24px 0;
    font-family: "Playfair Display", serif;
    letter-spacing: 1px;
  }

  .dcg-footer-col a {
    display: block;
    color: rgba(255, 255, 255, 0.68);
    text-decoration: none;
    margin-bottom: 16px;
    font-size: 15px;
    transition: color 0.3s ease, transform 0.3s ease;
  }

  .dcg-footer-col a:hover {
    color: #e0a43b;
    transform: translateX(4px);
  }

  .dcg-footer-contact-btn {
    display: inline-block !important;
    margin-top: 16px !important;
    padding: 12px 24px !important;
    border-radius: 999px !important;
    background: rgba(224, 164, 59, 0.1) !important;
    color: #e0a43b !important;
    border: 1px solid rgba(224, 164, 59, 0.3) !important;
    text-align: center;
    transition: all 0.3s ease !important;
  }

  .dcg-footer-contact-btn:hover {
    background: #e0a43b !important;
    color: #111 !important;
    transform: translateY(-2px) !important;
  }

  .dcg-footer-legal {
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    padding-top: 40px;
  }

  .dcg-footer-disclaimer {
    font-size: 13px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 24px;
  }

  .dcg-footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  .dcg-footer-bottom-links {
    display: flex;
    gap: 24px;
  }

  .dcg-footer-bottom-links a {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
  }

  .dcg-footer-bottom-links a:hover {
    color: #e0a43b;
  }

  .dcg-footer-copyright {
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    margin: 0;
  }

  @media (max-width: 1024px) {
    .dcg-footer-top {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 767px) {
    .dcg-footer-top {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .dcg-footer-bottom {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>`;

function loadComponent(id, basePath) {
  try {
    let html = id === 'site-header' ? HEADER_HTML : FOOTER_HTML;
    html = html.replace(/\{\{BASE_PATH\}\}/g, basePath);

    const element = document.getElementById(id);
    if (!element) return;

    element.innerHTML = html;

    element.querySelectorAll('script').forEach((oldScript) => {
      const newScript = document.createElement('script');
      Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
      newScript.textContent = oldScript.textContent;
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });

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
