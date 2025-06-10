// Dati delle materie con riassunti e quiz
const materieData = {
    italiano: {
        riassunto: `ITALIANO - Punti chiave per l'esame:

• VERISMO (Verga):
  - Rappresentazione oggettiva della realtà
  - Tecniche: regressione, impersonalità, discorso indiretto libero
  - "I Malavoglia": ciclo dei vinti, ideale dell'ostrica
  - "Mastro don Gesualdo": ascesa sociale e solitudine

• DECADENTISMO:
  - D'Annunzio: estetismo, superuomo, panismo
  - "Il Piacere": Andrea Sperelli, culto della 
  - D'Annunzio: estetismo, superuomo, panismo
  - "Il Piacere": Andrea Sperelli, culto della bellezza
  - Pascoli: simbolismo, fonosimbolismo, "fanciullino"
  - "Myricae": natura, morte, famiglia

• CRISI DELL'IO (Pirandello):
  - Relativismo, umorismo, teatro nel teatro
  - "Il fu Mattia Pascal": crisi identità, lanterninosofia
  - "La Giara": umorismo, grottesco siciliano

• PSICANALISI (Svevo):
  - Influenza freudiana, inettitudine, tempo misto
  - "La Coscienza di Zeno": monologo interiore, ironia

• ERMETISMO:
  - Ungaretti: parola pura, analogia, guerra
  - Montale: correlativo oggettivo, male di vivere
  - Linguaggio essenziale, simbolismo`,

        quiz: [
            {
                domanda: "Chi è l'autore de 'I Malavoglia'?",
                opzioni: ["Luigi Pirandello", "Giovanni Verga", "Italo Svevo", "Gabriele D'Annunzio"],
                risposta: 1
            },
            {
                domanda: "Quale corrente letteraria rappresenta Gabriele D'Annunzio?",
                opzioni: ["Verismo", "Decadentismo", "Ermetismo", "Futurismo"],
                risposta: 1
            },
            {
                domanda: "Il 'fanciullino' è un'opera di:",
                opzioni: ["Pascoli", "Carducci", "Ungaretti", "Montale"],
                risposta: 0
            },
            {
                domanda: "Quale tecnica narrativa caratterizza 'La coscienza di Zeno'?",
                opzioni: ["Narratore onnisciente", "Monologo interiore", "Discorso indiretto libero", "Tutte le precedenti"],
                risposta: 3
            },
            {
                domanda: "L'Ermetismo è caratterizzato da:",
                opzioni: ["Linguaggio complesso", "Linguaggio essenziale", "Realismo sociale", "Estetismo"],
                risposta: 1
            }
        ]
    },

    storia: {
        riassunto: `STORIA - Punti chiave per l'esame:

• SOCIETÀ DI MASSA (inizio '900):
  - Industrializzazione, urbanizzazione
  - Nascita partiti di massa, sindacati
  - Cultura di massa, stampa popolare

• PRIMA GUERRA MONDIALE (1914-1918):
  - Cause: nazionalismi, imperialismo, sistema alleanze
  - Triplice Alleanza vs Triplice Intesa
  - Guerra di trincea, nuove tecnologie
  - Conseguenze: crollo imperi, nuovi stati

• RIVOLUZIONE RUSSA (1917):
  - Rivoluzione di febbraio: caduta zar
  - Rivoluzione d'ottobre: bolscevichi al potere
  - Lenin, Stalin: costruzione stato socialista

• FASCISMO (1922-1943):
  - Marcia su Roma, dittatura
  - Stato totalitario, propaganda
  - Leggi razziali, alleanza con Hitler

• SECONDA GUERRA MONDIALE (1939-1945):
  - Cause: espansionismo nazi-fascista
  - Fasi: guerra lampo, Stalingrado, sbarco Normandia
  - Shoah, Resistenza, liberazione

• GUERRA FREDDA (1945-1989):
  - Bipolarismo USA-URSS
  - Cortina di ferro, deterrenza nucleare
  - Decolonizzazione, non allineati`,

        quiz: [
            {
                domanda: "La Prima Guerra Mondiale iniziò nel:",
                opzioni: ["1913", "1914", "1915", "1916"],
                risposta: 1
            },
            {
                domanda: "La Rivoluzione d'Ottobre fu guidata da:",
                opzioni: ["Kerenskij", "Lenin", "Stalin", "Trotsky"],
                risposta: 1
            },
            {
                domanda: "Il Fascismo salì al potere in Italia nel:",
                opzioni: ["1920", "1921", "1922", "1923"],
                risposta: 2
            },
            {
                domanda: "La Guerra Fredda iniziò:",
                opzioni: ["Durante la Seconda Guerra Mondiale", "Subito dopo la Seconda Guerra Mondiale", "Negli anni '50", "Negli anni '60"],
                risposta: 1
            },
            {
                domanda: "L'Affare Dreyfus riguardava:",
                opzioni: ["La Germania", "L'Italia", "La Francia", "L'Inghilterra"],
                risposta: 2
            }
        ]
    },

    inglese: {
        riassunto: `INGLESE - Key points for the exam:

• COMPUTER ARCHITECTURE:
  - CPU: Central Processing Unit, control unit, ALU
  - Memory hierarchy: RAM, ROM, cache, storage
  - Motherboard: connects all components

• PROGRAMMING LANGUAGES:
  - C/C++: system programming, performance
  - Java: object-oriented, platform independent
  - Python: high-level, versatile, AI/data science
  - PHP: server-side web development

• HISTORICAL CONTEXT:
  - Early 1900s: industrial revolution, technology boom
  - Roaring 20s: economic prosperity, cultural change
  - Great Depression: economic crisis, social impact

• LITERATURE:
  - "The Great Gatsby": American Dream, social criticism
  - "1984" by Orwell: dystopia, surveillance, totalitarianism
  - Themes: technology vs humanity, freedom vs control

• DIGITAL SOCIETY:
  - Internet evolution: WWW, browsers, search engines
  - Social networks: communication revolution
  - Big Data & GDPR: privacy protection, data rights
  - Cybersecurity: threats, protection measures

• NETWORKS:
  - Types: LAN, WAN, VPN
  - Topologies: star, ring, mesh
  - Protocols: TCP/IP, HTTP, HTTPS`,

        quiz: [
            {
                domanda: "What does CPU stand for?",
                opzioni: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
                risposta: 0
            },
            {
                domanda: "Which novel depicts a dystopian surveillance society?",
                opzioni: ["The Great Gatsby", "1984", "Brave New World", "Animal Farm"],
                risposta: 1
            },
            {
                domanda: "What does GDPR regulate?",
                opzioni: ["Network protocols", "Data protection", "Software licensing", "Hardware standards"],
                risposta: 1
            },
            {
                domanda: "VPN stands for:",
                opzioni: ["Virtual Private Network", "Very Private Network", "Virtual Public Network", "Variable Private Network"],
                risposta: 0
            },
            {
                domanda: "The 'Roaring Twenties' refers to:",
                opzioni: ["1910s", "1920s", "1930s", "1940s"],
                risposta: 1
            }
        ]
    },

    matematica: {
        riassunto: `MATEMATICA - Punti chiave per l'esame:

• CALCOLO INTEGRALE:
  - Integrali indefiniti: primitive, costante integrazione
  - Tecniche: per parti, sostituzione, frazioni parziali
  - Integrali definiti: teorema fondamentale calcolo
  - Teorema della media: valore medio funzione

• APPLICAZIONI GEOMETRICHE:
  - Calcolo aree: tra curve, sotto curve
  - Volumi: solidi di rotazione, metodo gusci
  - Lunghezza archi di curva

• INTEGRALI IMPROPRI:
  - Intervalli illimitati: convergenza/divergenza
  - Funzioni illimitate: singolarità
  - Criteri di convergenza

• GEOMETRIA SOLIDA:
  - Poliedri: piramidi, prismi, tronchi
  - Solidi di rotazione: cilindri, coni, sfere
  - Principio di Cavalieri: equivalenza volumi

• PROBABILITÀ:
  - Eventi: certi, impossibili, contrari
  - Teoremi: somma logica, prodotto logico
  - Probabilità condizionata: P(A|B) = P(A∩B)/P(B)
  - Teorema di Bayes: probabilità a posteriori

• DISTRIBUZIONI:
  - Binomiale, normale, Poisson
  - Valore atteso, varianza, deviazione standard`,

        quiz: [
            {
                domanda: "L'integrale di x² dx è:",
                opzioni: ["x³/3 + c", "2x + c", "x³ + c", "3x² + c"],
                risposta: 0
            },
            {
                domanda: "Il teorema fondamentale del calcolo integrale collega:",
                opzioni: ["Derivate e limiti", "Derivate e integrali", "Integrali e limiti", "Funzioni e derivate"],
                risposta: 1
            },
            {
                domanda: "La probabilità condizionata P(A|B) è:",
                opzioni: ["P(A∩B)/P(B)", "P(A)/P(B)", "P(A)·P(B)", "P(A∪B)/P(B)"],
                risposta: 0
            },
            {
                domanda: "Il volume di una sfera di raggio r è:",
                opzioni: ["4πr²", "4πr³/3", "πr²", "2πr³"],
                risposta: 1
            },
            {
                domanda: "Un integrale improprio converge quando:",
                opzioni: ["Il limite esiste ed è finito", "Il limite è infinito", "La funzione è continua", "L'intervallo è limitato"],
                risposta: 0
            }
        ]
    },

    informatica: {
        riassunto: `INFORMATICA - Punti chiave per l'esame:

• PROGETTAZIONE DATABASE:
  - Modello E/R: entità, attributi, relazioni
  - Modello relazionale: tabelle, chiavi, vincoli
  - Normalizzazione: 1NF, 2NF, 3NF (eliminare ridondanze)
  - Integrità referenziale: foreign key, cascade

• SQL AVANZATO:
  - DDL: CREATE, ALTER, DROP
  - DML: INSERT, UPDATE, DELETE
  - QL: SELECT, JOIN (inner, outer, cross)
  - Funzioni aggregate: COUNT, SUM, AVG, MAX, MIN
  - Subquery, viste, stored procedure

• SVILUPPO WEB:
  - HTML5: struttura semantica, form, multimedia
  - CSS3: layout, responsive design, animazioni
  - PHP: server-side, sessioni, cookie
  - JavaScript: client-side, DOM manipulation, AJAX

• ARCHITETTURE WEB:
  - Pattern MVC: separazione logica
  - XAMPP: Apache, MySQL, PHP, phpMyAdmin
  - Sicurezza: SQL injection, XSS, autenticazione
  - Session management: login, logout, controllo accessi

• OTTIMIZZAZIONE:
  - Indici: B-tree, hash, bitmap
  - Query optimization: explain plan
  - Performance tuning: cache, connection pooling

• TRANSAZIONI:
  - Proprietà ACID: atomicità, consistenza, isolamento, durabilità
  - Concorrenza: lock, deadlock, isolation levels`,

        quiz: [
            {
                domanda: "La normalizzazione serve per:",
                opzioni: ["Aumentare le prestazioni", "Eliminare ridondanze", "Semplificare le query", "Tutte le precedenti"],
                risposta: 3
            },
            {
                domanda: "ACID sta per:",
                opzioni: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Consistency, Integrity, Durability", "Atomicity, Correctness, Isolation, Durability", "Accuracy, Consistency, Isolation, Dependability"],
                risposta: 0
            },
            {
                domanda: "Un JOIN INNER restituisce:",
                opzioni: ["Tutti i record della prima tabella", "Tutti i record della seconda tabella", "Solo i record che hanno corrispondenza", "Tutti i record di entrambe le tabelle"],
                risposta: 2
            },
            {
                domanda: "PHP è un linguaggio:",
                opzioni: ["Client-side", "Server-side", "Compilato", "Assembler"],
                risposta: 1
            },
            {
                domanda: "Un indice in un database serve per:",
                opzioni: ["Ordinare i dati", "Velocizzare le ricerche", "Garantire l'integrità", "Tutte le precedenti"],
                risposta: 1
            }
        ]
    },

    sistemi: {
        riassunto: `SISTEMI E RETI - Punti chiave per l'esame:

• INDIRIZZAMENTO IP:
  - Classi A (255.0.0.0), B (255.255.0.0), C (255.255.255.0)
  - Subnetting: divisione reti, CIDR notation
  - IP privati: 192.168.x.x, 172.16-31.x.x, 10.x.x.x
  - IPv6: 128 bit, notazione esadecimale

• PROTOCOLLI TCP/IP:
  - Livello applicazione: HTTP, HTTPS, FTP, SMTP, POP3, IMAP
  - Livello trasporto: TCP (affidabile), UDP (veloce)
  - Livello rete: IP, ICMP, ARP
  - DHCP: assegnazione automatica IP
  - DNS: risoluzione nomi in IP

• SICUREZZA:
  - Crittografia simmetrica: AES, DES
  - Crittografia asimmetrica: RSA, chiavi pubbliche/private
  - Firma digitale: autenticazione, integrità, non ripudio
  - VPN: tunnel sicuri, protocolli IPSec, L2TP
  - Firewall: packet filtering, stateful inspection

• ARCHITETTURE DI RETE:
  - LAN: Ethernet, switch, VLAN
  - WAN: router, protocolli routing
  - Topologie: stella, anello, mesh, bus
  - Cablaggio strutturato: UTP, fibra ottica

• NAT/PAT:
  - Network Address Translation: IP privati → pubblici
  - Port Address Translation: condivisione IP pubblico
  - DMZ: zona demilitarizzata per server pubblici`,

        quiz: [
            {
                domanda: "Quale classe di indirizzi IP ha subnet mask 255.255.0.0?",
                opzioni: ["Classe A", "Classe B", "Classe C", "Classe D"],
                risposta: 1
            },
            {
                domanda: "DHCP serve per:",
                opzioni: ["Risoluzione nomi", "Assegnazione IP automatica", "Routing", "Sicurezza"],
                risposta: 1
            },
            {
                domanda: "Una VPN garantisce:",
                opzioni: ["Solo riservatezza", "Solo autenticazione", "Riservatezza e autenticazione", "Solo integrità"],
                risposta: 2
            },
            {
                domanda: "Il protocollo HTTPS usa la porta:",
                opzioni: ["80", "443", "21", "25"],
                risposta: 1
            },
            {
                domanda: "NAT sta per:",
                opzioni: ["Network Address Translation", "Network Access Table", "Network Authentication Token", "Network Application Transfer"],
                risposta: 0
            }
        ]
    },

    tpsit: {
        riassunto: `TPSIT - Punti chiave per l'esame:

• ARCHITETTURE DISTRIBUITE:
  - Client-Server: richiesta-risposta, stateless/stateful
  - Multi-tier: presentation, business logic, data
  - Microservizi: servizi indipendenti, scalabilità
  - SOA: Service Oriented Architecture

• PROTOCOLLI COMUNICAZIONE:
  - TCP: connection-oriented, affidabile, stream
  - UDP: connectionless, veloce, datagram
  - HTTP: stateless, metodi GET/POST/PUT/DELETE
  - WebSocket: comunicazione bidirezionale real-time

• TECNOLOGIE WEB:
  - HTML5: semantic web, canvas, local storage
  - CSS3: responsive design, flexbox, grid
  - JavaScript: DOM, eventi, AJAX, fetch API
  - PHP: server-side, sessioni, database connection

• API E SERVIZI:
  - REST: Representational State Transfer
  - JSON: JavaScript Object Notation, lightweight
  - XML: eXtensible Markup Language, DTD validation
  - SOAP: Simple Object Access Protocol

• PROGRAMMAZIONE DI RETE:
  - Socket: endpoint comunicazione, TCP/UDP
  - Thread: programmazione concorrente, sincronizzazione
  - Processi: comunicazione inter-process
  - Server Echo/Tris: esempi implementazione

• SICUREZZA APPLICATIVA:
  - Autenticazione: verifica identità
  - Autorizzazione: controllo accessi
  - Crittografia: protezione dati in transito
  - Hash: integrità dati, password hashing`,

        quiz: [
            {
                domanda: "JSON sta per:",
                opzioni: ["JavaScript Object Notation", "Java Standard Object Notation", "JavaScript Oriented Notation", "Java Script Object Network"],
                risposta: 0
            },
            {
                domanda: "Un'architettura a 3 tier comprende:",
                opzioni: ["Client, Server, Database", "Presentation, Logic, Data", "Frontend, Backend, Database", "Tutte le precedenti"],
                risposta: 3
            },
            {
                domanda: "AJAX permette:",
                opzioni: ["Comunicazione sincrona", "Comunicazione asincrona", "Solo GET request", "Solo POST request"],
                risposta: 1
            },
            {
                domanda: "Un socket è:",
                opzioni: ["Un protocollo", "Un endpoint di comunicazione", "Un tipo di dato", "Un algoritmo"],
                risposta: 1
            },
            {
                domanda: "CGI sta per:",
                opzioni: ["Common Gateway Interface", "Computer Graphics Interface", "Common Graphics Interface", "Computer Gateway Interface"],
                risposta: 0
            }
        ]
    },

    gpoi: {
        riassunto: `GPOI - Punti chiave per l'esame:

• PROJECT MANAGEMENT:
  - Definizione progetto: temporaneo, unico, progressivo
  - Fasi: avvio, pianificazione, esecuzione, controllo, chiusura
  - Vincoli: tempo, costi, qualità (triangolo del PM)
  - Stakeholder: sponsor, team, clienti, utenti finali

• STRUMENTI PIANIFICAZIONE:
  - WBS: Work Breakdown Structure, scomposizione attività
  - Diagramma di Gantt: timeline, dipendenze, milestone
  - PERT: Program Evaluation Review Technique
  - CPM: Critical Path Method, percorso critico

• GESTIONE RISORSE:
  - Risorse umane: competenze, disponibilità, costi
  - Risorse materiali: attrezzature, software, hardware
  - Budget: stima costi, controllo spese, varianze
  - Tempo: scheduling, buffer, ottimizzazione

• ANALISI ECONOMICA:
  - Costi fissi vs variabili: comportamento al variare produzione
  - Break-even point: pareggio ricavi-costi
  - ROI: Return on Investment, redditività
  - NPV: Net Present Value, valore attuale netto

• QUALITÀ SOFTWARE:
  - Standard ISO 9001, CMMI
  - Metriche: difetti, copertura test, performance
  - Testing: unit, integration, system, acceptance
  - Documentazione: requisiti, design, manuale utente

• METODOLOGIE AGILE:
  - Scrum: sprint, backlog, daily standup, retrospective
  - Kanban: flusso continuo, WIP limits
  - Extreme Programming: pair programming, TDD`,

        quiz: [
            {
                domanda: "WBS sta per:",
                opzioni: ["Work Breakdown Structure", "Work Building System", "Web Based System", "Work Business Structure"],
                risposta: 0
            },
            {
                domanda: "Il diagramma di Gantt mostra:",
                opzioni: ["I costi del progetto", "La sequenza temporale delle attività", "Le risorse umane", "I rischi del progetto"],
                risposta: 1
            },
            {
                domanda: "PERT è una tecnica per:",
                opzioni: ["Calcolare i costi", "Gestire i rischi", "Pianificare i tempi", "Valutare la qualità"],
                risposta: 2
            },
            {
                domanda: "Il punto di pareggio (break-even) è quando:",
                opzioni: ["Ricavi = Costi", "Ricavi > Costi", "Costi > Ricavi", "Profitto = 0"],
                risposta: 0
            },
            {
                domanda: "Scrum è:",
                opzioni: ["Un linguaggio di programmazione", "Una metodologia Agile", "Un database", "Un framework web"],
                risposta: 1
            }
        ]
    },

    'scienze-motorie': {
        riassunto: `SCIENZE MOTORIE - Punti chiave per l'esame:

• PARAMETRI ALLENANTI:
  - Intensità: percentuale sforzo massimo
  - Volume: quantità totale lavoro
  - Densità: rapporto lavoro/recupero
  - Frequenza: numero sedute per periodo

• CAPACITÀ MOTORIE:
  - Condizionali: forza, resistenza, velocità, mobilità
  - Coordinative: equilibrio, ritmo, orientamento, differenziazione
  - Sviluppo età evolutiva: fasi sensibili

• VELOCITÀ:
  - Reazione: tempo risposta stimolo
  - Accelerazione: incremento velocità
  - Massima: picco velocità raggiungibile
  - Resistenza: mantenimento velocità elevata

• MOBILITÀ ARTICOLARE:
  - Attiva: movimento volontario muscoli agonisti
  - Passiva: movimento con aiuto esterno
  - Fattori limitanti: struttura articolare, elasticità muscolare
  - Metodi allenamento: stretching statico/dinamico

• COORDINAZIONE:
  - Generale: base per apprendimenti motori
  - Speciale: specifica per disciplina sportiva
  - Oculo-manuale/podalica: precisione movimenti
  - Spazio-temporale: orientamento e ritmo`,

        quiz: [
            {
                domanda: "I parametri allenanti sono:",
                opzioni: ["Intensità, volume, densità, frequenza", "Forza, resistenza, velocità", "Solo intensità e volume", "Coordinazione e equilibrio"],
                risposta: 0
            },
            {
                domanda: "Le capacità condizionali includono:",
                opzioni: ["Equilibrio e ritmo", "Forza, resistenza, velocità, mobilità", "Solo forza e resistenza", "Coordinazione generale"],
                risposta: 1
            },
            {
                domanda: "La velocità di reazione è:",
                opzioni: ["Il picco di velocità", "Il tempo di risposta a uno stimolo", "La resistenza alla velocità", "L'accelerazione massima"],
                risposta: 1
            },
            {
                domanda: "La mobilità articolare passiva è:",
                opzioni: ["Movimento volontario", "Movimento con aiuto esterno", "Solo stretching dinamico", "Coordinazione speciale"],
                risposta: 1
            },
            {
                domanda: "La coordinazione oculo-manuale riguarda:",
                opzioni: ["L'equilibrio", "La precisione dei movimenti", "La resistenza", "La velocità massima"],
                risposta: 1
            }
        ]
    },

    'educazione-civica': {
        riassunto: `EDUCAZIONE CIVICA - Punti chiave per l'esame:

• COSTITUZIONE ITALIANA:
  - Principi fondamentali (art. 1-12): democrazia, lavoro, uguaglianza
  - Diritti e doveri: libertà personali, rapporti civili, politici, economici
  - Ordinamento: Parlamento, Governo, Magistratura, Presidente Repubblica
  - Autonomie locali: Regioni, Province, Comuni

• UNIONE EUROPEA:
  - Istituzioni: Parlamento, Consiglio, Commissione, Corte Giustizia
  - Trattati: Roma (1957), Maastricht (1992), Lisbona (2009)
  - Cittadinanza europea: diritti, libertà circolazione
  - Politiche comuni: agricola, monetaria, estera

• CITTADINANZA DIGITALE:
  - Diritti online: accesso informazione, libertà espressione
  - Doveri: rispetto privacy, lotta fake news, cyberbullismo
  - Digital divide: divario accesso tecnologie
  - Identità digitale: SPID, firma elettronica

• PRIVACY E PROTEZIONE DATI:
  - GDPR: General Data Protection Regulation (2018)
  - Principi: consenso, minimizzazione, trasparenza
  - Diritti: accesso, rettifica, cancellazione, portabilità
  - Autorità Garante: controllo, sanzioni

• SVILUPPO SOSTENIBILE:
  - Agenda 2030: 17 Obiettivi Sviluppo Sostenibile (SDGs)
  - Dimensioni: ambientale, sociale, economica
  - Economia circolare: riduzione sprechi, riciclo
  - Green IT: sostenibilità digitale, efficienza energetica

• DIRITTI UMANI:
  - Dichiarazione Universale (1948): dignità, libertà, uguaglianza
  - Convenzioni internazionali: civili, politici, economici, sociali
  - Tutele: Corte Europea Diritti Uomo, ONU`,

        quiz: [
            {
                domanda: "La Costituzione italiana è entrata in vigore nel:",
                opzioni: ["1946", "1947", "1948", "1949"],
                risposta: 2
            },
            {
                domanda: "GDPR sta per:",
                opzioni: ["General Data Protection Regulation", "Global Data Privacy Rules", "General Digital Protection Rights", "Global Digital Privacy Regulation"],
                risposta: 0
            },
            {
                domanda: "L'Agenda 2030 comprende:",
                opzioni: ["15 obiettivi", "17 obiettivi", "20 obiettivi", "25 obiettivi"],
                risposta: 1
            },
            {
                domanda: "Il Parlamento Europeo ha sede a:",
                opzioni: ["Bruxelles", "Strasburgo", "Lussemburgo", "Tutte le precedenti"],
                risposta: 3
            },
            {
                domanda: "Il digital divide riguarda:",
                opzioni: ["La sicurezza informatica", "L'accesso alle tecnologie", "La privacy online", "I diritti d'autore"],
                risposta: 1
            }
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Funzionalità bottoni hero
    document.getElementById('inizia-ora-btn').addEventListener('click', function() {
        document.getElementById('orale').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('scopri-di-piu-btn').addEventListener('click', function() {
        document.getElementById('esame-overview').scrollIntoView({ behavior: 'smooth' });
    });

    // Toggle menu per dispositivi mobili
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
   
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
   
    // Toggle tema chiaro/scuro
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
   
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
       
        if (document.body.classList.contains('dark-theme')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Controlla se c'è un tema salvato
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
   
    // Gestione tab tipologie prima prova
    const tipologiaTabs = document.querySelectorAll('.tipologia-tab');
    const tipologiaContents = document.querySelectorAll('.tipologia-content');
   
    tipologiaTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tipologia = this.getAttribute('data-tipologia');
           
            // Attiva tab
            tipologiaTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
           
            // Mostra contenuto tipologia
            tipologiaContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tipologia}-content`) {
                    content.classList.add('active');
                }
            });
        });
    });
   
    // Gestione tab argomenti seconda prova
    const argomentoTabs = document.querySelectorAll('.argomento-tab');
    const argomentoContents = document.querySelectorAll('.argomento-content');
   
    argomentoTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const argomento = this.getAttribute('data-argomento');
           
            // Attiva tab
            argomentoTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
           
            // Mostra contenuto argomento
            argomentoContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${argomento}-content`) {
                    content.classList.add('active');
                }
            });
        });
    });
   
    // Gestione materie orale
    const materiaCards = document.querySelectorAll('.materia-card');
    const materiaDetails = document.querySelectorAll('.materia-detail');
   
    materiaCards.forEach(card => {
        card.addEventListener('click', function() {
            const materia = this.getAttribute('data-materia');
           
            // Attiva card
            materiaCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
           
            // Mostra dettaglio materia
            materiaDetails.forEach(detail => {
                detail.classList.remove('active');
                if (detail.id === `${materia}-detail`) {
                    detail.classList.add('active');
                }
            });
        });
    });

    // Gestione bottoni riassunto
    const summaryButtons = document.querySelectorAll('.summary-btn');
    const summaryModal = document.getElementById('summary-modal');
    const summaryContent = document.getElementById('summary-content');

    summaryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const materia = this.getAttribute('data-materia');
            const materiaData = materieData[materia];
            
            if (materiaData) {
                summaryContent.innerHTML = `
                    <h2>Riassunto - ${materia.charAt(0).toUpperCase() + materia.slice(1).replace('-', ' ')}</h2>
                    <div class="summary-text">
                        <pre>${materiaData.riassunto}</pre>
                    </div>
                `;
                summaryModal.style.display = 'flex';
            }
        });
    });

    // Gestione bottoni quiz
    const quizButtons = document.querySelectorAll('.quiz-btn');
    const quizModal = document.getElementById('quiz-modal');
    const quizContent = document.getElementById('quiz-content');

    quizButtons.forEach(button => {
        button.addEventListener('click', function() {
            const materia = this.getAttribute('data-materia');
            const materiaData = materieData[materia];
            
            if (materiaData && materiaData.quiz) {
                let quizHTML = `
                    <h2>Quiz - ${materia.charAt(0).toUpperCase() + materia.slice(1).replace('-', ' ')}</h2>
                    <div class="quiz-container">
                        <div class="quiz-questions">
                `;

                materiaData.quiz.forEach((domanda, index) => {
                    quizHTML += `
                        <div class="quiz-question" data-question="${index}">
                            <h3>Domanda ${index + 1}</h3>
                            <p>${domanda.domanda}</p>
                            <div class="quiz-options">
                    `;

                    domanda.opzioni.forEach((opzione, optIndex) => {
                        quizHTML += `
                            <label class="quiz-option">
                                <input type="radio" name="q${index}" value="${optIndex}">
                                <span>${opzione}</span>
                            </label>
                        `;
                    });

                    quizHTML += `
                            </div>
                        </div>
                    `;
                });

                quizHTML += `
                        </div>
                        <div class="quiz-actions">
                            <button class="submit-quiz-btn" data-materia="${materia}">Invia Quiz</button>
                            <div class="quiz-result" style="display: none;"></div>
                        </div>
                    </div>
                `;

                quizContent.innerHTML = quizHTML;
                quizModal.style.display = 'flex';

                // Gestione invio quiz
                const submitQuizBtn = quizContent.querySelector('.submit-quiz-btn');
                submitQuizBtn.addEventListener('click', function() {
                    const materiaQuiz = this.getAttribute('data-materia');
                    const questions = quizContent.querySelectorAll('.quiz-question');
                    let correct = 0;
                    let total = questions.length;

                    questions.forEach((question, index) => {
                        const selectedOption = question.querySelector('input[type="radio"]:checked');
                        if (selectedOption) {
                            const selectedValue = parseInt(selectedOption.value);
                            if (selectedValue === materieData[materiaQuiz].quiz[index].risposta) {
                                correct++;
                                question.style.backgroundColor = '#d4edda';
                            } else {
                                question.style.backgroundColor = '#f8d7da';
                            }
                        } else {
                            question.style.backgroundColor = '#fff3cd';
                        }
                    });

                    const percentage = Math.round((correct / total) * 100);
                    const resultDiv = quizContent.querySelector('.quiz-result');
                    resultDiv.innerHTML = `
                        <h3>Risultato Quiz</h3>
                        <p>Hai risposto correttamente a <strong>${correct}</strong> domande su <strong>${total}</strong></p>
                        <p>Percentuale: <strong>${percentage}%</strong></p>
                        ${percentage >= 60 ? '<p style="color: green;">Ottimo lavoro!</p>' : '<p style="color: red;">Continua a studiare!</p>'}
                    `;
                    resultDiv.style.display = 'block';
                    this.style.display = 'none';
                });
            }
        });
    });
   
    // Countdown per l'esame di stato (19 giugno 2025)
    function updateCountdown() {
        const examDate = new Date('June 19, 2025 08:30:00').getTime();
        const now = new Date().getTime();
        const distance = examDate - now;
       
        // Calcolo giorni, ore, minuti, secondi
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
       
        // Aggiorna elementi HTML
        document.getElementById('countdown-days').textContent = days;
        document.getElementById('countdown-hours').textContent = hours;
        document.getElementById('countdown-minutes').textContent = minutes;
        document.getElementById('countdown-seconds').textContent = seconds;
       
        // Se la data è passata
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown-days').textContent = '0';
            document.getElementById('countdown-hours').textContent = '0';
            document.getElementById('countdown-minutes').textContent = '0';
            document.getElementById('countdown-seconds').textContent = '0';
        }
    }
   
    // Aggiorna il countdown ogni secondo
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
   
    // Smooth scroll per i link di navigazione
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
           
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
           
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
               
                // Chiudi menu mobile se aperto
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
    
    // Gestione modal
    const planModal = document.getElementById('plan-modal');
    const exerciseModal = document.getElementById('exercise-modal');
    const resourceModal = document.getElementById('resource-modal');
    const simulazioneModal = document.getElementById('simulazione-modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    // Apri modal piano di studio
    document.getElementById('create-plan-btn').addEventListener('click', function() {
        planModal.style.display = 'flex';
    });
    
    // Chiudi modals
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            planModal.style.display = 'none';
            exerciseModal.style.display = 'none';
            resourceModal.style.display = 'none';
            simulazioneModal.style.display = 'none';
            summaryModal.style.display = 'none';
            quizModal.style.display = 'none';
        });
    });
    
    // Chiudi modal cliccando fuori
    window.addEventListener('click', function(event) {
        if (event.target === planModal) {
            planModal.style.display = 'none';
        }
        if (event.target === exerciseModal) {
            exerciseModal.style.display = 'none';
        }
        if (event.target === resourceModal) {
            resourceModal.style.display = 'none';
        }
        if (event.target === simulazioneModal) {
            simulazioneModal.style.display = 'none';
        }
        if (event.target === summaryModal) {
            summaryModal.style.display = 'none';
        }
        if (event.target === quizModal) {
            quizModal.style.display = 'none';
        }
    });
    
    // Genera piano di studio
    document.getElementById('generate-plan-btn').addEventListener('click', function() {
        const examDate = new Date(document.getElementById('exam-date').value);
        const studyHours = document.getElementById('study-hours').value;
        const priority = document.getElementById('priority').value;
        
        const selectedSubjects = [];
        document.querySelectorAll('input[name="subjects"]:checked').forEach(checkbox => {
            selectedSubjects.push(checkbox.value);
        });
        
        if (selectedSubjects.length === 0) {
            alert('Seleziona almeno una materia!');
            return;
        }
        
        // Genera il piano di studio
        generateStudyPlan(examDate, studyHours, selectedSubjects, priority);
        
        // Mostra il risultato
        document.getElementById('plan-result').style.display = 'block';
    });
    
    // Funzione per generare il piano di studio
    function generateStudyPlan(examDate, studyHours, subjects, priority) {
        const today = new Date();
        const daysUntilExam = Math.ceil((examDate - today) / (1000 * 60 * 60 * 24));
        
        let planHTML = '<div class="study-plan">';
        planHTML += `<p>Giorni rimanenti all'esame: <strong>${daysUntilExam}</strong></p>`;
        planHTML += '<div class="weekly-plan">';
        
        // Genera un piano settimanale
        const weeks = Math.ceil(daysUntilExam / 7);
        
        for (let week = 0; week < Math.min(weeks, 4); week++) {
            planHTML += `<div class="week"><h4>Settimana ${week + 1}</h4>`;
            
            for (let day = 0; day < 7; day++) {
                const currentDay = new Date(today);
                currentDay.setDate(today.getDate() + week * 7 + day);
                
                // Salta se la data è dopo l'esame
                if (currentDay > examDate) continue;
                
                const dayName = currentDay.toLocaleDateString('it-IT', { weekday: 'long' });
                const dateStr = currentDay.toLocaleDateString('it-IT', { day: 'numeric', month: 'short' });
                
                planHTML += `<div class="day"><div class="day-header">${dayName} ${dateStr}</div>`;
                
                // Distribuisci le materie in base alla priorità
                const dailySubjects = distributeSubjects(subjects, priority, day);
                
                for (let i = 0; i < Math.min(dailySubjects.length, studyHours); i++) {
                    const subject = dailySubjects[i];
                    planHTML += `<div class="study-block">${getSubjectName(subject)}: ${getStudyActivity(subject)}</div>`;
                }
                
                planHTML += '</div>'; // Chiude day
            }
            
            planHTML += '</div>'; // Chiude week
        }
        
        planHTML += '</div>'; // Chiude weekly-plan
        planHTML += '</div>'; // Chiude study-plan
        
        document.getElementById('plan-calendar').innerHTML = planHTML;
    }
    
    // Funzione per distribuire le materie in base alla priorità
    function distributeSubjects(subjects, priority, dayOfWeek) {
        let dailySubjects = [...subjects];
        
        // Mescola le materie
        dailySubjects.sort(() => Math.random() - 0.5);
        
        // Applica priorità
        if (priority === 'first-test') {
            // Priorità alla prima prova (italiano)
            if (dailySubjects.includes('italiano')) {
                dailySubjects = dailySubjects.filter(s => s !== 'italiano');
                dailySubjects.unshift('italiano');
            }
        } else if (priority === 'second-test') {
            // Priorità alla seconda prova (informatica)
            if (dailySubjects.includes('informatica')) {
                dailySubjects = dailySubjects.filter(s => s !== 'informatica');
                dailySubjects.unshift('informatica');
            }
        } else if (priority === 'oral') {
            // Priorità al colloquio (tutte le materie bilanciate)
            // Nessuna modifica necessaria, già mescolate
        }
        
        // Aggiungi variazione in base al giorno della settimana
        if (dayOfWeek === 5 || dayOfWeek === 6) {
            // Weekend: più focus su materie tecniche
            const technicalSubjects = dailySubjects.filter(s => 
                ['informatica', 'sistemi', 'tpsit', 'gpoi'].includes(s));
            const otherSubjects = dailySubjects.filter(s => 
                !['informatica', 'sistemi', 'tpsit', 'gpoi'].includes(s));
            
            dailySubjects = [...technicalSubjects, ...otherSubjects];
        }
        
        return dailySubjects;
    }
    
    // Funzione per ottenere il nome completo della materia
    function getSubjectName(subject) {
        const names = {
            'italiano': 'Italiano',
            'storia': 'Storia',
            'inglese': 'Inglese',
            'matematica': 'Matematica',
            'informatica': 'Informatica',
            'sistemi': 'Sistemi e Reti',
            'tpsit': 'TPSIT',
            'gpoi': 'GPOI',
            'ed-civica': 'Educazione Civica'
        };
        
        return names[subject] || subject;
    }
    
    // Funzione per generare un'attività di studio casuale
    function getStudyActivity(subject) {
        const activities = {
            'italiano': [
                'Analisi del testo letterario',
                'Esercitazione tipologia A',
                'Esercitazione tipologia B',
                'Esercitazione tipologia C',
                'Ripasso autori del \'900'
            ],
            'storia': [
                'Ripasso eventi principali',
                'Studio cause-effetti',
                'Cronologia del periodo',
                'Approfondimento tematico'
            ],
            'inglese': [
                'Vocabulary tecnico',
                'Reading comprehension',
                'Listening exercises',
                'Grammar review'
            ],
            'matematica': [
                'Esercizi su derivate',
                'Esercizi su integrali',
                'Studio di funzione',
                'Problemi di probabilità'
            ],
            'informatica': [
                'Progettazione database',
                'Esercizi SQL',
                'Programmazione',
                'Teoria dei database'
            ],
            'sistemi': [
                'Esercizi di subnetting',
                'Configurazione reti',
                'Sicurezza informatica',
                'Protocolli di rete'
            ],
            'tpsit': [
                'Programmazione concorrente',
                'Architetture client-server',
                'Web services',
                'Socket e comunicazione'
            ],
            'gpoi': [
                'Project management',
                'Diagrammi WBS',
                'Analisi costi-benefici',
                'Metodologie Agile'
            ],
            'ed-civica': [
                'Costituzione italiana',
                'Cittadinanza digitale',
                'Sviluppo sostenibile',
                'Diritti e doveri'
            ]
        };
        
        const subjectActivities = activities[subject] || ['Ripasso generale'];
        return subjectActivities[Math.floor(Math.random() * subjectActivities.length)];
    }
    
    // Download piano di studio
    document.getElementById('download-plan-btn').addEventListener('click', function() {
        alert('Download del piano di studio avviato!');
        // In un'implementazione reale, qui si genererebbe un PDF
    });
    
    // Gestione bottoni esercitazioni
    const practiceButtons = document.querySelectorAll('.practice-btn');
    
    practiceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const exerciseType = this.getAttribute('data-exercise');
            loadExercise(exerciseType);
            exerciseModal.style.display = 'flex';
        });
    });
    
    // Funzione per caricare l'esercitazione
    function loadExercise(exerciseType) {
        let exerciseHTML = '';
        
        switch(exerciseType) {
            case 'tipologia-a':
                exerciseHTML = `
                    <h2>Esercitazione Tipologia A - Analisi del testo</h2>
                    <div class="exercise-container">
                        <div class="exercise-text">
                            <h3>Il fu Mattia Pascal - Luigi Pirandello</h3>
                            <p class="text-excerpt">
                                Una delle poche cose, anzi forse la sola ch'io sapessi di certo era questa: che mi chiamavo Mattia Pascal. E me ne approfittavo. Ogni qual volta qualcuno de' miei amici o conoscenti dimostrava d'aver perduto il senno fino al punto di venire da me per qualche consiglio o suggerimento, mi stringevo nelle spalle, socchiudevo gli occhi e gli rispondevo:
                                <br><br>
                                - Io mi chiamo Mattia Pascal.
                                <br><br>
                                - Grazie, caro. Questo lo so.
                                <br><br>
                                - E ti par poco?
                                <br><br>
                                Non pareva molto, per dir la verità, neanche a me. Ma ignoravo allora che cosa volesse dire il non sapere neppur questo, il non poter più rispondere, cioè, come prima, all'occorrenza:
                                <br><br>
                                - Io mi chiamo Mattia Pascal.
                            </p>
                        </div>
                        
                        <div class="exercise-questions">
                            <h3>Consegne</h3>
                            <ol>
                                <li>Comprensione del testo
                                    <ul>
                                        <li>Riassumi brevemente il contenuto del brano.</li>
                                    </ul>
                                </li>
                                <li>Analisi del testo
                                    <ul>
                                        <li>Analizza il tema dell'identità presente nel brano.</li>
                                        <li>Individua le caratteristiche stilistiche e linguistiche del testo.</li>
                                        <li>Quale atmosfera si percepisce dalla lettura del brano?</li>
                                    </ul>
                                </li>
                                <li>Interpretazione complessiva e approfondimenti
                                    <ul>
                                        <li>Elabora una tua interpretazione del brano, approfondendo il tema dell'identità nella letteratura del Novecento.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                        
                        <div class="exercise-answer">
                            <h3>Svolgimento</h3>
                            <textarea rows="15" placeholder="Scrivi qui il tuo svolgimento..."></textarea>
                            <button class="submit-btn">Invia svolgimento</button>
                        </div>
                    </div>
                `;
                break;
                
            case 'tipologia-b':
                exerciseHTML = `
                    <h2>Esercitazione Tipologia B - Testo argomentativo</h2>
                    <div class="exercise-container">
                        <div class="exercise-text">
                            <h3>Tecnologia e società: opportunità e rischi dell'intelligenza artificiale</h3>
                            <p class="text-excerpt">
                                L'intelligenza artificiale (IA) sta trasformando radicalmente il nostro modo di vivere, lavorare e relazionarci. Da un lato, promette di risolvere problemi complessi, migliorare l'efficienza e creare nuove opportunità economiche. Dall'altro, solleva preoccupazioni riguardo alla privacy, all'equità, alla trasparenza e al futuro del lavoro.
                                <br><br>
                                I sistemi di IA possono analizzare enormi quantità di dati, identificare modelli e fare previsioni con una precisione che spesso supera quella umana. Questo ha portato a progressi significativi in campi come la medicina, dove l'IA può aiutare nella diagnosi precoce di malattie, o nella ricerca scientifica, dove può accelerare la scoperta di nuovi farmaci.
                                <br><br>
                                Tuttavia, l'IA solleva anche importanti questioni etiche. I sistemi di IA possono perpetuare o amplificare i pregiudizi esistenti se addestrati su dati distorti. Inoltre, l'automazione potrebbe portare alla perdita di posti di lavoro in alcuni settori, richiedendo una riqualificazione della forza lavoro.
                                <br><br>
                                La sfida per la società è quindi quella di massimizzare i benefici dell'IA minimizzandone i rischi. Questo richiede un approccio equilibrato che coinvolga governi, aziende, ricercatori e cittadini nella definizione di regole e standard etici per lo sviluppo e l'uso dell'IA.
                            </p>
                        </div>
                        
                        <div class="exercise-questions">
                            <h3>Consegne</h3>
                            <ol>
                                <li>Comprensione e analisi
                                    <ul>
                                        <li>Individua la tesi dell'autore e gli argomenti a sostegno.</li>
                                        <li>Quali sono i benefici e i rischi dell'IA presentati nel testo?</li>
                                        <li>Analizza la struttura argomentativa del testo.</li>
                                    </ul>
                                </li>
                                <li>Produzione
                                    <ul>
                                        <li>Elabora un testo argomentativo in cui esponi la tua posizione sul tema dell'intelligenza artificiale e il suo impatto sulla società, utilizzando conoscenze ed esperienze personali.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                        
                        <div class="exercise-answer">
                            <h3>Svolgimento</h3>
                            <textarea rows="15" placeholder="Scrivi qui il tuo svolgimento..."></textarea>
                            <button class="submit-btn">Invia svolgimento</button>
                        </div>
                    </div>
                `;
                break;
                
            case 'tipologia-c':
                exerciseHTML = `
                    <h2>Esercitazione Tipologia C - Tema di attualità</h2>
                    <div class="exercise-container">
                        <div class="exercise-text">
                            <h3>L'impatto dell'intelligenza artificiale sul futuro del lavoro e dell'istruzione</h3>
                            <p class="text-excerpt">
                                L'intelligenza artificiale sta rapidamente trasformando il panorama lavorativo globale. Secondo recenti studi, entro il 2030 fino al 30% delle attività lavorative attuali potrebbero essere automatizzate. Questo solleva interrogativi fondamentali sul futuro del lavoro e sulle competenze che saranno necessarie per prosperare in un'economia sempre più digitalizzata.
                                <br><br>
                                Parallelamente, anche il sistema educativo si trova di fronte alla necessità di evolversi per preparare le nuove generazioni a un mondo in cui l'IA sarà onnipresente. Le competenze tecniche dovranno essere integrate con capacità tipicamente umane come il pensiero critico, la creatività, l'intelligenza emotiva e la capacità di adattamento.
                                <br><br>
                                In questo contesto di rapido cambiamento, è fondamentale riflettere su come individui, istituzioni educative e società nel suo complesso possano adattarsi per cogliere le opportunità offerte dall'IA minimizzando al contempo i rischi di disuguaglianza e disoccupazione tecnologica.
                            </p>
                        </div>
                        
                        <div class="exercise-questions">
                            <h3>Consegne</h3>
                            <p>Rifletti sul tema proposto elaborando un testo che presenti le tue opinioni, supportate da argomenti ed esempi concreti. Puoi articolare il tuo elaborato in paragrafi opportunamente titolati e presentare la trattazione con un titolo complessivo che ne esprima sinteticamente il contenuto.</p>
                            <p>Alcuni spunti di riflessione:</p>
                            <ul>
                                <li>Come cambierà il mercato del lavoro con l'avvento dell'IA?</li>
                                <li>Quali competenze saranno più richieste in futuro?</li>
                                <li>Come dovrebbe evolversi il sistema educativo per preparare i giovani a questo nuovo scenario?</li>
                                <li>Quali politiche potrebbero aiutare a gestire la transizione verso un'economia più automatizzata?</li>
                            </ul>
                        </div>
                        
                        <div class="exercise-answer">
                            <h3>Svolgimento</h3>
                            <textarea rows="15" placeholder="Scrivi qui il tuo svolgimento..."></textarea>
                            <button class="submit-btn">Invia svolgimento</button>
                        </div>
                    </div>
                `;
                break;
                
            default:
                exerciseHTML = `
                    <h2>Esercitazione</h2>
                    <p>Esercitazione non disponibile. Riprova più tardi.</p>
                `;
        }
        
        document.getElementById('exercise-content').innerHTML = exerciseHTML;
        
        // Aggiungi event listener per i bottoni di submit
        const submitButtons = document.querySelectorAll('.submit-btn');
        submitButtons.forEach(button => {
            button.addEventListener('click', function() {
                alert('Svolgimento inviato con successo! Riceverai un feedback a breve.');
            });
        });
    }
    
    // Gestione bottoni risorse
    const resourceLinks = document.querySelectorAll('.resource-link, .download-btn, .view-btn, .join-btn');
    
    resourceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const resourceType = this.getAttribute('data-resource');
            if (resourceType) {
                alert('Risorsa non ancora disponibile. Sarà implementata presto!');
            }
        });
    });
    
    // Gestione bottoni simulazioni
    const simulazioneButtons = document.querySelectorAll('.simulazione-btn');
    
    simulazioneButtons.forEach(button => {
        button.addEventListener('click', function() {
            const simulazioneType = this.getAttribute('data-simulazione');
            alert(`Simulazione ${simulazioneType} non ancora disponibile. Sarà implementata presto!`);
        });
    });
    
    // Inizializza newsletter
    document.getElementById('newsletter-btn').addEventListener('click', function() {
        const emailInput = this.previousElementSibling;
        if (emailInput.value.trim() !== '' && emailInput.value.includes('@')) {
            alert('Iscrizione alla newsletter completata con successo!');
            emailInput.value = '';
        } else {
            alert('Inserisci un indirizzo email valido.');
        }
    });
});