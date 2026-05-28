fetch('header.html')
    .then(r => r.text())
    .then(html => { document.getElementById('site-header').innerHTML = html; })
    .catch(() => { /* header.html not found in preview — safe to ignore */ });

document.addEventListener("DOMContentLoaded", function(){
  const section = document.querySelector(".featured-opportunities-section");
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ section.classList.add("visible"); }
    });
  },{ threshold:0.2 });
  observer.observe(section);
});

(function() {
  /* ---- Tab Switching ---- */
  var btns  = document.querySelectorAll('.ph-tab-btn');
  var panes = document.querySelectorAll('.ph-tab-pane');
  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var target = this.getAttribute('data-tab');
      btns.forEach(function(b)  { b.classList.remove('ph-active'); });
      panes.forEach(function(p) { p.classList.remove('ph-active'); });
      this.classList.add('ph-active');
      document.getElementById(target).classList.add('ph-active');
      setTimeout(observeAll, 80);
    });
  });
  /* ---- Scroll Reveal (IntersectionObserver) ---- */
  function observeAll() {
    var targets = document.querySelectorAll(
      '.ph-prop-block:not(.ph-in-view), .ph-prop-card:not(.ph-in-view)'
    );
    if (!('IntersectionObserver' in window)) {
      targets.forEach(function(el) { el.classList.add('ph-in-view'); });
      return;
    }
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry, i) {
        if (entry.isIntersecting) {
          var delay = entry.target.classList.contains('ph-prop-card') ? i * 60 : 0;
          setTimeout(function() {
            entry.target.classList.add('ph-in-view');
          }, delay);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    targets.forEach(function(el) { io.observe(el); });
  }
  /* Stagger card reveal on Tab 3 specifically */
  function staggerCards() {
    var cards = document.querySelectorAll('#ph-tab3 .ph-prop-card:not(.ph-in-view)');
    if (!('IntersectionObserver' in window)) {
      cards.forEach(function(c) { c.classList.add('ph-in-view'); });
      return;
    }
    var io = new IntersectionObserver(function(entries) {
      var delay = 0;
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          setTimeout(function() { el.classList.add('ph-in-view'); }, delay);
          delay += 70;
          io.unobserve(el);
        }
      });
    }, { threshold: 0.05 });
    cards.forEach(function(c) { io.observe(c); });
  }
  /* Init on load */
  observeAll();
  /* Listen for tab3 activation to stagger cards */
  document.querySelectorAll('.ph-tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (this.getAttribute('data-tab') === 'ph-tab3') {
        setTimeout(staggerCards, 150);
      }
    });
  });
  /* Card transition delays for tab 3 initial state if active */
  (function() {
    var cards = document.querySelectorAll('#ph-tab3 .ph-prop-card');
    cards.forEach(function(card, i) {
      card.style.transitionDelay = (i * 0.04) + 's';
    });
  })();
})();

document.addEventListener("DOMContentLoaded",function(){
  const dcgNeoObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){ entry.target.classList.add("dcgVisibleV11"); }
    });
  },{threshold:0.15});
  document.querySelectorAll(".dcgNeoMetricCardV11,.dcgNeoTimelineItemV11").forEach((el)=>{
    dcgNeoObserver.observe(el);
  });
});

document.addEventListener("DOMContentLoaded",function(){
  const dcgInvestorSection = document.querySelector(".dcgInvestorCtaContainerV21");
  const dcgInvestorObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){ entry.target.classList.add("dcgInvestorVisibleV21"); }
    });
  },{threshold:0.2});
  dcgInvestorObserver.observe(dcgInvestorSection);
});

fetch('footer.html')
    .then(r => r.text())
    .then(html => { document.getElementById('site-footer').innerHTML = html; })
    .catch(() => { /* footer.html not found in preview — safe to ignore */ });