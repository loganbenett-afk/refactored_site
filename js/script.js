// Global component loader
async function loadComponent(id, path) {
  try {
    const response = await fetch(path);

    // Check if fetch was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const html = await response.text();

    const element = document.getElementById(id);

    if (element) {
      element.innerHTML = html;
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
      `${basePath}components/header.html`
    );
  }

  // Load Footer
  if (document.getElementById('site-footer')) {
    loadComponent(
      'site-footer',
      `${basePath}components/footer.html`
    );
  }

});