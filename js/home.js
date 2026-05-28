fetch('header.html')
    .then(r => r.text())
    .then(html => { document.getElementById('site-header').innerHTML = html; })
    .catch(() => { /* header.html not found in preview — safe to ignore */ });

document.addEventListener("DOMContentLoaded", function(){
  const buttons = document.querySelectorAll(".dcg-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.setProperty("--x", x + "px");
      btn.style.setProperty("--y", y + "px");
    });
  });
});

document.addEventListener("DOMContentLoaded", function(){
  const imageWrap2  = document.querySelector(".dcg-about-image-wrap");
  const contentWrap2 = document.querySelector(".dcg-about-content");
  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        imageWrap2.classList.add("active");
        contentWrap2.classList.add("active");
      }
    });
  }, { threshold: 0.2 });
  observer2.observe(document.querySelector(".dcg-about-section"));
});

document.addEventListener("DOMContentLoaded", function(){
  const top3   = document.querySelector(".dcg-why-top");
  const cards3 = document.querySelectorAll(".dcg-card");
  const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        top3.classList.add("active");
        cards3.forEach((card, index) => {
          setTimeout(() => {
            card.style.opacity   = "1";
            card.style.transform = "translateY(0)";
          }, index * 120);
        });
      }
    });
  }, { threshold: 0.15 });
  observer3.observe(document.querySelector(".dcg-why-section"));
});

document.addEventListener("DOMContentLoaded", function(){
  const top4   = document.querySelector(".dcg-models-top");
  const cards4 = document.querySelectorAll(".dcg-model-card");
  const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        top4.classList.add("active");
        cards4.forEach((card, index) => {
          setTimeout(() => {
            card.style.opacity   = "1";
            card.style.transform = "translateY(0)";
          }, index * 180);
        });
      }
    });
  }, { threshold: 0.15 });
  observer4.observe(document.querySelector(".dcg-models-section"));
});

document.addEventListener("DOMContentLoaded", function(){
  const top5   = document.querySelector(".dcg-process-top");
  const steps5 = document.querySelectorAll(".dcg-step-item");
  const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        top5.classList.add("active");
        steps5.forEach((step, index) => {
          setTimeout(() => {
            step.style.opacity   = "1";
            step.style.transform = "translateY(0)";
          }, index * 140);
        });
      }
    });
  }, { threshold: 0.15 });
  observer5.observe(document.querySelector(".dcg-process-section"));
});

(function () {
  var root6 = document.getElementById('dcp-root');
  if (!root6 || !window.IntersectionObserver) return;
  var sectionObs6 = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { root6.classList.add('dcp-in'); sectionObs6.disconnect(); }
    });
  }, { threshold: 0.12 });
  sectionObs6.observe(root6);
  var elemObs6 = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add('dcp-in'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  root6.querySelectorAll('.dcp-reveal-up, .dcp-reveal-left, .dcp-reveal-right').forEach(function (el) {
    elemObs6.observe(el);
  });
  var btn6 = root6.querySelector('.dcp-btn[href^="#"]');
  if (btn6) {
    btn6.addEventListener('click', function (e) {
      var target = document.querySelector(btn6.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  }
})();

(function () {
  var root7 = document.getElementById('dcs-root');
  if (!root7 || !window.IntersectionObserver) return;
  var io7 = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add('dcs-in'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.14 });
  root7.querySelectorAll('.dcs-reveal-up').forEach(function (el) { io7.observe(el); });
  var anchorBtn7 = root7.querySelector('.dcs-btn[href^="#"]');
  if (anchorBtn7) {
    anchorBtn7.addEventListener('click', function (e) {
      var target = document.querySelector(anchorBtn7.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  }
})();

fetch('footer.html')
    .then(r => r.text())
    .then(html => { document.getElementById('site-footer').innerHTML = html; })
    .catch(() => { /* footer.html not found in preview — safe to ignore */ });