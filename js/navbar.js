// ============================================================
// navbar.js — Inietta navbar e footer nelle sottopagine
// Include questo script nelle sottopagine PRIMA di main.js
// Esempio: <script src="../js/navbar.js"></script>
// ============================================================

(function() {
  const isSubpage = window.location.pathname.includes('/pages/');
  const base = isSubpage ? '../' : '';

  const navbarHTML = `
<nav id="navbar" role="navigation" aria-label="Navigazione principale">
  <div class="nav-inner">
    <a href="${base}index.html" class="nav-brand">
      <span class="nav-brand-name">Ristorante <br> Sant'Eustorgio</span>
      <span class="nav-brand-city" data-i18n="nav_city">Milano</span>
    </a>
    <ul id="nav-links" role="menubar">
      <li role="none"><a href="${base}index.html"            class="nav-link" role="menuitem" data-i18n="nav_home">Homepage</a></li>
      <li role="none"><a href="${base}pages/chi-siamo.html"  class="nav-link" role="menuitem" data-i18n="nav_about">Chi siamo</a></li>
      <li role="none"><a href="${base}pages/cucina.html"     class="nav-link" role="menuitem" data-i18n="nav_kitchen">Cucina</a></li>
      <li role="none"><a href="${base}pages/menu.html"       class="nav-link" role="menuitem" data-i18n="nav_menu">Menù</a></li>
      <li role="none"><a href="${base}pages/cantina.html"    class="nav-link" role="menuitem" data-i18n="nav_cellar">Cantina</a></li>
      <li role="none"><a href="${base}pages/eventi.html"     class="nav-link" role="menuitem" data-i18n="nav_events">Eventi</a></li>
      <li role="none"><a href="${base}pages/locale.html"     class="nav-link" role="menuitem" data-i18n="nav_venue">Locale</a></li>
      <li role="none"><a href="${base}pages/contatti.html"   class="nav-link" role="menuitem" data-i18n="nav_contacts">Contatti</a></li>
    <li role="none" id="nav-book-mobile" style="display:none; width:100%; margin-top:16px;">
  <button class="btn-book" data-i18n="nav_book" style="width:100%; padding:12px 20px; text-align:center; border-radius:40px; background:white; color:#8aa07e; font-weight:700; font-size:.85rem; letter-spacing:.06em; text-transform:uppercase; border:none; cursor:pointer;">Prenota un tavolo</button>
</li>
<li role="none" id="nav-lang-mobile" style="display:none; width:100%; margin-top:12px;">
  <div style="display:flex; gap:8px; padding:0 14px;">
    <button class="lang-btn" data-lang="it" aria-label="Italiano">IT</button>
    <button class="lang-btn" data-lang="en" aria-label="English">EN</button>
  </div>
</li>
      </ul>
      <div id="nav-mobile-extras" style="display:none; position:fixed; bottom:40px; right:0; width:min(80vw,300px); padding:0 28px; z-index:1000;">
      <button class="btn-book" data-i18n="nav_book" style="width:100%; padding:12px 20px; text-align:center; border-radius:40px; background:white; color:#8aa07e; font-weight:700; font-size:.85rem; letter-spacing:.06em; text-transform:uppercase; border:none; cursor:pointer; margin-bottom:12px;">Prenota un tavolo</button>
      <div style="display:flex; gap:8px;">
        <button class="lang-btn" data-lang="it" style="flex:1; padding:8px; border-radius:4px; border:1px solid rgba(255,255,255,.4); background:transparent; color:white; font-weight:700; font-size:.72rem; cursor:pointer;">IT</button>
        <button class="lang-btn" data-lang="en" style="flex:1; padding:8px; border-radius:4px; border:1px solid rgba(255,255,255,.4); background:transparent; color:white; font-weight:700; font-size:.72rem; cursor:pointer;">EN</button>
      </div>
    </div>
    <div class="nav-right">
      <button class="btn-book-nav btn-book" data-i18n="nav_book">Prenota un tavolo</button>
      <button id="hamburger" aria-label="Apri menu" aria-expanded="false" aria-controls="nav-links">
        <span></span><span></span><span></span>
      </button>
      <div class="lang-switcher" role="group" aria-label="Seleziona lingua">
        <button class="lang-btn" data-lang="it" aria-label="Italiano">IT</button>
        <button class="lang-btn" data-lang="en" aria-label="English">EN</button>
      </div>
      
    </div>
  </div>
</nav>
<div id="nav-overlay" aria-hidden="true"></div>`;

  const footerHTML = `
<footer role="contentinfo">
  <div class="footer-inner">
    <div class="footer-logo">
      Ristorante<br>Sant'Eustorgio
      <span data-i18n="nav_city">Milano</span>
    </div>
    <div class="footer-col">
      <h4 data-i18n="footer_hours_title">Orari</h4>
      <p data-i18n="footer_hours">Tutti i giorni 12:00 – 23:00</p>
    </div>
    <div class="footer-col">
      <h4 data-i18n="footer_contacts_title">Contatti</h4>
      <a href="https://maps.app.goo.gl/G2XTDJQzzFDLv1jw5" target="_blank" rel="noopener noreferrer" data-i18n="footer_address">Piazza Sant'Eustorgio, 6, 20122 Milano MI</a>
      <a href="tel:+39 02 5810 1396" data-i18n="footer_phone">+39 02 0000000</a>
      <a href="mailto:ristorante@santeustorgiomilano.it" data-i18n="footer_email">ristorante@santeustorgiomilano.it</a>
      <a href="https://www.instagram.com/ristorante_santeustorgiomilano" target="_blank" rel="noopener noreferrer" class="footer-social" aria-label="Instagram">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        <span data-i18n="footer_instagram">ristorante_sant'eustorgiomilano</span>
      </a>
    </div>
  </div>
  <div class="footer-bottom">
  <p>
    <span data-i18n="© 2025 site_name">© 2025 Ristorante Sant'Eustorgio</span>
    &nbsp;|&nbsp; P.IVA 13872400968
    &nbsp;|&nbsp; <span data-i18n="footer_rights_reserved">Tutti i diritti riservati</span>
    &nbsp;|&nbsp; <a href="${base}pages/privacy.html" target="_blank" style="color:inherit;text-decoration:underline;" data-i18n="footer_privacy">Informativa Privacy</a>
    &nbsp;|&nbsp; <a href="${base}pages/cookie-policy.html" target="_blank" ...>Cookie Policy</a>
    </p>
</div>
</footer>`;

  const modalHTML = `
<div id="modal-overlay" aria-hidden="true"></div>
<div id="booking-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="modal-header">
    <h2 id="modal-title" data-i18n="modal_title">Prenota un tavolo</h2>
    <button id="close-modal" aria-label="Chiudi modal">✕</button>
  </div>
  <div id="booking-form-wrapper">
    <form id="booking-form" novalidate>
      <div class="form-grid">
        <div class="form-group full">
          <label for="booking-name" data-i18n="modal_name">Nome e cognome</label>
          <input type="text" id="booking-name" name="name" required data-i18n-placeholder="modal_name" />
        </div>
        <div class="form-group">
          <label for="booking-date" data-i18n="modal_date">Data</label>
          <input type="date" id="booking-date" name="date" required />
        </div>
        <div class="form-group">
          <label for="booking-time" data-i18n="modal_time">Orario</label>
          <select id="booking-time" name="time" required>
            <option value="">—</option>
            <optgroup label="Pranzo">
              <option>12:00</option><option>12:30</option><option>13:00</option>
              <option>13:30</option><option>14:00</option><option>14:30</option>
            </optgroup>
            <optgroup label="Cena">
              <option>19:00</option><option>19:30</option><option>20:00</option>
              <option>20:30</option><option>21:00</option><option>21:30</option>
              <option>22:00</option>
            </optgroup>
          </select>
        </div>
        <div class="form-group">
          <label for="booking-guests" data-i18n="modal_guests">Ospiti</label>
          <select id="booking-guests" name="guests" required>
            <option value="">—</option>
            <option>1</option><option>2</option><option>3</option>
            <option>4</option><option>5</option><option>6</option>
            <option>7</option><option>8</option><option value="9+">9+</option>
          </select>
        </div>
        <div class="form-group">
          <label for="booking-phone" data-i18n="modal_phone">Telefono</label>
          <input type="tel" id="booking-phone" name="phone" data-i18n-placeholder="modal_phone" />
        </div>
        <div class="form-group full">
          <label for="booking-notes" data-i18n="modal_notes">Note</label>
          <textarea id="booking-notes" name="notes" data-i18n-placeholder="modal_notes"></textarea>
        </div>
      </div>
      <button type="submit" class="btn btn-primary modal-submit" data-i18n="modal_submit">Invia richiesta</button>
    </form>
    <div id="booking-success">
      <div class="checkmark">✓</div>
      <p data-i18n="modal_success">Richiesta inviata! Vi contatteremo a breve per confermare.</p>
    </div>
  </div>
</div>`;

  // Inject navbar at top of body
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);

  // Inject footer and modal before </body>
  document.body.insertAdjacentHTML('beforeend', footerHTML + modalHTML);
})();
