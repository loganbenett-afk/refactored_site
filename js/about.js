fetch('header.html')
    .then(r => r.text())
    .then(html => { document.getElementById('site-header').innerHTML = html; })
    .catch(() => { /* header.html not found in preview — safe to ignore */ });

document.addEventListener("DOMContentLoaded", function(){
  const imageWrap   = document.querySelector(".dcg-story-image-wrap");
  const contentWrap = document.querySelector(".dcg-story-content");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        imageWrap.classList.add("active");
        contentWrap.classList.add("active");
      }
    });
  }, { threshold: 0.15 });
  observer.observe(document.querySelector(".dcg-story-section"));
});

document.addEventListener("DOMContentLoaded", function(){
  const top   = document.querySelector(".dcg-partner-top");
  const items = document.querySelectorAll(".dcg-partner-item");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        top.classList.add("active");
        items.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity    = "1";
            item.style.transform  = "translateY(0)";
          }, index * 120);
        });
      }
    });
  }, { threshold: 0.15 });
  observer.observe(document.querySelector(".dcg-partner-section"));
});

document.addEventListener("DOMContentLoaded", function(){
  const cta = document.querySelector(".dcg-cta-container");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){ cta.classList.add("active"); }
    });
  }, { threshold: 0.2 });
  observer.observe(document.querySelector(".dcg-cta-section"));
});

document.addEventListener("DOMContentLoaded", function(){
  const top   = document.querySelector(".dcg-invest-top");
  const cards = document.querySelectorAll(".dcg-invest-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        top.classList.add("active");
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("active");
          }, index * 100);
        });
      }
    });
  }, { threshold: 0.15 });
  
  const section = document.querySelector(".dcg-invest-section");
  if (section) {
    observer.observe(section);
  }
});

document.addEventListener("DOMContentLoaded", function(){
  const top   = document.querySelector(".dcg-models-top");
  const cards = document.querySelectorAll(".dcg-model-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        top.classList.add("active");
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("active");
          }, index * 120);
        });
      }
    });
  }, { threshold: 0.15 });
  
  const section = document.querySelector(".dcg-models-section");
  if (section) {
    observer.observe(section);
  }
});

document.addEventListener("DOMContentLoaded", function(){
  const top   = document.querySelector(".dcg-how-top");
  const cards = document.querySelectorAll(".dcg-how-column");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        top.classList.add("active");
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("active");
          }, index * 100);
        });
      }
    });
  }, { threshold: 0.15 });
  
  const section = document.querySelector(".dcg-how-it-works-section");
  if (section) {
    observer.observe(section);
  }
});




fetch('footer.html')
    .then(r => r.text())
    .then(html => { document.getElementById('site-footer').innerHTML = html; })
    .catch(() => { /* footer.html not found in preview — safe to ignore */ });