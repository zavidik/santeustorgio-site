/* ============================================================
   RISTORANTE SANT'EUSTORGIO — Main JavaScript
   ============================================================ */

/* ── Translations ── */
const translations = {
  it: {
    nav_home: 'Home',
    nav_chisiamo: 'Chi Siamo',
    nav_cucina: 'Cucina',
    nav_menu: 'Menù',
    nav_cantina: 'Cantina',
    nav_eventi: 'Eventi',
    nav_locale: 'Il Locale',
    nav_contatti: 'Contatti',
    nav_prenota: 'Prenota un tavolo',
    hero_label: 'Milano',
    hero_title: "Ristorante Sant'Eustorgio",
    hero_sub: 'Cucina tradizionale milanese e piemontese, rivisitata in chiave contemporanea',
    hero_cta1: 'Scopri il menù',
    hero_cta2: 'Prenota un tavolo',
    hero_scroll: 'Scorri',
    intro_quote: '«Ogni piatto racconta una storia: le radici di una tradizione secolare, il coraggio di reinventarla.»',
    about_label: 'Chi Siamo',
    about_title: 'Un incontro tra Milano e il Piemonte',
    about_text: 'Affacciato sulla suggestiva Piazza Sant\'Eustorgio, il nostro ristorante nasce dall\'incontro tra la grande tradizione culinaria milanese e le radici piemontesi del nostro chef. Un luogo intimo e raccolto, dove ogni cena diventa un\'esperienza autentica.',
    about_cta: 'La nostra storia',
    highlights_label: 'I Nostri Punti di Forza',
    highlights_title: 'Un\'esperienza completa',
    h1_icon: '🍽️',
    h1_title: 'Cucina d\'autore',
    h1_text: 'Ricette tradizionali milanesi e piemontesi rivisitate con tecnica contemporanea dallo Chef Matteo Busso.',
    h2_icon: '🍷',
    h2_title: 'Cantina Medolago Albani',
    h2_text: 'Vini di produzione propria dalla nostra cantina bergamasca, 30 ettari vitati a Trescore Balneario.',
    h3_icon: '🌿',
    h3_title: 'Atmosfera unica',
    h3_text: 'Sala intima con 60 coperti e un magnifico dehors estivo con 50 coperti sulla piazza.',
    gallery_label: 'Il Ristorante',
    gallery_title: 'Scorci dal locale',
    reviews_label: 'Cosa dicono di noi',
    reviews_title: 'Le recensioni dei nostri ospiti',
    menu_label: 'Il Menù',
    menu_title: 'Un viaggio in tre capitoli',
    menu_text: 'Il nostro menù è un racconto che attraversa tradizione e contemporaneità, dalle radici milanesi alle origini piemontesi dello chef.',
    mc1_num: 'I',
    mc1_title: 'La Tradizione',
    mc1_text: 'Classici milanesi',
    mc2_num: 'II',
    mc2_title: 'Le Origini',
    mc2_text: 'Tipici piemontesi',
    mc3_num: 'III',
    mc3_title: 'La Contemporaneità',
    mc3_text: 'Piatti moderni',
    mc4_num: '♡',
    mc4_title: 'Dessert',
    mc4_text: 'Dolci da tutto il mondo',
    menu_cta: 'Sfoglia il menù completo',
    covers_num: '110',
    covers_lbl: 'Coperti totali',
    cta_title: 'Prenota il tuo tavolo',
    cta_sub: 'Ogni sera, un\'esperienza unica nella cornice di Piazza Sant\'Eustorgio',
    cta_btn1: 'Prenota ora',
    cta_btn2: 'Richiedi informazioni',
    ft_orari: 'Orari',
    ft_everyday: 'Tutti i giorni',
    ft_hours: '12:00 – 23:00',
    ft_nav: 'Navigazione',
    ft_contatti: 'Contatti',
    ft_follow: 'Seguici',
    ft_copy: '© 2025 Ristorante Sant\'Eustorgio. Tutti i diritti riservati.',
    modal_title: 'Prenota un tavolo',
    modal_sub: 'Compila il modulo e ti ricontatteremo entro 24 ore per confermare la prenotazione.',
    modal_name: 'Nome',
    modal_surname: 'Cognome',
    modal_date: 'Data',
    modal_time: 'Orario',
    modal_guests: 'Numero ospiti',
    modal_notes: 'Note / Richieste speciali',
    modal_send: 'Invia richiesta',
    modal_success: 'Richiesta inviata! Ti contatteremo a breve.',
    btt: 'Torna su',
    // Cantina
    cant_hero_title: 'Medolago Albani',
    cant_hero_sub: '30 ettari vitati nel cuore della bergamasca, dove il vino nasce dalla stessa cura con cui nasce ogni piatto.',
    cant_intro_label: 'La nostra cantina',
    cant_intro_title: 'Vino e cucina: un unico racconto',
    cant_intro_p1: 'Ogni piatto che arriva in tavola da Sant\'Eustorgio è pensato con un vino in mente. La cantina Medolago Albani, con i suoi 30 ettari vitati sulle colline di Trescore Balneario, nella bergamasca, non è una semplice etichetta sul menù: è parte integrante della filosofia del ristorante.',
    cant_intro_p2: 'I vini Medolago Albani esprimono il carattere del territorio lombardo: eleganti, sapidi, capaci di dialogare con la ricchezza della cucina milanese e con la struttura di quella piemontese. Chef Matteo Busso costruisce i suoi abbinamenti partendo proprio da queste bottiglie.',
    cant_intro_p3: 'Un progetto agricolo e vitivinicolo che rispetta i tempi della natura, dal vigneto al bicchiere, stagione dopo stagione.',
    cant_stat1: 'Ettari vitati',
    cant_stat2_num: 'BG',
    cant_stat2: 'Bergamasca',
    cant_stat3: 'Abbinamenti',
    cant_logo_label: 'La cantina ufficiale del ristorante',
    cant_logo_cta1: 'Visita il sito della cantina ↗',
    cant_logo_cta2: 'Scopri gli abbinamenti nel menù',
    cant_vini_label: 'Selezione in carta',
    cant_vini_title: 'I vini in carta',
    cant_vini_sub: 'Una selezione dei vini Medolago Albani proposti in abbinamento ai piatti di Sant\'Eustorgio.',
    cant_abbinamento: 'Abbinamento consigliato',
    cant_vino1_tipo: 'Bianco · Fermo',
    cant_vino1_desc: 'Note floreali e fruttate con fondo minerale sapido. Fresco, elegante, ideale per i crudi e i piatti più delicati della tradizione.',
    cant_vino1_abb: 'Vitello tonnato · Risotto alla milanese · Carpacci',
    cant_vino2_tipo: 'Rosso · Strutturato',
    cant_vino2_desc: 'Rubino intenso, tannini morbidi e lunga persistenza. Frutti scuri, spezie dolci e un finale avvolgente che si apre con l\'arieggiatura.',
    cant_vino2_abb: 'Brasato al Barolo · Ossobuco · Cotoletta alla milanese',
    cant_vino3_tipo: 'Rosso · Giovane',
    cant_vino3_desc: 'Una delle rarità d\'Italia. Dolce, passito, con profumi di rosa, amarena e miele. Complessità aromatica straordinaria in ogni sorso.',
    cant_vino3_abb: 'Bonet · Formaggi stagionati · Dessert al cioccolato',
    cant_vino4_tipo: 'Rosato · Secco',
    cant_vino4_desc: 'Rosa tenue con riflessi ramati, bouquet di piccoli frutti rossi e agrumi. Bevibile, fresco, versatile in tutto il pasto.',
    cant_vino4_abb: 'Bagna cauda · Salumi · Tajarin al burro',
    cant_vino5_tipo: 'Bollicine · Brut',
    cant_vino5_desc: 'Perlage fine e persistente, sentori di pane tostato e frutta a polpa bianca. Un benvenuto elegante per ogni occasione speciale.',
    cant_vino5_abb: 'Aperitivo · Antipasti leggeri · Frutti di mare',
    cant_vino6_tipo: 'Bianco · Fermo',
    cant_vino6_desc: 'Profilo aromatico delicato con note di pesca e fiori bianchi. Acidità vivace e finale pulito, espressione autentica del terroir collinare bergamasco.',
    cant_vino6_abb: 'Agnolotti del plin · Pesce · Risotti delicati',
    cant_terr_label: 'Trescore Balneario · BG',
    cant_terr_title: 'Un territorio da scoprire',
    cant_terr_p1: 'Trescore Balneario sorge nel cuore delle colline bergamasche, in quella Val Cavallina che da secoli ospita una delle viticolture più interessanti della Lombardia. È qui che Medolago Albani coltiva i propri 30 ettari, con uve che maturano lentamente grazie all\'escursione termica tra il giorno e la notte.',
    cant_terr_p2: 'Il territorio dona ai vini una mineralità distinta, un\'acidità naturale che li rende vivaci e longevi. Caratteristiche che ben si sposano con la cucina ricca e avvolgente della tradizione milanese e piemontese, trovando il punto di equilibrio perfetto.',
    cant_terr_cta: 'Scopri la cantina sul sito ufficiale ↗',
    cant_cta_label: 'A tavola con noi',
    cant_cta_title: 'Vieni a scoprirli di persona',
    cant_cta_sub: 'I nostri vini si raccontano meglio in un bicchiere, abbinati a un piatto. Prenota il tuo tavolo.',
    cant_cta_menu: 'Consulta il menù',
    // Eventi
    evt_hero_title: 'Il tuo momento speciale',
    evt_hero_sub: 'Cene private, ricorrenze, eventi aziendali: ogni occasione merita un contesto all\'altezza.',
    evt_tipi_label: 'Cosa organizziamo',
    evt_tipi_title: 'Tre tipologie di evento',
    evt_tipi_sub: 'Ogni evento è su misura: menu, allestimento e servizio vengono pensati insieme a voi.',
    evt_tipo1_title: 'Cene Private',
    evt_tipo1_desc: 'Compleanni, anniversari, cene di famiglia o tra amici. Sant\'Eustorgio è il posto giusto per festeggiare in un\'atmosfera intima e curata.',
    evt_tipo1_d1: 'Fino a 60 coperti nella sala coperta',
    evt_tipo1_d2: 'Menu personalizzato su richiesta',
    evt_tipo1_d3: 'Abbinamento vini Medolago Albani',
    evt_tipo1_d4: 'Possibilità di sala riservata',
    evt_tipo2_title: 'Cene Aziendali',
    evt_tipo2_desc: 'Un ambiente elegante e riservato per incontrare clienti, chiudere trattative o ringraziare il team.',
    evt_tipo2_d1: 'Ambiente riservato e discreto',
    evt_tipo2_d2: 'Servizio attento e professionale',
    evt_tipo2_d3: 'Menu fisso o à la carte',
    evt_tipo2_d4: 'Fatturazione aziendale disponibile',
    evt_tipo3_title: 'Ricorrenze',
    evt_tipo3_desc: 'Lauree, battesimi, comunioni, matrimoni civili: ogni traguardo della vita si celebra meglio a tavola.',
    evt_tipo3_d1: 'Decorazioni e allestimento concordati',
    evt_tipo3_d2: 'Torta celebrativa su richiesta',
    evt_tipo3_d3: 'Aperitivo in dehors (stagionale)',
    evt_tipo3_d4: 'Coordinamento con fornitori esterni',
    evt_num1: 'Coperti interni',
    evt_num2: 'Posti in dehors',
    evt_num3: 'Sale private',
    evt_num4: 'Possibilità',
    evt_perche_label: 'Perché sceglierci',
    evt_perche_title: 'Un contesto che non dimenticherete',
    evt_form_label: 'Richiedi informazioni',
    evt_form_title: 'Parliamoci',
    evt_form_p1: 'Raccontaci del tuo evento: risponderemo entro 24 ore con una proposta personalizzata.',
    evt_form_p2: 'Nessun obbligo, solo un primo passo per capire insieme come rendere speciale il vostro momento.',
    evt_telefono: 'Telefono',
    evt_tipologia: 'Tipologia di evento',
    evt_scegli: 'Scegli…',
    evt_tip_compleanno: 'Compleanno',
    evt_tip_anniversario: 'Anniversario',
    evt_tip_laurea: 'Laurea',
    evt_tip_matrimonio: 'Matrimonio / Ricevimento',
    evt_tip_battesimo: 'Battesimo / Comunione',
    evt_tip_altro: 'Altro',
    evt_invitati: 'Numero di invitati',
    evt_data_pref: 'Data preferita',
    evt_messaggio: 'Messaggio libero',
    evt_msg_placeholder: 'Raccontaci il tuo evento, eventuali esigenze alimentari, idee, desideri…',
    evt_invia: 'Invia la richiesta',
    evt_success_title: 'Richiesta ricevuta!',
    evt_success_msg: 'Grazie per averci contattato. Ti risponderemo entro 24 ore con una proposta su misura.',
    // Locale
    loc_hero_title: 'Un rifugio nel cuore di Milano',
    loc_hero_sub: 'Intimo, raccolto, tranquillo. Affacciato su una delle piazze più belle della città.',
    loc_intro_label: 'La nostra casa',
    loc_intro_title: 'Un locale che racconta Milano',
    loc_intro_p1: 'Sant\'Eustorgio non è solo un ristorante: è un\'esperienza che inizia già dall\'esterno. Affacciato sulla piazza che prende il nome dall\'omonima basilica medievale, il locale occupa il piano terra di un edificio storico.',
    loc_intro_p2: 'Gli interni sono stati pensati per creare un\'atmosfera raccolta e intima: materiali naturali, luci calde, tavoli ben distanziati.',
    loc_intro_p3: 'È un posto dove si torna volentieri, che sia per una cena romantica, un pranzo di lavoro o una serata in famiglia.',
    loc_pianta_label: 'Gli spazi',
    loc_pianta_title: 'Tre ambienti distinti',
    loc_sala1_name: 'Sala Principale',
    loc_coperti: 'coperti',
    loc_sala1_desc: 'La sala più grande, affacciata sulla piazza attraverso le vetrate. Atmosfera elegante con materiali naturali e illuminazione calda.',
    loc_sala2_name: 'Sala Riservata',
    loc_sala2_desc: 'Una seconda sala più raccolta, perfetta per cene private, riunioni aziendali o serate riservate.',
    loc_dehors_name: 'Dehors Estivo',
    loc_dehors_desc: 'Dalla primavera all\'autunno, il dehors si affaccia su Piazza Sant\'Eustorgio. Un\'esperienza unica all\'aperto.',
    loc_gallery_label: 'Atmosfera',
    loc_gallery_title: 'Gli spazi in immagini',
    loc_atm_label: 'Il carattere del luogo',
    loc_atm_title: 'Elegante. Tranquillo. Autentico.',
    loc_atm_p1: 'C\'è una differenza tra un locale che cerca di essere elegante e uno che lo è naturalmente. Sant\'Eustorgio appartiene alla seconda categoria.',
    loc_atm_p2: 'I materiali sono scelti per durare e per raccontare una storia: legni caldi, tessuti naturali, ceramiche artigianali.',
    loc_tag1: 'Piano terra',
    loc_tag2: 'Affacciato sulla piazza',
    loc_tag3: 'Intimo e raccolto',
    loc_tag4: 'No musica invadente',
    loc_tag5: 'Totale: 110 coperti',
    loc_tag6: 'Accessibile',
    loc_pos_label: 'Come raggiungerci',
    loc_pos_title: 'Siamo qui',
    loc_indirizzo: 'Indirizzo',
    loc_indirizzo_note: 'Zona Ticinese – Porta Ticinese',
    loc_metro: 'Metro',
    loc_metro_val: 'MM2 Porta Genova',
    loc_metro_note: 'Circa 10 minuti a piedi',
    loc_parcheggio: 'Parcheggio',
    loc_parcheggio_val: 'Zone di sosta nelle vicinanze',
    loc_parcheggio_note: 'Consigliamo di verificare prima della visita',
    loc_cta_label: 'Vieni a trovarci',
    loc_cta_title: 'Prenota il tuo tavolo',
    loc_cta_sub: 'Tutti i giorni dalle 12:00 alle 23:00. Ti aspettiamo su Piazza Sant\'Eustorgio.',
    loc_cta_eventi: 'Organizza un evento',
    // Contatti
    con_hero_title: 'Vieni a trovarci',
    con_hero_sub: 'Siamo in Piazza Sant\'Eustorgio, Milano. Tutti i giorni dalle 12:00 alle 23:00.',
    con_directions: 'Clicca per le indicazioni ↗',
    con_call: 'Chiama ora ↗',
    con_follow: 'Seguici su Instagram ↗',
    con_map_title: 'Come raggiungerci',
    con_map_desc: 'Siamo in Piazza Sant\'Eustorgio, nel cuore del quartiere Ticinese, uno dei più affascinanti di Milano.',
    con_metro_desc: 'MM2 Porta Genova (verde). Da lì circa 10 minuti a piedi lungo via Conca del Naviglio.',
    con_tram_desc: 'Linee 3 e 9, fermata Piazza XXIV Maggio. Linea 14, fermata Colonne di San Lorenzo.',
    con_bike_desc: 'Stazione BikeMi in Piazza Sant\'Eustorgio. Ideale per chi viene dal centro o dai Navigli.',
    con_auto_desc: 'Zone a pagamento nelle vie limitrofe. Parcheggio Darsena a circa 500m. Consigliamo i mezzi pubblici.',
    con_form_title: 'Scrivi un messaggio',
    con_form_desc: 'Per informazioni generali, allergie, menù speciali o qualsiasi altra domanda. Risponderemo entro 24 ore.',
    con_oggetto: 'Oggetto',
    con_obj_prenotazione: 'Prenotazione',
    con_obj_evento: 'Evento privato',
    con_obj_allergie: 'Allergie / Intolleranze',
    con_obj_menu: 'Informazioni sul menù',
    con_privacy: 'Ho letto e accetto la Privacy Policy. Consento al trattamento dei miei dati personali.',
    con_invia: 'Invia il messaggio',
    con_success_title: 'Messaggio inviato!',
    con_success_msg: 'Grazie per averci scritto. Ti risponderemo entro 24 ore.',
    con_social_label: 'Seguici',
    con_social_title: 'Trovaci sui social',
    con_social_desc: 'Segui Sant\'Eustorgio per restare aggiornato su menu stagionali, eventi e momenti dal ristorante.',
  },
  en: {
    nav_home: 'Home',
    nav_chisiamo: 'About Us',
    nav_cucina: 'Cuisine',
    nav_menu: 'Menu',
    nav_cantina: 'Wine Cellar',
    nav_eventi: 'Events',
    nav_locale: 'The Restaurant',
    nav_contatti: 'Contact',
    nav_prenota: 'Reserve a table',
    hero_label: 'Milan · Piazza Sant\'Eustorgio',
    hero_title: 'Milanese <em>and Piedmontese</em><br>tradition',
    hero_sub: 'Authentic cuisine reimagined with a contemporary eye, in one of Milan\'s most evocative settings.',
    hero_cta1: 'Explore the menu',
    hero_cta2: 'Reserve a table',
    hero_scroll: 'Scroll',
    intro_quote: '«Every dish tells a story: the roots of a centuries-old tradition, the courage to reinvent it.»',
    about_label: 'About Us',
    about_title: 'Where Milan meets Piedmont',
    about_text: 'Overlooking the stunning Piazza Sant\'Eustorgio, our restaurant was born from the encounter between the great Milanese culinary tradition and the Piedmontese roots of our chef. An intimate, welcoming place where every dinner becomes an authentic experience.',
    about_cta: 'Our story',
    highlights_label: 'Our Strengths',
    highlights_title: 'A complete experience',
    h1_icon: '🍽️',
    h1_title: 'Signature cuisine',
    h1_text: 'Traditional Milanese and Piedmontese recipes revisited with contemporary technique by Chef Matteo Busso.',
    h2_icon: '🍷',
    h2_title: 'Medolago Albani Cellar',
    h2_text: 'Our own wines from our Bergamo winery, 30 hectares of vineyards in Trescore Balneario.',
    h3_icon: '🌿',
    h3_title: 'Unique atmosphere',
    h3_text: 'Intimate dining room with 60 covers and a magnificent summer terrace with 50 covers overlooking the piazza.',
    gallery_label: 'The Restaurant',
    gallery_title: 'Glimpses of our world',
    reviews_label: 'What our guests say',
    reviews_title: 'Guest reviews',
    menu_label: 'Our Menu',
    menu_title: 'A journey in three chapters',
    menu_text: 'Our menu is a narrative that weaves tradition and contemporaneity, from Milanese roots to the Piedmontese origins of our chef.',
    mc1_num: 'I',
    mc1_title: 'La Tradizione',
    mc1_text: 'Milanese classics',
    mc2_num: 'II',
    mc2_title: 'Le Origini',
    mc2_text: 'Piedmontese specials',
    mc3_num: 'III',
    mc3_title: 'La Contemporaneità',
    mc3_text: 'Modern dishes',
    mc4_num: '♡',
    mc4_title: 'Dessert',
    mc4_text: 'Sweet endings',
    menu_cta: 'View full menu',
    covers_num: '110',
    covers_lbl: 'Total covers',
    cta_title: 'Reserve your table',
    cta_sub: 'Every evening, a unique experience in the heart of Piazza Sant\'Eustorgio',
    cta_btn1: 'Reserve now',
    cta_btn2: 'Request info',
    ft_orari: 'Opening Hours',
    ft_everyday: 'Every day',
    ft_hours: '12:00 – 23:00',
    ft_nav: 'Navigation',
    ft_contatti: 'Contact',
    ft_follow: 'Follow us',
    ft_copy: '© 2025 Ristorante Sant\'Eustorgio. All rights reserved.',
    modal_title: 'Reserve a table',
    modal_sub: 'Fill in the form and we will contact you within 24 hours to confirm your reservation.',
    modal_name: 'First name',
    modal_surname: 'Last name',
    modal_date: 'Date',
    modal_time: 'Time',
    modal_guests: 'Number of guests',
    modal_notes: 'Notes / Special requests',
    modal_send: 'Send request',
    modal_success: 'Request sent! We will contact you shortly.',
    btt: 'Back to top',
    // Cantina
    cant_hero_title: 'Medolago Albani',
    cant_hero_sub: '30 hectares of vineyards in the Bergamo hills, where wine is crafted with the same care as every dish.',
    cant_intro_label: 'Our wine cellar',
    cant_intro_title: 'Wine and cuisine: one story',
    cant_intro_p1: 'Every dish at Sant\'Eustorgio is conceived with a wine pairing in mind. The Medolago Albani winery, with its 30 hectares of vineyards in Trescore Balneario, is not just a label on the menu — it is integral to our philosophy.',
    cant_intro_p2: 'Medolago Albani wines express the character of Lombardy: elegant, mineral, able to complement both the richness of Milanese cuisine and the bold flavours of Piedmontese tradition.',
    cant_intro_p3: 'An agricultural project that respects nature\'s rhythms, from vineyard to glass, season after season.',
    cant_stat1: 'Hectares of vines',
    cant_stat2_num: 'BG',
    cant_stat2: 'Bergamo area',
    cant_stat3: 'Pairings',
    cant_logo_label: 'The official winery of the restaurant',
    cant_logo_cta1: 'Visit the winery website ↗',
    cant_logo_cta2: 'Explore pairings in the menu',
    cant_vini_label: 'Wine list',
    cant_vini_title: 'Wines by the glass',
    cant_vini_sub: 'A selection of Medolago Albani wines paired with Sant\'Eustorgio\'s dishes.',
    cant_abbinamento: 'Suggested pairing',
    cant_vino1_tipo: 'White · Still',
    cant_vino1_desc: 'Floral and fruity notes with a mineral, sapid finish. Fresh and elegant, ideal for raw dishes and lighter preparations.',
    cant_vino1_abb: 'Vitello tonnato · Risotto alla milanese · Carpaccio',
    cant_vino2_tipo: 'Red · Full-bodied',
    cant_vino2_desc: 'Deep ruby, soft tannins and long persistence. Dark fruits, sweet spice and an enveloping finish that opens beautifully with aeration.',
    cant_vino2_abb: 'Brasato al Barolo · Ossobuco · Cotoletta alla milanese',
    cant_vino3_tipo: 'Red · Dessert',
    cant_vino3_desc: 'One of Italy\'s rarest wines. Sweet, passito style, with rose, sour cherry and honey aromas. Extraordinary aromatic complexity.',
    cant_vino3_abb: 'Bonet · Aged cheeses · Chocolate desserts',
    cant_vino4_tipo: 'Rosé · Dry',
    cant_vino4_desc: 'Pale pink with copper hints, bouquet of small red fruits and citrus. Drinkable, fresh and versatile throughout the meal.',
    cant_vino4_abb: 'Bagna cauda · Charcuterie · Tajarin with butter',
    cant_vino5_tipo: 'Sparkling · Brut',
    cant_vino5_desc: 'Fine, persistent perlage with hints of toasted bread and white-fleshed fruit. An elegant welcome for every special occasion.',
    cant_vino5_abb: 'Aperitivo · Light starters · Seafood',
    cant_vino6_tipo: 'White · Still',
    cant_vino6_desc: 'Delicate aromatic profile with notes of peach and white flowers. Lively acidity and a clean finish — an authentic expression of the Bergamo hills.',
    cant_vino6_abb: 'Agnolotti del plin · Fish · Delicate risotti',
    cant_terr_label: 'Trescore Balneario · BG',
    cant_terr_title: 'A territory worth discovering',
    cant_terr_p1: 'Trescore Balneario sits in the heart of the Bergamo hills, in the Val Cavallina — a valley with centuries of winemaking tradition. Here, Medolago Albani cultivates its 30 hectares, with grapes that ripen slowly thanks to the day-to-night temperature swings.',
    cant_terr_p2: 'The territory gives the wines a distinct minerality and a natural acidity that makes them lively and long-lived — characteristics that pair beautifully with the richness of Milanese and Piedmontese cuisine.',
    cant_terr_cta: 'Explore the winery on its official website ↗',
    cant_cta_label: 'At table with us',
    cant_cta_title: 'Come discover them in person',
    cant_cta_sub: 'Our wines tell their story best in a glass, paired with a dish. Reserve your table.',
    cant_cta_menu: 'Browse the menu',
    // Events
    evt_hero_title: 'Your special moment',
    evt_hero_sub: 'Private dinners, celebrations, corporate events: every occasion deserves the right setting.',
    evt_tipi_label: 'What we host',
    evt_tipi_title: 'Three types of event',
    evt_tipi_sub: 'Every event is tailor-made: menu, décor and service are all planned together with you.',
    evt_tipo1_title: 'Private Dinners',
    evt_tipo1_desc: 'Birthdays, anniversaries, family or friend gatherings. Sant\'Eustorgio is the perfect place to celebrate in an intimate, carefully curated atmosphere.',
    evt_tipo1_d1: 'Up to 60 covers in the indoor room',
    evt_tipo1_d2: 'Personalised menu on request',
    evt_tipo1_d3: 'Medolago Albani wine pairing',
    evt_tipo1_d4: 'Exclusive room available',
    evt_tipo2_title: 'Corporate Dinners',
    evt_tipo2_desc: 'An elegant, discreet setting to meet clients, close deals or thank your team. Food as a relationship tool: professional, yet authentic.',
    evt_tipo2_d1: 'Reserved, discreet environment',
    evt_tipo2_d2: 'Attentive, professional service',
    evt_tipo2_d3: 'Set menu or à la carte',
    evt_tipo2_d4: 'Corporate invoicing available',
    evt_tipo3_title: 'Celebrations',
    evt_tipo3_desc: 'Graduations, christenings, communions, civil weddings: every milestone is best celebrated at the table.',
    evt_tipo3_d1: 'Agreed décor and setup',
    evt_tipo3_d2: 'Celebration cake on request',
    evt_tipo3_d3: 'Terrace aperitivo (seasonal)',
    evt_tipo3_d4: 'Coordination with external suppliers',
    evt_num1: 'Indoor covers',
    evt_num2: 'Terrace seats',
    evt_num3: 'Private rooms',
    evt_num4: 'Possibilities',
    evt_perche_label: 'Why choose us',
    evt_perche_title: 'A setting you won\'t forget',
    evt_form_label: 'Request information',
    evt_form_title: 'Let\'s talk',
    evt_form_p1: 'Tell us about your event: we\'ll reply within 24 hours with a personalised proposal.',
    evt_form_p2: 'No obligation — just a first step towards making your moment truly special.',
    evt_telefono: 'Phone',
    evt_tipologia: 'Type of event',
    evt_scegli: 'Choose…',
    evt_tip_compleanno: 'Birthday',
    evt_tip_anniversario: 'Anniversary',
    evt_tip_laurea: 'Graduation',
    evt_tip_matrimonio: 'Wedding / Reception',
    evt_tip_battesimo: 'Christening / Communion',
    evt_tip_altro: 'Other',
    evt_invitati: 'Number of guests',
    evt_data_pref: 'Preferred date',
    evt_messaggio: 'Free message',
    evt_msg_placeholder: 'Tell us about your event, dietary requirements, ideas, wishes…',
    evt_invia: 'Send request',
    evt_success_title: 'Request received!',
    evt_success_msg: 'Thank you for contacting us. We will reply within 24 hours with a tailored proposal.',
    // The Restaurant
    loc_hero_title: 'A haven in the heart of Milan',
    loc_hero_sub: 'Intimate, cosy, quiet. Looking out over one of the city\'s most beautiful squares.',
    loc_intro_label: 'Our home',
    loc_intro_title: 'A restaurant that tells Milan\'s story',
    loc_intro_p1: 'Sant\'Eustorgio is more than a restaurant: the experience begins outside. The venue overlooks the square named after the medieval basilica, occupying the ground floor of a historic building.',
    loc_intro_p2: 'The interiors were designed to create a cosy, intimate atmosphere: natural materials, warm lighting, well-spaced tables.',
    loc_intro_p3: 'It is a place you return to gladly, for a romantic dinner, a business lunch or a family evening.',
    loc_pianta_label: 'The spaces',
    loc_pianta_title: 'Three distinct environments',
    loc_sala1_name: 'Main Dining Room',
    loc_coperti: 'covers',
    loc_sala1_desc: 'The largest room, looking out onto the square through full-height windows. Elegant atmosphere with natural materials and warm lighting.',
    loc_sala2_name: 'Private Room',
    loc_sala2_desc: 'A more intimate second room, perfect for private dinners, corporate meetings or exclusive evenings.',
    loc_dehors_name: 'Summer Terrace',
    loc_dehors_desc: 'From spring to autumn, the terrace overlooks Piazza Sant\'Eustorgio directly — a unique experience dining outdoors in one of Milan\'s most evocative settings.',
    loc_gallery_label: 'Atmosphere',
    loc_gallery_title: 'Our spaces in pictures',
    loc_atm_label: 'The character of the place',
    loc_atm_title: 'Elegant. Quiet. Authentic.',
    loc_atm_p1: 'There is a difference between a restaurant that tries to be elegant and one that simply is. Sant\'Eustorgio belongs to the second category.',
    loc_atm_p2: 'The materials are chosen to last and to tell a story: warm woods, natural fabrics, handcrafted ceramics.',
    loc_tag1: 'Ground floor',
    loc_tag2: 'Overlooking the square',
    loc_tag3: 'Intimate and cosy',
    loc_tag4: 'No background noise',
    loc_tag5: 'Total: 110 covers',
    loc_tag6: 'Accessible',
    loc_pos_label: 'How to reach us',
    loc_pos_title: 'We are here',
    loc_indirizzo: 'Address',
    loc_indirizzo_note: 'Ticinese district – Porta Ticinese',
    loc_metro: 'Metro',
    loc_metro_val: 'MM2 Porta Genova',
    loc_metro_note: 'About 10 minutes on foot',
    loc_parcheggio: 'Parking',
    loc_parcheggio_val: 'Paid parking nearby',
    loc_parcheggio_note: 'We recommend checking availability before your visit',
    loc_cta_label: 'Come visit us',
    loc_cta_title: 'Reserve your table',
    loc_cta_sub: 'Every day 12:00–23:00. We look forward to welcoming you.',
    loc_cta_eventi: 'Organise an event',
    // Contact
    con_hero_title: 'Come and visit us',
    con_hero_sub: 'We are in Piazza Sant\'Eustorgio, Milan. Every day 12:00–23:00.',
    con_directions: 'Click for directions ↗',
    con_call: 'Call now ↗',
    con_follow: 'Follow us on Instagram ↗',
    con_map_title: 'How to reach us',
    con_map_desc: 'We are in Piazza Sant\'Eustorgio, in the heart of the Ticinese district, one of Milan\'s most charming neighbourhoods.',
    con_metro_desc: 'MM2 Porta Genova (green line). From there, about 10 minutes on foot along via Conca del Naviglio.',
    con_tram_desc: 'Lines 3 and 9, stop Piazza XXIV Maggio. Line 14, stop Colonne di San Lorenzo.',
    con_bike_desc: 'BikeMi station in Piazza Sant\'Eustorgio. Ideal if coming from the city centre or Navigli area.',
    con_auto_desc: 'Paid parking zones in nearby streets. Darsena car park at about 500m. We recommend public transport.',
    con_form_title: 'Send a message',
    con_form_desc: 'For general enquiries, allergies, special menus or any other question. We reply within 24 hours.',
    con_oggetto: 'Subject',
    con_obj_prenotazione: 'Reservation',
    con_obj_evento: 'Private event',
    con_obj_allergie: 'Allergies / Intolerances',
    con_obj_menu: 'Menu information',
    con_privacy: 'I have read and accept the Privacy Policy. I consent to the processing of my personal data.',
    con_invia: 'Send message',
    con_success_title: 'Message sent!',
    con_success_msg: 'Thank you for writing to us. We will reply within 24 hours.',
    con_social_label: 'Follow us',
    con_social_title: 'Find us on social media',
    con_social_desc: 'Follow Sant\'Eustorgio for seasonal menu updates, events and moments from the restaurant.',
  }
};

