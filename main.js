/* ============================================
   RISTORANTE SANT'EUSTORGIO — main.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar scroll effect ──────────────────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // ── Active nav link ───────────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // ── Mobile overlay nav ────────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const overlay   = document.querySelector('.nav-overlay');
  const closeBtn  = document.querySelector('.nav-overlay-close');

  if (hamburger && overlay) {
    hamburger.addEventListener('click', () => overlay.classList.add('open'));
    closeBtn?.addEventListener('click', () => overlay.classList.remove('open'));
    overlay.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => overlay.classList.remove('open'));
    });
  }

  // ── Hero: trigger parallax on load ───────────────────
  const hero = document.getElementById('hero');
  if (hero) {
    setTimeout(() => hero.classList.add('loaded'), 100);

    // Subtle parallax on scroll
    window.addEventListener('scroll', () => {
      const bg = hero.querySelector('.hero-bg');
      if (bg && window.scrollY < window.innerHeight) {
        bg.style.transform = `scale(1) translateY(${window.scrollY * 0.25}px)`;
      }
    }, { passive: true });
  }

  // ── Menu tabs ─────────────────────────────────────────
  const tabs   = document.querySelectorAll('.menu-tab');
  const panels = document.querySelectorAll('.menu-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });

  // ── Fade-in on scroll ─────────────────────────────────
  const fadeEls = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => observer.observe(el));

  // ── Reservation form ─────────────────────────────────
  const form = document.getElementById('reservation-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn  = form.querySelector('button[type="submit"]');
      const orig = btn.innerHTML;
      btn.innerHTML = '<span>✓ Richiesta inviata — Vi contatteremo presto</span>';
      btn.style.background = '#4a7c59';
      btn.style.color = '#fff';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.background = '';
        btn.style.color = '';
        btn.disabled = false;
        form.reset();
      }, 5000);
    });
  }

  // ── Set today's date as min for date inputs ──────────
  const dateInputs = document.querySelectorAll('input[type="date"]');
  const today = new Date().toISOString().split('T')[0];
  dateInputs.forEach(d => d.setAttribute('min', today));

});
