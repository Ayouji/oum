// Oumjniba - Shared Scripts

// 1. Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
});

// 2. Mobile Burger Menu
const burger = document.getElementById('navBurger');
const navDesktop = document.querySelector('.navbar__nav-desktop');
if (burger && navDesktop) {
  burger.addEventListener('click', () => {
    navDesktop.style.display = navDesktop.style.display === 'flex' ? 'none' : 'flex';
    navDesktop.style.position = 'absolute';
    navDesktop.style.top = '70px';
    navDesktop.style.left = '0';
    navDesktop.style.right = '0';
    navDesktop.style.background = 'var(--clr-accent)';
    navDesktop.style.flexDirection = 'column';
    navDesktop.style.padding = '20px';
  });
}

// 3. Reveal Animations
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