let currentLang = localStorage.getItem('se_lang') || 'it';

/* ── Apply translations ── */
function applyTranslations() {
  const t = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.getAttribute('data-i18n-html')) {
        el.innerHTML = t[key];
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });
  // Update lang buttons
  document.querySelectorAll('.lang-it').forEach(el => {
    el.classList.toggle('active', currentLang === 'it');
  });
  document.querySelectorAll('.lang-en').forEach(el => {
    el.classList.toggle('active', currentLang === 'en');
  });
  document.documentElement.lang = currentLang;
}

function toggleLang() {
  currentLang = currentLang === 'it' ? 'en' : 'it';
  localStorage.setItem('se_lang', currentLang);
  applyTranslations();
}

/* ── Navbar scroll behaviour ── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  const isHero = document.querySelector('.hero');

  function updateNavbar() {
    const scrolled = window.scrollY > 60;
    navbar.classList.toggle('scrolled', scrolled);
    if (isHero) {
      navbar.classList.toggle('dark', window.scrollY < 80);
    }
  }
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  // Mark active link
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Hamburger
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    // Close on link click
    mobileMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }
}

/* ── Back to top ── */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Hero Slideshow ── */
function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;
  let current = 0;
  let timer;

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = idx;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function next() { goTo((current + 1) % slides.length); }

  timer = setInterval(next, 5500);
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(timer);
      goTo(i);
      timer = setInterval(next, 5500);
    });
  });
}

