(() => {
  // Scroll navbar styling
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('mainNavbar');
    if (navbar) {
      navbar.classList.toggle('navbar-scrolled', window.scrollY > 10);
    }
  });
})();
