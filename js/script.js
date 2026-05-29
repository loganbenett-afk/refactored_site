// Global component loader
async function loadComponent(id, path, basePath) {
  try {
    const response = await fetch(path);

    // Check if fetch was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let html = await response.text();
    
    // Replace placeholder with basePath
    html = html.replace(/\{\{BASE_PATH\}\}/g, basePath);

    const element = document.getElementById(id);

    if (element) {
      element.innerHTML = html;
      
      // Set active nav link for header
      if (id === 'site-header') {
        const currentPath = window.location.pathname;
        const navLinks = element.querySelectorAll('.dcg-nav-menu a, .dcg-mobile-menu a');
        
        navLinks.forEach(link => {
          link.classList.remove('active');
          const href = link.getAttribute('href');
          
          if (href) {
            let pathName = currentPath;
            if (pathName.endsWith('/') || pathName === '') {
              pathName += 'index.html';
            }
            
            // Extract the filename from the link href
            const fileName = href.split('/').pop();
            
            // If the current path ends with this filename, mark it active
            if (pathName.endsWith(fileName)) {
              link.classList.add('active');
            }
          }
        });
      }
    }

  } catch (err) {
    console.error(`Failed to load component from ${path}`, err);
  }
}

document.addEventListener('DOMContentLoaded', () => {

  // Check if current page is inside /pages/
  const isInPagesFolder = window.location.pathname.includes('/pages/');

  // Set correct base path
  const basePath = isInPagesFolder ? '../' : './';

  // Load Header
  if (document.getElementById('site-header')) {
    loadComponent(
      'site-header',
      `${basePath}components/header.html`,
      basePath
    );
  }

  // Load Footer
  if (document.getElementById('site-footer')) {
    loadComponent(
      'site-footer',
      `${basePath}components/footer.html`,
      basePath
    );
  }

});