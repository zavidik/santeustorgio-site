// ============================================================
// main.js — Funzionalità principali del sito
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

  // ── Aggiusta altezza hero sotto navbar ──────────────────────
function fixHeroOffset() {
  const navbar = document.getElementById("navbar");
  const hero = document.querySelector(".hero");
  if (navbar && hero) {
    hero.style.marginTop = navbar.offsetHeight + "px";
  }
}
fixHeroOffset();
window.addEventListener("resize", fixHeroOffset);

// ── Hamburger menu ──────────────────────────────────────────
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("nav-links");
  const overlay   = document.getElementById("nav-overlay");

  function closeMenu() {
    hamburger?.classList.remove("open");
    navLinks?.classList.remove("open");
    overlay?.classList.remove("open");
    document.body.style.overflow = "";
    const extras = document.getElementById("nav-mobile-extras");
    if (extras) extras.style.display = "none";
    checkNavOverflow();
  }

  hamburger?.addEventListener("click", () => {
    const isOpen = hamburger.classList.toggle("open");
    navLinks?.classList.toggle("open", isOpen);
    overlay?.classList.toggle("open", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
    const extras = document.getElementById("nav-mobile-extras");
    if (extras) extras.style.display = isOpen ? "block" : "none";
  });

  overlay?.addEventListener("click", closeMenu);

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // ── Auto-hide navbar links quando non ci stanno ─────────────
  const navInner   = document.querySelector('.nav-inner');
  const navLinksEl = document.getElementById('nav-links');
  const hamburgerEl = document.getElementById('hamburger');
  const bookNavBtn  = document.querySelector('.btn-book-nav');

  function checkNavOverflow() {
    if (!navInner || !navLinksEl || !hamburgerEl) return;
    if (navLinksEl.classList.contains('open')) return;
    navLinksEl.style.visibility = 'hidden';
    navLinksEl.style.display    = 'flex';
    hamburgerEl.style.display   = 'none';
    const overflowing = navInner.scrollWidth > navInner.clientWidth + 2;
    navLinksEl.style.display    = '';
    navLinksEl.style.visibility = '';
    if (overflowing) {
      hamburgerEl.style.display = 'flex';
      if (bookNavBtn) bookNavBtn.style.display = 'none';
    } else {
      hamburgerEl.style.display = 'none';
      if (bookNavBtn) bookNavBtn.style.display = '';
    }
  }

// Esegui al caricamento e ad ogni resize
checkNavOverflow();
window.addEventListener('resize', checkNavOverflow);

  // ── Navbar scroll effect ────────────────────────────────────
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar?.classList.toggle("scrolled", window.scrollY > 60);
  }, { passive: true });

  // ── Active nav link ─────────────────────────────────────────
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href")?.split("/").pop();
    link.classList.toggle("active", href === currentPage);
  });

  // ── Booking modal ───────────────────────────────────────────
  const modal        = document.getElementById("booking-modal");
  const modalOverlay = document.getElementById("modal-overlay");
  const bookingBtns  = document.querySelectorAll(".btn-book");
  const closeModal   = document.getElementById("close-modal");
  const bookingForm  = document.getElementById("booking-form");

  function openModal() {
    modal?.classList.add("open");
    modalOverlay?.classList.add("open");
    document.body.style.overflow = "hidden";
    // Set min date to today
    const dateInput = document.getElementById("booking-date");
    if (dateInput) {
      dateInput.min = new Date().toISOString().split("T")[0];
    }
  }

  function closeModalFn() {
    modal?.classList.remove("open");
    modalOverlay?.classList.remove("open");
    document.body.style.overflow = "";
  }

  bookingBtns.forEach(btn => btn.addEventListener("click", openModal));
  closeModal?.addEventListener("click", closeModalFn);
  modalOverlay?.addEventListener("click", closeModalFn);

  bookingForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const successMsg = document.getElementById("booking-success");
    if (successMsg) {
      bookingForm.style.display = "none";
      successMsg.style.display  = "block";
    }
    setTimeout(closeModalFn, 3000);
  });

// ── Gallery carousel ────────────────────────────────────────
  const galleryTrack = document.getElementById("gallery-track");
  const galleryPrev  = document.getElementById("gallery-prev");
  const galleryNext  = document.getElementById("gallery-next");

  if (galleryTrack) {
    let galleryAuto = null;
    let galleryPos = 0;

    function getSlideWidth() {
      const item = galleryTrack.querySelector(".gallery-item");
      if (!item) return 0;
      const style = window.getComputedStyle(item);
      return item.offsetWidth + parseInt(style.marginRight || 0);
    }

    function updateGalleryDots() {
      const dotsContainer = document.getElementById("gallery-dots");
      if (!dotsContainer) return;
      const items = galleryTrack.querySelectorAll(".gallery-item");
      dotsContainer.innerHTML = "";
      items.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.style.cssText = "width:8px;height:8px;border-radius:50%;border:2px solid rgba(255,255,255,.7);background:transparent;cursor:pointer;padding:0;transition:.3s;";
        if (i === galleryPos) dot.style.background = "white";
        dot.addEventListener("click", () => {
          galleryPos = i;
          galleryTrack.style.transform = `translateX(-${galleryPos * getSlideWidth()}px)`;
          updateGalleryDots();
        });
        dotsContainer.appendChild(dot);
      });
    }

    function updateGallery(dir) {
      const items   = galleryTrack.querySelectorAll(".gallery-item");
      const visible = Math.floor(galleryTrack.parentElement.offsetWidth / getSlideWidth());
      const maxPos  = Math.max(0, items.length - visible);
      galleryPos    = Math.max(0, Math.min(galleryPos + dir, maxPos));
      galleryTrack.style.transform = `translateX(-${galleryPos * getSlideWidth()}px)`;
      updateGalleryDots();
    }

    updateGalleryDots();

    galleryPrev?.addEventListener("click", () => updateGallery(-1));
    galleryNext?.addEventListener("click", () => updateGallery(1));

    const gallerySection = document.querySelector('.gallery-section');
    if (gallerySection && galleryTrack) {
      const startGalleryAuto = () => {
        galleryAuto = setInterval(() => updateGallery(1), 2000);
      };
      const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { startGalleryAuto(); }
          else { clearInterval(galleryAuto); }
        });
      }, { threshold: 0.2 });
      galleryObserver.observe(gallerySection);
    }

    galleryTrack.parentElement.addEventListener("mouseenter", () => clearInterval(galleryAuto));
    galleryTrack.parentElement.addEventListener("mouseleave", () => {
      galleryAuto = setInterval(() => updateGallery(1), 2000);
    });
  }

  // ── Scroll reveal animations ────────────────────────────────
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("visible"));
  }

  // ── Lang switcher: update reviews on lang change ─────────────
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setTimeout(() => {
        if (typeof showReview === "function") showReview(currentReviewIndex);
      }, 50);
    });
  });

  // ── Smooth anchor scroll ────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        closeMenu();
      }
    });
  });

});
