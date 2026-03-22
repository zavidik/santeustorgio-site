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
    author: "Paola M.",
    rating: 5,
    text_it: "Gustato dei piatti davvero ottimi...dall' entré offerto dalla casa al dolce... tutto molto buono...😋😋😋 Personale molto gentile e disponibile.  Complimenti e alla prossima...👍👍👍",
    text_en: "I enjoyed some truly excellent dishes… from the complimentary entrée to the dessert… everything was very good 😋😋😋 The staff was very kind and helpful. Compliments, and see you next time 👍👍👍",
    date_it: "Settembre 2025",
    date_en: "September 2025"
  },
  {
    author: "Silvia C.",
    rating: 5,
    text_it: "Una serata davvero piacevole, condivisa con amici, in un ambiente curato e accogliente. Il risotto è stato eccellente, equilibrato e raffinato, mentre lo zabaione finale ha conquistato tutti, regalando una chiusura memorabile. Ottima anche la macedonia con gelato, preparata con frutta freschissima, leggera e piacevolmente armoniosa. Il personale si è dimostrato estremamente gentile e attento, contribuendo a creare un clima rilassato e piacevole per tutta la durata della cena. La location, in Piazza Sant’Eustorgio, aggiunge un valore ulteriore all’esperienza grazie a un’atmosfera calda ed elegante. Un ristorante che unisce qualità, professionalità e un’autentica attenzione al cliente. Un luogo in cui tornare con grande piacere.",
    text_en: "A truly pleasant evening, shared with friends, in a refined and welcoming setting. The risotto was excellent, balanced and refined, while the final zabaglione won everyone over, providing a memorable ending. The fruit salad with ice cream was also excellent, prepared with very fresh fruit, light and pleasantly harmonious. The staff proved to be extremely kind and attentive, helping to create a relaxed and enjoyable atmosphere throughout the dinner. The location, in Piazza Sant’Eustorgio, adds further value to the experience thanks to its warm and elegant ambiance. A restaurant that combines quality, professionalism, and genuine attention to the customer. A place to return to with great pleasure.",
    date_it: "Gennaio 2025",
    date_en: "Jenuary 2025"
  },
  {
    author: "Marta Z.",
    rating: 5,
    text_it: "Piatti squisiti (sia per vegetariani che amanti di carne e pesce) e bellissima atmosfera rinnovata post ri-apertura. Personale molto cortese e vista mozzafiato sulla Piazza S.Eustorgio! Super consigliato!",
    text_en: "Exquisite dishes (both for vegetarians and for lovers of meat and fish) and a beautiful atmosphere, newly refreshed after reopening. Very courteous staff and a breathtaking view over Piazza S. Eustorgio! Highly recommended!",
    date_it: "Marzo 2025",
    date_en: "March 2025"
  },
  {
    author: "Calogero V.",
    rating: 5,
    text_it: "Sono stato al Ristorante Sant’Eustorgio con la mia ragazza e devo dire che è stata un’esperienza davvero piacevole. Fin da subito ci ha colpito l'accoglienza calorosa dello staff e in particolare del titolare Matteo, un ragazzo giovane, simpatico e molto disponibile. Il ristorante si affaccia direttamente su Piazza Sant’Eustorgio, una location davvero suggestiva, e abbiamo avuto la fortuna di cenare all’aperto, godendoci una vista bellissima e un’atmosfera rilassata. Un altro punto forte è sicuramente la cucina: il menù propone piatti tipici della tradizione milanese, preparati con cura e grande attenzione ai dettagli. Una cucina autentica che valorizza la tradizione, ma con un tocco giovane e moderno. In definitiva, un posto che consiglio vivamente, sia per una serata romantica che per un pranzo rilassato nel cuore di Milano. Consigliatissimo!",
    text_en: "I went to Ristorante Sant’Eustorgio with my girlfriend, and I must say it was a truly pleasant experience. From the very beginning, we were impressed by the warm welcome from the staff, especially the owner Matteo—a young, friendly, and very helpful guy. The restaurant overlooks Piazza Sant’Eustorgio, a truly charming location, and we were lucky enough to dine outdoors, enjoying a beautiful view and a relaxed atmosphere. Another strong point is definitely the cuisine: the menu features typical dishes from the Milanese tradition, prepared with care and great attention to detail. It’s an authentic cuisine that enhances tradition, but with a fresh and modern touch. All in all, a place I highly recommend, whether for a romantic evening or a relaxed lunch in the heart of Milan. Highly recommended!",
    date_it: "Ottobre 2025",
    date_en: "October 2025"
  },
  {
    author: "Maddalena M.",
    rating: 5,
    text_it: "Ristorante storico milanese con nuova gestione, menù vario (piatti della tradizione più proposte piemontesi e lombarde), locale tranquillo e accogliente, personale attento e disponibile. Abbiamo mangiato e bevuto benissimo, non vediamo l’ora di tornare per poter mangiare anche all’esterno con la bella stagione!",
    text_en: "A historic Milanese restaurant under new management, offering a varied menu (traditional dishes along with Piedmontese and Lombard specialties). The place is მშვიდ and welcoming, with attentive and helpful staff. We ate and drank very well, and we can’t wait to come back to enjoy dining outdoors during the warmer season!",
    date_it: "Giugno 2025",
    date_en: "June 2025"
  },
  {
    author: "ADiCA V.",
    rating: 5,
    text_it: "Esperienza sempre meravigliosa. Cibo delizioso, accostamenri creativi, piatti gustosi ma delicati. Atmosfera di casa in un contesto curato nel pieno centro di Milano. Matteo, il gestore, ti accoglie sempre in maniera squisita e gentile, venendo incontro ad ogni tua esigenza. Piatti anche vegetariani. Molto consigliato. Anche la nostra bassottina e’ sempre molto ben accolta.",
    text_en: "Always a wonderful experience. Delicious food, creative combinations, and dishes that are flavorful yet delicate. A homely atmosphere in a refined setting in the heart of Milan. Matteo, the manager, always welcomes you with great kindness and warmth, accommodating every need. Vegetarian options are also available. Highly recommended. Even our little dachshund is always very well welcomed.",
    date_it: "Febbraio 2025",
    date_en: "February 2025"
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
