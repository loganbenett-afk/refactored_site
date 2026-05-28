/* =========================================
       LOAD HEADER + FOOTER
    ========================================= */

    async function loadIncludes(){

      const header = await fetch("file:///C:/Users/SAINESH.SHARMA/Desktop/Decades%20Capital%20Grop%20Website/header.html");
      const headerHTML = await header.text();

      document.getElementById("header-placeholder").innerHTML = headerHTML;

      const footer = await fetch("file:///C:/Users/SAINESH.SHARMA/Desktop/Decades%20Capital%20Grop%20Website/footer.html");
      const footerHTML = await footer.text();

      document.getElementById("footer-placeholder").innerHTML = footerHTML;

    }

    loadIncludes();

    /* =========================================
       FAQ TOGGLE
    ========================================= */

    document.addEventListener("DOMContentLoaded", function(){

      const faqItems = document.querySelectorAll(".dcg-faq-item");

      faqItems.forEach(item => {

        const button = item.querySelector(".dcg-faq-question");

        button.addEventListener("click", () => {

          const isActive = item.classList.contains("active");

          faqItems.forEach(faq => {
            faq.classList.remove("active");
          });

          if(!isActive){
            item.classList.add("active");
          }

        });

      });

    });