// ============================================================
// reviews.js — Recensioni Google
// Per aggiungere/modificare una recensione: modifica l'array reviews
// author: nome dell'autore
// rating: voto da 1 a 5
// text_it: testo in italiano
// text_en: testo in inglese (traduzione)
// date_it: data in italiano
// date_en: data in inglese
// ============================================================

const reviews = [
  {
    author: "Marco B.",
    rating: 5,
    text_it: "Un posto meraviglioso nel cuore di Milano. La cucina lombarda è autentica e i piatti sono preparati con ingredienti freschissimi. Il personale è gentile e accogliente. Tornerò sicuramente!",
    text_en: "A wonderful place in the heart of Milan. The Lombard cuisine is authentic and the dishes are prepared with very fresh ingredients. The staff is kind and welcoming. I will definitely come back!",
    date_it: "Marzo 2025",
    date_en: "March 2025"
  },
  {
    author: "Laura M.",
    rating: 5,
    text_it: "Ambiente bellissimo, cibo eccezionale e posizione fantastica vicino alla Basilica di Sant'Eustorgio. I risotti erano perfetti e il vino selezionato dalla cantina era sublime. Consigliato!",
    text_en: "Beautiful atmosphere, exceptional food and fantastic location near the Basilica di Sant'Eustorgio. The risottos were perfect and the wine selected from the cellar was sublime. Highly recommended!",
    date_it: "Febbraio 2025",
    date_en: "February 2025"
  },
  {
    author: "Giovanni R.",
    rating: 5,
    text_it: "La nuova gestione ha fatto un lavoro eccellente. Si percepisce la passione in ogni piatto. L'atmosfera è calda e conviviale, proprio come una vera osteria milanese. La cotoletta alla milanese è da sogno!",
    text_en: "The new management has done an excellent job. You can feel the passion in every dish. The atmosphere is warm and convivial, just like a real Milanese osteria. The cotoletta alla milanese is a dream!",
    date_it: "Gennaio 2025",
    date_en: "January 2025"
  },
  {
    author: "Sofia K.",
    rating: 5,
    text_it: "Abbiamo festeggiato un anniversario qui e tutto era perfetto. Dalla mise en place alla scelta del vino, ogni dettaglio curato con amore. Un'esperienza che ci porteremo nel cuore. Grazie!",
    text_en: "We celebrated an anniversary here and everything was perfect. From the table setting to the wine selection, every detail cared for with love. An experience we will carry in our hearts. Thank you!",
    date_it: "Dicembre 2024",
    date_en: "December 2024"
  },
  {
    author: "Tomás V.",
    rating: 5,
    text_it: "Sono venuto apposta da Barcellona per visitare la Basilica e ho trovato questo gioiello proprio accanto. Cucina tradizionale lombarda di altissimo livello, personale cordiale, prezzi onesti. Un must!",
    text_en: "I came all the way from Barcelona to visit the Basilica and found this gem right next to it. High-quality traditional Lombard cuisine, friendly staff, fair prices. A must!",
    date_it: "Novembre 2024",
    date_en: "November 2024"
  },
  {
    author: "Alessia F.",
    rating: 5,
    text_it: "Finalmente un ristorante che rispetta la tradizione milanese senza essere banale. I tajarin al ragù di cinghiale erano spettacolari. L'ambiente è elegante ma informale, perfetto per ogni occasione.",
    text_en: "Finally a restaurant that respects Milanese tradition without being trivial. The tajarin with wild boar ragù were spectacular. The ambiance is elegant yet informal, perfect for any occasion.",
    date_it: "Ottobre 2024",
    date_en: "October 2024"
  }
];

// ============================================================
// Motore recensioni — non modificare salvo necessità
// ============================================================
let currentReviewIndex = 0;
let reviewInterval = null;

function renderStars(rating) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="star ${i < rating ? "filled" : ""}">★</span>`
  ).join("");
}

function showReview(index) {
  const lang = typeof currentLang !== "undefined" ? currentLang : "it";
  const review = reviews[index];
  const textKey = `text_${lang}`;
  const dateKey = `date_${lang}`;

  const card = document.getElementById("review-card");
  if (!card) return;

  card.classList.add("fade-out");
  setTimeout(() => {
    card.innerHTML = `
      <div class="review-stars">${renderStars(review.rating)}</div>
      <p class="review-text">"${review[textKey] || review.text_it}"</p>
      <div class="review-author">
        <span class="review-name">${review.author}</span>
        <span class="review-date">${review[dateKey] || review.date_it}</span>
      </div>
    `;
    card.classList.remove("fade-out");
    card.classList.add("fade-in");
    setTimeout(() => card.classList.remove("fade-in"), 400);
  }, 300);

  // dots
  document.querySelectorAll(".review-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function nextReview() {
  currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
  showReview(currentReviewIndex);
}

function prevReview() {
  currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
  showReview(currentReviewIndex);
}

function initReviews() {
  const dotsContainer = document.getElementById("review-dots");
  if (!dotsContainer) return;

  dotsContainer.innerHTML = reviews.map((_, i) =>
    `<button class="review-dot ${i === 0 ? "active" : ""}" onclick="goToReview(${i})" aria-label="Recensione ${i + 1}"></button>`
  ).join("");

  showReview(0);

  document.getElementById("review-prev")?.addEventListener("click", () => { prevReview(); resetInterval(); });
  document.getElementById("review-next")?.addEventListener("click", () => { nextReview(); resetInterval(); });

  reviewInterval = setInterval(nextReview, 6000);
}

function goToReview(i) {
  currentReviewIndex = i;
  showReview(i);
  resetInterval();
}

function resetInterval() {
  clearInterval(reviewInterval);
  reviewInterval = setInterval(nextReview, 6000);
}

document.addEventListener("DOMContentLoaded", initReviews);

// Aggiorna le recensioni quando cambia la lingua
const _origSetLang = typeof setLang !== "undefined" ? setLang : null;
document.addEventListener("langchange", () => showReview(currentReviewIndex));