/* ── Gallery Slider ── */
function initGallery() {
  const track = document.querySelector('.gallery-track');
  if (!track) return;
  const slides = track.querySelectorAll('.gallery-slide');
  const dots = document.querySelectorAll('.gallery-dot-item');
  const btnPrev = document.querySelector('.gallery-btn.prev');
  const btnNext = document.querySelector('.gallery-btn.next');
  if (!slides.length) return;

  let current = 0;
  let visibleCount = getVisible();
  let autoTimer;

  function getVisible() {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  const maxIndex = Math.max(0, slides.length - visibleCount);

  function goTo(idx) {
    current = Math.max(0, Math.min(idx, maxIndex));
    const slideWidth = slides[0].offsetWidth + 24; // gap
    track.style.transform = `translateX(-${current * slideWidth}px)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function startAuto() {
    autoTimer = setInterval(() => {
      goTo(current < maxIndex ? current + 1 : 0);
    }, 4000);
  }

  btnPrev?.addEventListener('click', () => { clearInterval(autoTimer); goTo(current - 1); startAuto(); });
  btnNext?.addEventListener('click', () => { clearInterval(autoTimer); goTo(current + 1); startAuto(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { clearInterval(autoTimer); goTo(i); startAuto(); }));

  window.addEventListener('resize', () => {
    visibleCount = getVisible();
    goTo(0);
  }, { passive: true });

  goTo(0);
  startAuto();
}

/* ── Menu tabs ── */
function initMenuTabs() {
  const tabs = document.querySelectorAll('.menu-tab');
  const sections = document.querySelectorAll('.menu-section');
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      tabs.forEach(t => t.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });
}

/* ── Prenotation Modal ── */
function initModal() {
  const overlay = document.querySelector('.modal-overlay');
  if (!overlay) return;
  const closeBtns = overlay.querySelectorAll('.modal-close, .modal-backdrop-close');

  document.querySelectorAll('[data-modal="prenota"]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Form submit (simulated — EmailJS integration hook)
  const form = overlay.querySelector('form');
  const successMsg = overlay.querySelector('.form-success');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const body = `
Nuova richiesta di prenotazione dal sito Ristorante Sant'Eustorgio:

Nome: ${data.get('name')} ${data.get('surname')}
Data: ${data.get('date')}
Orario: ${data.get('time')}
Ospiti: ${data.get('guests')}
Note: ${data.get('notes')}
    `.trim();

    // EmailJS send — configure YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY
    if (window.emailjs) {
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        to_email: 'zangio2000@gmail.com', // ← sostituire con la vera email del ristorante
        from_name: `${data.get('name')} ${data.get('surname')}`,
        date: data.get('date'),
        time: data.get('time'),
        guests: data.get('guests'),
        notes: data.get('notes'),
        message: body
      });
    }

    form.style.display = 'none';
    if (successMsg) successMsg.classList.add('visible');
    setTimeout(closeModal, 3500);
    setTimeout(() => {
      form.style.display = '';
      form.reset();
      successMsg?.classList.remove('visible');
    }, 4000);
  });
}

/* ── Fade-in on scroll ── */
function initFadeIn() {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
}

/* ── Events form ── */
function initEventiForm() {
  const form = document.querySelector('#form-eventi');
  if (!form) return;
  const successMsg = document.querySelector('#eventi-success');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const body = `
Nuova richiesta evento — Ristorante Sant'Eustorgio

Nome: ${data.get('nome')} ${data.get('cognome')}
Email: ${data.get('email')}
Telefono: ${data.get('telefono')}
Tipologia evento: ${data.get('tipo_evento')}
Numero invitati: ${data.get('invitati')}
Messaggio: ${data.get('messaggio')}
    `.trim();

    if (window.emailjs) {
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_EVENTI_TEMPLATE_ID', {
        to_email: 'zangio2000@gmail.com', // ← sostituire con la vera email del ristorante
        from_name: `${data.get('nome')} ${data.get('cognome')}`,
        from_email: data.get('email'),
        telefono: data.get('telefono'),
        tipo_evento: data.get('tipo_evento'),
        invitati: data.get('invitati'),
        message: body
      });
    }

    form.reset();
    if (successMsg) {
      successMsg.classList.add('visible');
      setTimeout(() => successMsg.classList.remove('visible'), 6000);
    }
  });
}

/* ── Contatti form ── */
function initContattiForm() {
  const form = document.querySelector('#form-contatti');
  if (!form) return;
  const successMsg = document.querySelector('#contatti-success');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    if (window.emailjs) {
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_CONTACT_TEMPLATE_ID', {
        to_email: 'zangio2000@gmail.com',
        from_name: `${data.get('nome')}`,
        from_email: data.get('email'),
        message: data.get('messaggio')
      });
    }
    form.reset();
    if (successMsg) {
      successMsg.classList.add('visible');
      setTimeout(() => successMsg.classList.remove('visible'), 5000);
    }
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBackToTop();
  initHeroSlideshow();
  initGallery();
  initMenuTabs();
  initModal();
  initFadeIn();
  initEventiForm();
  initContattiForm();
  applyTranslations();

  // Lang switch buttons
  document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
    btn.addEventListener('click', toggleLang);
  });
});
