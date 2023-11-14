document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Fade-in effect on scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });
  
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  
    // Responsive nav menu toggle
    const menuToggle = document.createElement('div');
    menuToggle.id = 'menu-toggle';
    menuToggle.textContent = '☰';
    document.querySelector('header').appendChild(menuToggle);

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active'); // Add 'active' class to menu toggle
        document.querySelector('nav ul').classList.toggle('active');
    });
  
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        document.querySelector('nav ul').classList.remove('active');
      }
    });
  });