// ============================================================
// main.js — Funzionalità principali del sito
// Compatibile con navbar/footer iniettati da navbar.js
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // ──────────────────────────────────────────────────────────
  // HERO OFFSET
  // ──────────────────────────────────────────────────────────
  function fixHeroOffset() {
    const navbar = document.getElementById("navbar");
    const hero = document.querySelector(".hero");

    if (!navbar || !hero) return;

    if (window.innerWidth <= 768) {
      hero.style.marginTop = "0px";
    } else {
      hero.style.marginTop = navbar.offsetHeight + "px";
    }
  }

  fixHeroOffset();
  window.addEventListener("resize", fixHeroOffset);

  // ──────────────────────────────────────────────────────────
  // NAVBAR ELEMENTS
  // ──────────────────────────────────────────────────────────
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const navOverlay = document.getElementById("nav-overlay");
  const navInner = document.querySelector(".nav-inner");
  const bookNavBtn = document.querySelector(".btn-book-nav");
  const navMobileExtras = document.getElementById("nav-mobile-extras");

  // ──────────────────────────────────────────────────────────
  // MOBILE MENU
  // ──────────────────────────────────────────────────────────
  function openMenu() {
    if (!hamburger || !navLinks || !navOverlay) return;

    hamburger.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
    navLinks.classList.add("open");
    navOverlay.classList.add("open");

    if (navMobileExtras) {
      navMobileExtras.style.display = "block";
    }

    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    if (!hamburger || !navLinks || !navOverlay) return;

    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("open");
    navOverlay.classList.remove("open");

    if (navMobileExtras) {
      navMobileExtras.style.display = "none";
    }

    document.body.style.overflow = "";
  }

  function toggleMenu() {
    if (!hamburger) return;

    const isOpen = hamburger.classList.contains("open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }

  if (navOverlay) {
    navOverlay.addEventListener("click", closeMenu);
  }

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Chiusura menu se passo da mobile a desktop
  function handleMenuMode() {
    if (window.innerWidth > 960) {
      closeMenu();
    }
  }

  window.addEventListener("resize", handleMenuMode);

  // ──────────────────────────────────────────────────────────
  // DESKTOP NAV OVERFLOW
  // Su mobile decide solo il CSS
  // ──────────────────────────────────────────────────────────
  function checkNavOverflow() {
    if (!navInner || !navLinks || !hamburger) return;

    const isMobile = window.innerWidth <= 960;

    // reset inline styles
    navLinks.style.visibility = "";
    navLinks.style.display = "";
    hamburger.style.display = "";
    if (bookNavBtn) bookNavBtn.style.display = "";

    if (isMobile) {
      if (bookNavBtn) bookNavBtn.style.display = "none";
      return;
    }

    // desktop: verifica se i link entrano nello spazio disponibile
    navLinks.style.visibility = "hidden";
    navLinks.style.display = "flex";
    hamburger.style.display = "none";

    const overflowing = navInner.scrollWidth > navInner.clientWidth + 2;

    navLinks.style.visibility = "";
    navLinks.style.display = "";

    if (overflowing) {
      hamburger.style.display = "flex";
      if (bookNavBtn) bookNavBtn.style.display = "none";
    } else {
      hamburger.style.display = "none";
      if (bookNavBtn) bookNavBtn.style.display = "";
    }
  }

  checkNavOverflow();
  window.addEventListener("resize", checkNavOverflow);
  window.addEventListener("load", checkNavOverflow);

  // ──────────────────────────────────────────────────────────
  // NAVBAR SCROLL EFFECT
  // ──────────────────────────────────────────────────────────
  function handleNavbarScroll() {
    if (!navbar) return;
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  }

  handleNavbarScroll();
  window.addEventListener("scroll", handleNavbarScroll, { passive: true });

  // ──────────────────────────────────────────────────────────
  // ACTIVE NAV LINK
  // ──────────────────────────────────────────────────────────
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    const normalizedHref = href.split("/").pop();
    link.classList.toggle("active", normalizedHref === currentPage);
  });

  // ──────────────────────────────────────────────────────────
  // BOOKING MODAL
  // ──────────────────────────────────────────────────────────
  const modal = document.getElementById("booking-modal");
  const modalOverlay = document.getElementById("modal-overlay");
  const bookingBtns = document.querySelectorAll(".btn-book");
  const closeModalBtn = document.getElementById("close-modal");
  const bookingForm = document.getElementById("booking-form");
  const bookingSuccess = document.getElementById("booking-success");

  function openModal() {
    if (!modal || !modalOverlay) return;

    modal.classList.add("open");
    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";

    const dateInput = document.getElementById("booking-date");
    if (dateInput) {
      dateInput.min = new Date().toISOString().split("T")[0];
    }
  }

  function closeModal() {
    if (!modal || !modalOverlay) return;

    modal.classList.remove("open");
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  bookingBtns.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", closeModal);
  }

  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (bookingSuccess) {
        bookingForm.style.display = "none";
        bookingSuccess.style.display = "block";
      }

      setTimeout(() => {
        closeModal();

        if (bookingSuccess) {
          bookingSuccess.style.display = "none";
        }

        bookingForm.style.display = "";
        bookingForm.reset();
      }, 3000);
    });
  }

  // ──────────────────────────────────────────────────────────
  // GALLERY CAROUSEL
  // ──────────────────────────────────────────────────────────
  const galleryTrack = document.getElementById("gallery-track");
  const galleryPrev = document.getElementById("gallery-prev");
  const galleryNext = document.getElementById("gallery-next");
  const galleryDots = document.getElementById("gallery-dots");

  if (galleryTrack) {
    let galleryPos = 0;
    let galleryAuto = null;

    function getGalleryItems() {
      return galleryTrack.querySelectorAll(".gallery-item");
    }

    function getSlideWidth() {
      const item = galleryTrack.querySelector(".gallery-item");
      if (!item) return 0;

      const itemStyles = window.getComputedStyle(item);
      const gap = parseFloat(itemStyles.marginRight) || 0;

      return item.offsetWidth + gap;
    }

    function getVisibleSlides() {
      const slideWidth = getSlideWidth();
      if (!slideWidth || !galleryTrack.parentElement) return 1;

      return Math.max(1, Math.floor(galleryTrack.parentElement.offsetWidth / slideWidth));
    }

    function getMaxGalleryPos() {
      const items = getGalleryItems();
      const visible = getVisibleSlides();
      return Math.max(0, items.length - visible);
    }

    function renderGalleryDots() {
      if (!galleryDots) return;

      const items = getGalleryItems();
      galleryDots.innerHTML = "";

      items.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "gallery-dot";

        if (i === galleryPos) {
          dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
          galleryPos = i;
          updateGalleryPosition();
        });

        galleryDots.appendChild(dot);
      });
    }

    function updateGalleryPosition() {
      const maxPos = getMaxGalleryPos();
      galleryPos = Math.max(0, Math.min(galleryPos, maxPos));

      galleryTrack.style.transform = `translateX(-${galleryPos * getSlideWidth()}px)`;
      renderGalleryDots();
    }

    function moveGallery(dir) {
      const maxPos = getMaxGalleryPos();

      if (galleryPos >= maxPos && dir > 0) {
        galleryPos = 0;
      } else if (galleryPos <= 0 && dir < 0) {
        galleryPos = maxPos;
      } else {
        galleryPos += dir;
      }

      updateGalleryPosition();
    }

    function startGalleryAuto() {
      stopGalleryAuto();
      galleryAuto = setInterval(() => moveGallery(1), 3000);
    }

    function stopGalleryAuto() {
      if (galleryAuto) {
        clearInterval(galleryAuto);
        galleryAuto = null;
      }
    }

    updateGalleryPosition();

    if (galleryPrev) {
      galleryPrev.addEventListener("click", () => moveGallery(-1));
    }

    if (galleryNext) {
      galleryNext.addEventListener("click", () => moveGallery(1));
    }

    const gallerySection = document.querySelector(".gallery-section");
    if (gallerySection && "IntersectionObserver" in window) {
      const galleryObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startGalleryAuto();
            } else {
              stopGalleryAuto();
            }
          });
        },
        { threshold: 0.2 }
      );

      galleryObserver.observe(gallerySection);
    } else {
      startGalleryAuto();
    }

    if (galleryTrack.parentElement) {
      galleryTrack.parentElement.addEventListener("mouseenter", stopGalleryAuto);
      galleryTrack.parentElement.addEventListener("mouseleave", startGalleryAuto);
    }

    window.addEventListener("resize", updateGalleryPosition);
  }

  // ──────────────────────────────────────────────────────────
  // SCROLL REVEAL
  // ──────────────────────────────────────────────────────────
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  // ──────────────────────────────────────────────────────────
  // PAGE-SPECIFIC LANGUAGE TOGGLES
  // ──────────────────────────────────────────────────────────
  function updateLanguageDependentContent() {
    const lang = localStorage.getItem("lang") || "it";

    document.querySelectorAll(".lang-it").forEach((el) => {
      el.style.display = lang === "it" ? "block" : "none";
    });
    document.querySelectorAll(".lang-en").forEach((el) => {
      el.style.display = lang === "en" ? "block" : "none";
    });

    const cantinaIt = document.getElementById("cantina-p1-full");
    const cantinaEn = document.getElementById("cantina-p1-full-en");
    if (cantinaIt) cantinaIt.style.display = lang === "it" ? "block" : "none";
    if (cantinaEn) cantinaEn.style.display = lang === "en" ? "block" : "none";
  }

  updateLanguageDependentContent();
  document.addEventListener("langchange", updateLanguageDependentContent);

  // ──────────────────────────────────────────────────────────
  // SMOOTH ANCHOR SCROLL
  // ──────────────────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      closeMenu();
    });
  });
});