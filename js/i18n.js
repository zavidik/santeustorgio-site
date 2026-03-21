// ============================================================
// i18n.js — Traduzioni IT / EN
// Per aggiungere una lingua: aggiungi una nuova chiave all'oggetto translations
// Per modificare un testo: trova la chiave corrispondente e modifica il valore
// ============================================================

const translations = {
  it: {
    // NAV
    nav_home: "Homepage",
    nav_about: "Chi siamo",
    nav_kitchen: "Cucina",
    nav_menu: "Menù",
    nav_cellar: "Cantina",
    nav_events: "Eventi",
    nav_venue: "Locale",
    nav_contacts: "Contatti",
    nav_book: "Prenota un tavolo",
    nav_city: "Milano",

    // HERO
    hero_title: "Ristorante Sant'Eustorgio",
    hero_subtitle: "Milano",
    hero_book: "Prenota un tavolo",

    // INTRO
    intro_text: "Nel cuore di Milano, a pochi passi dalla Basilica di Sant'Eustorgio, la nostra osteria custodisce i sapori autentici della tradizione lombarda e piemontese. La nuova gestione 2025 rinnova un luogo amato, mantenendo l'anima conviviale e inserendo una vena contemporanea nei piatti e nell'atmosfera.",

    // SECTION 1 — Cucina
    section1_title: "La nostra cucina",
    section1_subtitle: "Un equilibrio tra tradizione e creatività.",
    section1_text: "La cucina dell'Osteria Sant'Eustorgio è un viaggio tra Milano e il Piemonte, dove gli ingredienti locali incontrano la cura del dettaglio. Tutto è preparato al momento, con materie prime selezionate e un tocco moderno che non snatura la tradizione.",
    section1_btn: "Scopri di più",
    section1_link: "pages/cucina.html",

    // SECTION 2 — Locale
    section2_title: "Ristorante nel cuore di Milano",
    section2_subtitle: "Con vista sulla storia e profumo di casa.",
    section2_text: "La cucina dell'Osteria Sant'Eustorgio è un viaggio tra Milano e il Piemonte, dove gli ingredienti locali incontrano la cura del dettaglio. Tutto è preparato al momento, con materie prime selezionate e un tocco moderno che non snatura la tradizione.",
    section2_btn: "Scopri di più",
    section2_link: "pages/locale.html",

    // GALLERY
    gallery_title: "La nostra galleria",

    // REVIEWS
    reviews_title: "Dicono di noi",
    reviews_subtitle: "Le opinioni dei nostri ospiti su Google",

    // FOOTER
    footer_hours_title: "Orari",
    footer_hours: "Tutti i giorni 12:00 – 23:00",
    footer_contacts_title: "Contatti",
    footer_address: "Piazza Sant'Eustorgio, 6, 20122 Milano MI",
    footer_phone: "+39 02 0000000",
    footer_email: "ristorante@santeustorgiomilano.it",
    footer_instagram: "ristorante_sant'eustorgiomilano",
    footer_rights: "© 2025 Ristorante Sant'Eustorgio. Tutti i diritti riservati.",

    // BOOKING MODAL
    modal_title: "Prenota un tavolo",
    modal_name: "Nome e cognome",
    modal_date: "Data",
    modal_time: "Orario",
    modal_guests: "Numero di ospiti",
    modal_phone: "Telefono",
    modal_notes: "Note (allergie, occasioni speciali...)",
    modal_submit: "Invia richiesta",
    modal_close: "Chiudi",
    modal_success: "Richiesta inviata! Vi contatteremo a breve per confermare.",

    // CHI SIAMO PAGE
    about_hero_title: "Chi siamo",
    about_hero_btn: "Prenota ora",

    about_story_label: "La nostra storia",
    about_story_title: "La nostra storia",
    about_story_p1: "Sant'Eustorgio Milano nasce a febbraio 2025 in una delle piazze più incantevoli della città, all'ombra dell'omonima basilica. Il progetto si concretizza grazie al desiderio di cinque ragazzi di portare in tavola la cultura enogastronomica delle proprie città d'origine.",
    about_story_p2: "Sant'Eustorgio Milano intende realizzare una sinergia tra Bergamo, Milano e il Piemonte, ricreando un luogo che, con le proposte de La Tradizione, possa ricordare i sapori di casa agli amici milanesi di nascita o di adozione; come le proposte de Le origini, possa raccontare le radici di chi questo posto lo ha immaginato e desiderato a lungo; con le proposte de La Contemporaneità, possa stupire con sapori nuovi e sorprendenti.",
    about_story_btn: "Menù",

    about_management_title: "Una nuova gestione",
    about_management_text: "Nel 2025 il ristorante ha trovato una nuova guida, animata dal desiderio di custodire la tradizione e allo stesso tempo renderla viva. Dalla tartare di Fassona al risotto alla milanese, ogni piatto è un gesto di rispetto verso la materia prima e un omaggio alla cucina lombarda e piemontese. La proposta gastronomica evolve seguendo le stagioni e la creatività dello chef, mantenendo saldi i valori di autenticità e gusto.",

    about_wine_title: "Vino e conoscenza",
    about_wine_text: "La proprietà rappresenta anche una cantina rinomata. Da questa esperienza nasce una carta dei vini costruita con rigore e passione, che attraversa le regioni d'Italia con particolare attenzione ai produttori piemontesi e lombardi. Lo staff, formato e aggiornato, accompagna ogni piatto con il calice giusto, creando un dialogo costante tra cucina e vino.",

    // CUCINA PAGE
    cucina_hero_title: "Cucina",

    cucina_intro_title: "La cucina",
    cucina_intro_subtitle: "Sapori autentici, ingredienti locali e rispetto per la tradizione.",
    cucina_intro_text: "Da Sant'Eustorgio Milano la cucina è una dichiarazione d'amore per Milano e il Piemonte. I piatti nascono da ricette tramandate, reinterpretate con delicatezza e rigore. Ogni portata è preparata al momento, con ingredienti selezionati e accostamenti che esaltano la memoria del gusto.",
    cucina_intro_btn: "Menù",

    cucina_tradition_title: "La tradizione che si rinnova ogni giorno",
    cucina_tradition_subtitle: "Cucina sincera, radici solide e un tocco contemporaneo.",
    cucina_tradition_text: "Il menu segue la stagionalità e racconta il territorio attraverso profumi e consistenze autentiche. Dal risotto saltato della tradizione ai fusilloni alla Norma con pesce spada, ogni piatto unisce storia e creatività. La materia prima è protagonista: carni piemontesi selezionate, formaggi d'alpeggio, verdure di stagione e prodotti locali scelti con cura. Nulla è lasciato al caso, perché ogni dettaglio contribuisce a creare un'esperienza completa.",

    cucina_dishes_title: "Risotti, tartare e piatti simbolo",
    cucina_dishes_subtitle: "Una selezione che parla di identità.",
    cucina_dishes_text: "Il risotto alla milanese, preparato con burro acido e jus di vitello, è un omaggio alla città; la tartare di Fassona racconta l'eleganza della carne piemontese; l'ossobuco con risotto allo zafferano porta in tavola il profumo delle domeniche di un tempo. Poi ci sono le lingue salmistrate con bagnetto rosso, i ravioli di grano saraceno al Bitto e funghi porcini, e il petto d'anatra al Nebbiolo: piatti che restano nel cuore.",

    // CANTINA PAGE
    cantina_hero_title: "Cantina",

    cantina_production_title: "Vini di nostra produzione",
    cantina_production_p1: "L'azienda vitivinicola Medolago Albani si trova sulle colline di Redona in Comune di Trescore Balneario in provincia di Bergamo.",
    cantina_production_p2: "I 30 ettari vitati hanno esposizione ottimale in una conca rivolta a mezzogiorno. I terreni calcareo-argillosi e l'ottimo micro-clima favoriscono da secoli la coltivazione della vite.",
    cantina_production_p3: "La nostra passione per i vini ci ha portato, inoltre, a conoscere anche le altre cantine e avere una selezione ricercata.",
    cantina_production_btn: "Carta vini",

    cantina_pairings_title: "Abbinamenti studiati per ogni piatto",
    cantina_pairings_subtitle: "Cucina sincera, radici solide e un tocco contemporaneo.",
    cantina_pairings_intro: "Ogni proposta in tavola trova nel vino la sua voce complementare.",
    cantina_pairings_text: "Il risotto alla milanese incontra la morbidezza di un Franciacorta; la tartare di Fassona si esalta con un Dolcetto; il vitello tonnato dialoga con un Arneis elegante; mentre il petto d'anatra al Nebbiolo celebra il perfetto equilibrio tra terra e frutto. Gli abbinamenti nascono dal confronto costante tra sala e cucina, per offrire un'esperienza armoniosa e completa.",

    cantina_culture_title: "Il vino come un'esperienza culturale",
    cantina_culture_subtitle: "Non solo degustazione, ma scoperta.",
    cantina_culture_text: "L'approccio del Sant'Eustorgio Milano è educativo e appassionato. Lo staff, formato direttamente dal titolare, conosce i vitigni, le annate e le tecniche di vinificazione, trasformando la scelta del vino in un momento di dialogo e condivisione. Ogni servizio diventa occasione per far conoscere le eccellenze enologiche italiane e valorizzare il legame tra cucina e territorio.",

    // MENU PAGE
    menu_hero_title: "Menù",
    menu_water: "Acqua",
    menu_cover: "Coperto",
    menu_allergens_note: "In caso di allergie e/o intolleranze non esitate a chiedere al nostro personale, faremo il possibile per soddisfare le Vostre esigenze.",

    menu_tab_tradition: "La tradizione",
    menu_tab_origins: "Le origini",
    menu_tab_contemporary: "La contemporaneità",
    menu_tab_dessert: "Dessert",

    // La tradizione
    trad_1_name: "Midollo di vitello arrosto, tartare di Fassona e senape (10)",
    trad_1_price: "€18",
    trad_2_name: "Tagliere di salumi misti della Lombardia",
    trad_2_price: "€17",
    trad_3_name: "Risotto saltato della tradizione milanese (7)",
    trad_3_price: "€16",
    trad_3_note: "con aggiunta di gorgonzola (7) €3",
    trad_4_name: "Risotto alla milanese, burro acido, jus di vitello (7)",
    trad_4_price: "€19",
    trad_5_name: "Ossobuco di vitello alla milanese, servito con risotto allo zafferano o puré di patate (7,9)",
    trad_5_price: "€33",
    trad_6_name: "Costoletta di vitello impanata e fritta alla milanese e patate al forno (1,3,7)",
    trad_6_price: "€33",
    trad_6_note1: "con aggiunta di prosciutto cotto e fontina €3",
    trad_6_note2: "con aggiunta di rucola e pomodorini €3",
    trad_7_name: "Cervella di vitello fritte secondo la tradizione e patate al forno (1,3,7)",
    trad_7_price: "€25",

    // Le origini
    orig_1_name: "Antipasto misto piemontese",
    orig_1_price: "€26",
    orig_1_note: "tomino e acciughe in salsa verde, vitello tonnato, lardo d'Arnad e castagne glassate al miele e salsiccia di bovino piemontese con focaccia (1,3,4,7)",
    orig_2_name: "Vitello tonnato tradizionale (3,4)",
    orig_2_price: "€16",
    orig_3_name: "Tartare di Fassona, fonduta di grana padano e nocciole tostate (6,7,8)",
    orig_3_price: "€20",
    orig_4_name: "Terrina di lingua di manzo e testina, lardo e salsa verde (3,9)",
    orig_4_price: "€17",
    orig_5_name: "Tajiarin di pasta fresca al 30 tuorli, al ragù di salsiccia al vino bianco (1,3,7)",
    orig_5_price: "€15",
    orig_6_name: "Ravioli piemontesi del \"plin\" ripieni di manzo al sugo d'arrosto (1,3,7)",
    orig_6_price: "€17",
    orig_7_name: "Gnocchi di zucca al gorgonzola, salvia e castagne (1,3,7)",
    orig_7_price: "€15",
    orig_8_name: "Brasato di manzo al nebbiolo, crema di cavolfiore e cavolo rosso stufato (7,9)",
    orig_8_price: "€30",
    orig_9_name: "Tagliata di controfiletto di razza piemontese, spinacino fresco e salsa piccante",
    orig_9_price: "€30",
    orig_10_name: "Polenta taragna con spezzatino di cervo (9)",
    orig_10_price: "€28",

    // La contemporaneità
    cont_1_name: "Zucca infornata, pane al rosmarino, formaggella di Scalve e polvere di barbabietola (1,7)",
    cont_1_price: "€14",
    cont_2_name: "Vitello tonnato tradizionale (3,4)",
    cont_2_price: "€16",
    cont_3_name: "Tartare di Fassona, fonduta di grana padano e nocciole tostate (6,7,8)",
    cont_3_price: "€20",
    cont_4_name: "Maccheroni al pesto di cavolo nero, crudo di branzino* e limone (1,4,7)",
    cont_4_price: "€16",
    cont_5_name: "Pasta e ceci, crumble di cotechino e cipolla bruciata (1,8)",
    cont_5_price: "€15",
    cont_6_name: "Petto d'anatra cotto a bassa temperatura, purè di patate al tartufo e topinambur (7,8)",
    cont_6_price: "€31",
    cont_7_name: "Carciofi violetti fritti, porri, patate e capperi (8,9)",
    cont_7_price: "€19",

    // Dessert
    dess_1_name: "Tiramisù (1,3,7)",
    dess_1_price: "€8",
    dess_2_name: "Bonet piemontese (1,3,7)",
    dess_2_price: "€8",
    dess_3_name: "Crème caramel (3,7)",
    dess_3_price: "€8",
    dess_4_name: "Zabaione al Passito di Caluso e panettone (1,3,5,8)",
    dess_4_price: "€10",
    dess_5_name: "Riso e latte caramellato, gelato alla nocciola e cannella (7,8)",
    dess_5_price: "€8",
    dess_6_name: "Tortino al cioccolato dal cuore morbido con gelato alla vaniglia (1,3,7)",
    dess_6_price: "€8",
    dess_7_name: "Macedonia di frutta fresca con gelato alla crema all'uovo (3,7)",
    dess_7_price: "€7",
    dess_8_name: "Gelati e sorbetti secondo disponibilità",
    dess_8_price: "€6",

    // PAGES (sottopagine)
    page_about_title: "Chi siamo",
    page_kitchen_title: "La nostra cucina",
    page_menu_title: "Il menù",
    page_cellar_title: "La cantina",
    page_events_title: "Eventi",
    page_venue_title: "Il locale",
    page_contacts_title: "Contatti",
    coming_soon: "Pagina in costruzione. Torna presto!",

    // EVENTI PAGE
    eventi_hero_title: "Eventi",

    eventi_private_title: "Eventi privati",
    eventi_private_subtitle: "Il piacere di stare insieme, nel cuore della città.",
    eventi_private_text: "Sant'Eustorgio Milano è il luogo ideale per ospitare eventi privati, cene aziendali e ricorrenze in un'atmosfera autentica e curata. Tra le vie del centro di Milano, a pochi passi dalla basilica, offriamo spazi accoglienti e una cucina piemontese e milanese che racconta il territorio attraverso i suoi sapori più veri.",
    eventi_private_btn: "Contatti",

    eventi_spaces_title: "Spazi accoglienti per ogni occasione",
    eventi_spaces_subtitle: "Due sale interne e un dehor con vista sulla piazza.",
    eventi_spaces_text: "Il ristorante dispone di due sale interne per un totale di 60 coperti: una più ampia, ideale per gruppi e serate conviviali, e una più intima, perfetta per cene riservate o incontri aziendali. All'esterno, un dehor da 50 posti affacciato su Piazza Sant'Eustorgio regala un'atmosfera unica, tra le luci della città e la quiete della piazza. Ogni evento può essere personalizzato nei dettagli, dagli allestimenti alla disposizione dei tavoli.",

    eventi_form_left_title: "Organizza il tuo evento su misura",
    eventi_form_left_sub: "Compila il modulo per ricevere una proposta personalizzata.",
    eventi_form_title: "Richiedi il tuo preventivo",
    eventi_form_name: "Nome e cognome",
    eventi_form_email: "Email",
    eventi_form_phone: "Telefono",
    eventi_form_type: "Tipologia di evento",
    eventi_form_type_placeholder: "Es. cena aziendale, compleanno, matrimonio…",
    eventi_form_guests: "Numero di invitati",
    eventi_form_message: "Messaggio",
    eventi_form_message_placeholder: "Raccontaci la tua idea: data, orario, richieste particolari…",
    eventi_form_privacy: "Ho letto e accettato i termini e le condizioni della",
    eventi_form_privacy_link: "Privacy Policy",
    eventi_form_submit: "Invia richiesta",
    eventi_form_success: "Richiesta inviata! Ti contatteremo a breve con una proposta personalizzata.",
    eventi_form_error_required: "Tutti i campi sono obbligatori.",
    eventi_form_error_captcha: "Conferma di non essere un robot.",
    eventi_form_error_privacy: "Devi accettare la Privacy Policy per continuare.",
  },

  en: {
    // NAV
    nav_home: "Homepage",
    nav_about: "About us",
    nav_kitchen: "Kitchen",
    nav_menu: "Menu",
    nav_cellar: "Wine Cellar",
    nav_events: "Events",
    nav_venue: "The Venue",
    nav_contacts: "Contacts",
    nav_book: "Book a table",
    nav_city: "Milan",

    // HERO
    hero_title: "Ristorante Sant'Eustorgio",
    hero_subtitle: "Milan",
    hero_book: "Book a table",

    // INTRO
    intro_text: "In the heart of Milan, steps from the Basilica di Sant'Eustorgio, our osteria preserves the authentic flavors of Lombard and Piedmontese tradition. The new 2025 management renews a beloved place, keeping its convivial spirit while introducing a contemporary touch to the dishes and atmosphere.",

    // SECTION 1 — Kitchen
    section1_title: "Our kitchen",
    section1_subtitle: "A balance between tradition and creativity.",
    section1_text: "The kitchen of Osteria Sant'Eustorgio is a journey between Milan and Piedmont, where local ingredients meet attention to detail. Everything is prepared fresh, with selected raw materials and a modern touch that does not alter tradition.",
    section1_btn: "Discover more",
    section1_link: "pages/cucina.html",

    // SECTION 2 — Venue
    section2_title: "Restaurant in the heart of Milan",
    section2_subtitle: "With a view of history and the scent of home.",
    section2_text: "The kitchen of Osteria Sant'Eustorgio is a journey between Milan and Piedmont, where local ingredients meet attention to detail. Everything is prepared fresh, with selected raw materials and a modern touch that does not alter tradition.",
    section2_btn: "Discover more",
    section2_link: "pages/locale.html",

    // GALLERY
    gallery_title: "Our gallery",

    // REVIEWS
    reviews_title: "What they say about us",
    reviews_subtitle: "Our guests' opinions on Google",

    // FOOTER
    footer_hours_title: "Hours",
    footer_hours: "Every day 12:00 – 23:00",
    footer_contacts_title: "Contacts",
    footer_address: "Piazza Sant'Eustorgio, 6, 20122 Milan MI",
    footer_phone: "+39 02 0000000",
    footer_email: "ristorante@santeustorgiomilano.it",
    footer_instagram: "ristorante_sant'eustorgiomilano",
    footer_rights: "© 2025 Ristorante Sant'Eustorgio. All rights reserved.",

    // BOOKING MODAL
    modal_title: "Book a table",
    modal_name: "Full name",
    modal_date: "Date",
    modal_time: "Time",
    modal_guests: "Number of guests",
    modal_phone: "Phone",
    modal_notes: "Notes (allergies, special occasions...)",
    modal_submit: "Send request",
    modal_close: "Close",
    modal_success: "Request sent! We will contact you shortly to confirm.",

    // CHI SIAMO PAGE
    about_hero_title: "About us",
    about_hero_btn: "Book now",

    about_story_label: "Our story",
    about_story_title: "Our story",
    about_story_p1: "Sant'Eustorgio Milano was born in February 2025 in one of the city's most enchanting squares, in the shadow of the namesake basilica. The project came to life through the desire of five young people to bring the food and wine culture of their hometowns to the table.",
    about_story_p2: "Sant'Eustorgio Milano aims to create a synergy between Bergamo, Milan and Piedmont, recreating a place that — through La Tradizione — recalls the flavors of home for Milanese friends by birth or adoption; through Le Origini, tells the roots of those who imagined and longed for this place; through La Contemporaneità, surprises with new and unexpected flavors.",
    about_story_btn: "Menu",

    about_management_title: "A new management",
    about_management_text: "In 2025, the restaurant found new leadership, driven by the desire to preserve tradition while keeping it alive. From Fassona beef tartare to risotto alla milanese, every dish is an act of respect towards the ingredients and a tribute to Lombard and Piedmontese cuisine. The menu evolves with the seasons and the chef's creativity, maintaining firm values of authenticity and taste.",

    about_wine_title: "Wine & knowledge",
    about_wine_text: "The ownership also represents a renowned wine cellar. From this experience comes a wine list built with rigor and passion, traversing Italy's regions with particular attention to Piedmontese and Lombard producers. The trained and informed staff pairs each dish with the right glass, creating a constant dialogue between kitchen and wine.",

    // CUCINA PAGE
    cucina_hero_title: "Kitchen",

    cucina_intro_title: "The kitchen",
    cucina_intro_subtitle: "Authentic flavors, local ingredients and respect for tradition.",
    cucina_intro_text: "At Sant'Eustorgio Milano, the kitchen is a declaration of love for Milan and Piedmont. Dishes are born from handed-down recipes, reinterpreted with delicacy and rigor. Every course is prepared fresh, with selected ingredients and pairings that celebrate the memory of taste.",
    cucina_intro_btn: "Menu",

    cucina_tradition_title: "Tradition renewed every day",
    cucina_tradition_subtitle: "Honest cuisine, solid roots and a contemporary touch.",
    cucina_tradition_text: "The menu follows seasonality and tells the story of the territory through authentic aromas and textures. From the traditional sautéed risotto to fusilli alla Norma with swordfish, each dish unites history and creativity. The raw ingredient is the star: selected Piedmontese meats, mountain cheeses, seasonal vegetables and carefully chosen local products. Nothing is left to chance, because every detail contributes to a complete experience.",

    cucina_dishes_title: "Risottos, tartares and signature dishes",
    cucina_dishes_subtitle: "A selection that speaks of identity.",
    cucina_dishes_text: "The risotto alla milanese, made with sour butter and veal jus, is a tribute to the city; the Fassona tartare tells the elegance of Piedmontese beef; the ossobuco with saffron risotto brings the scent of Sunday lunches past. Then there are the salted tongues with red sauce, buckwheat ravioli with Bitto and porcini mushrooms, and duck breast with Nebbiolo: dishes that stay in the heart.",

    // CANTINA PAGE
    cantina_hero_title: "Wine Cellar",

    cantina_production_title: "Our own wines",
    cantina_production_p1: "The Medolago Albani winery is located on the hills of Redona in the municipality of Trescore Balneario, in the province of Bergamo.",
    cantina_production_p2: "The 30 hectares of vineyards have optimal sun exposure in a south-facing bowl. The calcareous-clay soils and excellent microclimate have favoured viticulture for centuries.",
    cantina_production_p3: "Our passion for wines has also led us to discover other wineries and build a refined selection.",
    cantina_production_btn: "Wine list",

    cantina_pairings_title: "Pairings crafted for every dish",
    cantina_pairings_subtitle: "Honest cuisine, solid roots and a contemporary touch.",
    cantina_pairings_intro: "Every dish on the table finds its complementary voice in wine.",
    cantina_pairings_text: "The risotto alla milanese meets the softness of a Franciacorta; the Fassona tartare is enhanced by a Dolcetto; vitello tonnato dialogues with an elegant Arneis; while duck breast with Nebbiolo celebrates the perfect balance between earth and fruit. Pairings are born from constant exchange between front of house and kitchen, to offer a harmonious and complete experience.",

    cantina_culture_title: "Wine as a cultural experience",
    cantina_culture_subtitle: "Not just tasting, but discovery.",
    cantina_culture_text: "The Sant'Eustorgio Milano approach is educational and passionate. Staff trained directly by the owner know the grape varieties, vintages and winemaking techniques, turning the choice of wine into a moment of dialogue and sharing. Every service becomes an opportunity to introduce the finest Italian wines and celebrate the bond between cuisine and territory.",

    // MENU PAGE
    menu_hero_title: "Menu",
    menu_water: "Water",
    menu_cover: "Cover charge",
    menu_allergens_note: "If you have any allergies or intolerances, please do not hesitate to ask our staff — we will do our best to meet your needs.",

    menu_tab_tradition: "La tradizione",
    menu_tab_origins: "Le origini",
    menu_tab_contemporary: "La contemporaneità",
    menu_tab_dessert: "Dessert",

    // La tradizione
    trad_1_name: "Roasted veal marrow, Fassona tartare and mustard (10)",
    trad_1_price: "€18",
    trad_2_name: "Mixed Lombardy charcuterie board",
    trad_2_price: "€17",
    trad_3_name: "Traditional Milanese sautéed risotto (7)",
    trad_3_price: "€16",
    trad_3_note: "with gorgonzola (7) €3",
    trad_4_name: "Risotto alla milanese, sour butter, veal jus (7)",
    trad_4_price: "€19",
    trad_5_name: "Veal ossobuco alla milanese, served with saffron risotto or mashed potatoes (7,9)",
    trad_5_price: "€33",
    trad_6_name: "Breaded and fried veal cutlet alla milanese with roasted potatoes (1,3,7)",
    trad_6_price: "€33",
    trad_6_note1: "with cooked ham and fontina €3",
    trad_6_note2: "with rocket and cherry tomatoes €3",
    trad_7_name: "Fried veal brain according to tradition with roasted potatoes (1,3,7)",
    trad_7_price: "€25",

    // Le origini
    orig_1_name: "Piedmontese mixed starter",
    orig_1_price: "€26",
    orig_1_note: "tomino and anchovies in green sauce, vitello tonnato, Arnad lard with honey-glazed chestnuts and Piedmontese beef sausage with focaccia (1,3,4,7)",
    orig_2_name: "Traditional vitello tonnato (3,4)",
    orig_2_price: "€16",
    orig_3_name: "Fassona tartare, grana padano fondue and toasted hazelnuts (6,7,8)",
    orig_3_price: "€20",
    orig_4_name: "Beef tongue and head cheese terrine, lard and green sauce (3,9)",
    orig_4_price: "€17",
    orig_5_name: "Fresh pasta tajiarin with 30 egg yolks, white wine sausage ragù (1,3,7)",
    orig_5_price: "€15",
    orig_6_name: "Piedmontese \"plin\" ravioli filled with beef in roasting gravy (1,3,7)",
    orig_6_price: "€17",
    orig_7_name: "Pumpkin gnocchi with gorgonzola, sage and chestnuts (1,3,7)",
    orig_7_price: "€15",
    orig_8_name: "Beef braised in Nebbiolo, cauliflower cream and braised red cabbage (7,9)",
    orig_8_price: "€30",
    orig_9_name: "Piedmontese sirloin tagliata, fresh baby spinach and spicy sauce",
    orig_9_price: "€30",
    orig_10_name: "Taragna polenta with venison stew (9)",
    orig_10_price: "€28",

    // La contemporaneità
    cont_1_name: "Roasted pumpkin, rosemary bread, Scalve formaggella and beetroot powder (1,7)",
    cont_1_price: "€14",
    cont_2_name: "Traditional vitello tonnato (3,4)",
    cont_2_price: "€16",
    cont_3_name: "Fassona tartare, grana padano fondue and toasted hazelnuts (6,7,8)",
    cont_3_price: "€20",
    cont_4_name: "Maccheroni with black kale pesto, raw sea bass* and lemon (1,4,7)",
    cont_4_price: "€16",
    cont_5_name: "Pasta e ceci, cotechino crumble and burnt onion (1,8)",
    cont_5_price: "€15",
    cont_6_name: "Slow-cooked duck breast, truffle mashed potatoes and Jerusalem artichoke (7,8)",
    cont_6_price: "€31",
    cont_7_name: "Fried violet artichokes, leeks, potatoes and capers (8,9)",
    cont_7_price: "€19",

    // Dessert
    dess_1_name: "Tiramisù (1,3,7)",
    dess_1_price: "€8",
    dess_2_name: "Piedmontese bonet (1,3,7)",
    dess_2_price: "€8",
    dess_3_name: "Crème caramel (3,7)",
    dess_3_price: "€8",
    dess_4_name: "Zabaione with Passito di Caluso and panettone (1,3,5,8)",
    dess_4_price: "€10",
    dess_5_name: "Rice and caramel milk, hazelnut ice cream and cinnamon (7,8)",
    dess_5_price: "€8",
    dess_6_name: "Warm chocolate fondant with vanilla ice cream (1,3,7)",
    dess_6_price: "€8",
    dess_7_name: "Fresh fruit salad with egg custard ice cream (3,7)",
    dess_7_price: "€7",
    dess_8_name: "Ice creams and sorbets subject to availability",
    dess_8_price: "€6",

    // PAGES
    page_about_title: "About us",
    page_kitchen_title: "Our kitchen",
    page_menu_title: "The menu",
    page_cellar_title: "The wine cellar",
    page_events_title: "Events",
    page_venue_title: "The venue",
    page_contacts_title: "Contacts",
    coming_soon: "Page under construction. Come back soon!",

    // EVENTI PAGE
    eventi_hero_title: "Events",

    eventi_private_title: "Private events",
    eventi_private_subtitle: "The pleasure of being together, in the heart of the city.",
    eventi_private_text: "Sant'Eustorgio Milano is the ideal venue for private events, corporate dinners and celebrations in an authentic and refined atmosphere. In the streets of central Milan, steps from the basilica, we offer welcoming spaces and a Piedmontese and Milanese cuisine that tells the story of the territory through its truest flavours.",
    eventi_private_btn: "Contacts",

    eventi_spaces_title: "Welcoming spaces for every occasion",
    eventi_spaces_subtitle: "Two indoor rooms and an outdoor terrace overlooking the square.",
    eventi_spaces_text: "The restaurant has two indoor rooms with a total of 60 covers: a larger one, ideal for groups and convivial evenings, and a more intimate one, perfect for private dinners or business meetings. Outside, a 50-seat terrace overlooking Piazza Sant'Eustorgio offers a unique atmosphere, between the city lights and the quiet of the square. Every event can be personalised in every detail, from the décor to the table layout.",

    eventi_form_left_title: "Organise your bespoke event",
    eventi_form_left_sub: "Fill in the form to receive a personalised proposal.",
    eventi_form_title: "Request a quote",
    eventi_form_name: "Full name",
    eventi_form_email: "Email",
    eventi_form_phone: "Phone",
    eventi_form_type: "Type of event",
    eventi_form_type_placeholder: "E.g. corporate dinner, birthday, wedding…",
    eventi_form_guests: "Number of guests",
    eventi_form_message: "Message",
    eventi_form_message_placeholder: "Tell us your idea: date, time, special requests…",
    eventi_form_privacy: "I have read and accepted the terms and conditions of the",
    eventi_form_privacy_link: "Privacy Policy",
    eventi_form_submit: "Send request",
    eventi_form_success: "Request sent! We will contact you shortly with a personalised proposal.",
    eventi_form_error_required: "All fields are required.",
    eventi_form_error_captcha: "Please confirm you are not a robot.",
    eventi_form_error_privacy: "You must accept the Privacy Policy to continue.",
  }
};

// ============================================================
// Motore i18n — non modificare salvo necessità
// ============================================================
let currentLang = localStorage.getItem("lang") || "it";

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) ||
         (translations["it"] && translations["it"][key]) ||
         key;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });
  document.querySelectorAll("[data-i18n-href]").forEach(el => {
    el.href = t(el.getAttribute("data-i18n-href"));
  });
  document.documentElement.lang = currentLang;
}

function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyTranslations();
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
});
