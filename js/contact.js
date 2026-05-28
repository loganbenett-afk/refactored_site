/* =========================================================
   LOAD HEADER + FOOTER
========================================================= */

async function loadIncludes(){

  try{

    const header = await fetch("C:/Users/SAINESH.SHARMA/Desktop/Decades Capital Grop Website/header.html");

    const headerData = await header.text();

    document.getElementById("header-placeholder").innerHTML = headerData;

  }catch(error){

    console.log("Header failed to load");

  }

  try{

    const footer = await fetch("C:/Users/SAINESH.SHARMA/Desktop/Decades Capital Grop Website/footer.html");

    const footerData = await footer.text();

    document.getElementById("footer-placeholder").innerHTML = footerData;

  }catch(error){

    console.log("Footer failed to load");

  }

}

loadIncludes();

/* =========================================================
   TOGGLE BUTTONS
========================================================= */

document.addEventListener("DOMContentLoaded", function(){

  const buttons = document.querySelectorAll(".dcg-toggle-btn");

  buttons.forEach(button=>{

    button.addEventListener("click", function(){

      buttons.forEach(btn=>btn.classList.remove("active"));

      this.classList.add("active");

    });

  });

});