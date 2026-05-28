// Global component loader
async function loadComponent(id, path) {
  try {
    const response = await fetch(path);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
  } catch (err) {
    console.error(`Failed to load ${path}`, err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const headerPath = window.location.pathname.includes('/pages/') ? '../components/header.html' : 'components/header.html';
  const footerPath = window.location.pathname.includes('/pages/') ? '../components/footer.html' : 'components/footer.html';
  if (document.getElementById('site-header')) loadComponent('site-header', headerPath);
  if (document.getElementById('site-footer')) loadComponent('site-footer', footerPath);
});
