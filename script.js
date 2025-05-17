document.addEventListener('DOMContentLoaded', function() {
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
                
            case 'database':
                exerciseHTML = `
                    <h2>Esercitazione Database</h2>
                    <div class="exercise-container">
                        <div class="exercise-text">
                            <h3>Progettazione di un database per un sistema scolastico</h3>
                            <p>
                                Un istituto scolastico ti ha incaricato di progettare un database per la gestione delle attività didattiche. Il sistema deve gestire:
                            </p>
                            <ul>
                                <li>Studenti (dati anagrafici, classe di appartenenza, curriculum)</li>
                                <li>Docenti (dati anagrafici, materie insegnate, classi assegnate)</li>
                                <li>Classi (anno, sezione, indirizzo)</li>
                                <li>Materie (nome, monte ore, docenti)</li>
                                <li>Valutazioni (studente, materia, voto, data, tipologia)</li>
                                <li>Presenze/assenze (studente, data, giustificazione)</li>
                            </ul>
                        </div>
                        
                        <div class="exercise-questions">
                            <h3>Consegne</h3>
                            <ol>
                                <li>Realizza il modello E/R del database, identificando entità, attributi e relazioni.</li>
                                <li>Deriva il modello logico relazionale, specificando chiavi primarie e vincoli di integrità referenziale.</li>
                                <li>Scrivi il codice SQL per la creazione delle tabelle (DDL).</li>
                                <li>Implementa le seguenti query SQL:
                                    <ul>
                                        <li>Elenco degli studenti di una classe con relative medie per materia</li>
                                        <li>Docenti che insegnano più di una materia</li>
                                        <li>Studenti con più di 5 assenze non giustificate</li>
                                        <li>Media dei voti per classe e materia</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                        
                        <div class="exercise-answer">
                            <h3>Svolgimento</h3>
                            <div class="tabs">
                                <button class="tab-btn active" data-tab="er">Modello E/R</button>
                                <button class="tab-btn" data-tab="relational">Modello Relazionale</button>
                                <button class="tab-btn" data-tab="ddl">SQL DDL</button>
                                <button class="tab-btn" data-tab="queries">SQL Query</button>
                            </div>
                            
                            <div class="tab-content active" id="er-content">
                                <textarea rows="10" placeholder="Descrivi qui il tuo modello E/R o carica un'immagine..."></textarea>
                                <input type="file" accept="image/*">
                            </div>
                            
                            <div class="tab-content" id="relational-content">
                                <textarea rows="10" placeholder="Descrivi qui il tuo modello relazionale..."></textarea>
                            </div>
                            
                            <div class="tab-content" id="ddl-content">
                                <textarea rows="10" placeholder="Scrivi qui il codice SQL DDL..."></textarea>
                            </div>
                            
                            <div class="tab-content" id="queries-content">
                                <textarea rows="10" placeholder="Scrivi qui le query SQL..."></textarea>
                            </div>
                            
                            <button class="submit-btn">Invia svolgimento</button>
                        </div>
                    </div>
                `;
                break;
                
            case 'programmazione':
                exerciseHTML = `
                    <h2>Esercitazione Programmazione</h2>
                    <div class="exercise-container">
                        <div class="exercise-text">
                            <h3>Sviluppo di un'applicazione per la gestione degli studenti</h3>
                            <p>
                                Sviluppa un'applicazione web per la gestione degli studenti di un istituto scolastico. L'applicazione deve permettere di:
                            </p>
                            <ul>
                                <li>Visualizzare l'elenco degli studenti</li>
                                <li>Aggiungere, modificare ed eliminare uno studente</li>
                                <li>Visualizzare i dettagli di uno studente (dati anagrafici, classe, voti)</li>
                                <li>Registrare le presenze/assenze</li>
                                <li>Inserire e visualizzare i voti per materia</li>
                                <li>Generare report statistici (media voti, andamento, ecc.)</li>
                            </ul>
                        </div>
                        
                        <div class="exercise-questions">
                            <h3>Consegne</h3>
                            <ol>
                                <li>Progetta l'architettura dell'applicazione (pattern MVC).</li>
                                <li>Definisci il modello dei dati e le classi principali.</li>
                                <li>Implementa le funzionalità di base (CRUD) per la gestione degli studenti.</li>
                                <li>Sviluppa l'interfaccia utente responsive.</li>
                                <li>Implementa la logica per il calcolo delle statistiche.</li>
                                <li>Gestisci l'autenticazione e l'autorizzazione degli utenti.</li>
                            </ol>
                        </div>
                        
                        <div class="exercise-answer">
                            <h3>Svolgimento</h3>
                            <div class="tabs">
                                <button class="tab-btn active" data-tab="architecture">Architettura</button>
                                <button class="tab-btn" data-tab="model">Modello Dati</button>
                                <button class="tab-btn" data-tab="backend">Backend</button>
                                <button class="tab-btn" data-tab="frontend">Frontend</button>
                            </div>
                            
                            <div class="tab-content active" id="architecture-content">
                                <textarea rows="10" placeholder="Descrivi qui l'architettura dell'applicazione..."></textarea>
                            </div>
                            
                            <div class="tab-content" id="model-content">
                                <textarea rows="10" placeholder="Definisci qui il modello dei dati e le classi..."></textarea>
                            </div>
                            
                            <div class="tab-content" id="backend-content">
                                <textarea rows="10" placeholder="Implementa qui il codice backend..."></textarea>
                            </div>
                            
                            <div class="tab-content" id="frontend-content">
                                <textarea rows="10" placeholder="Implementa qui il codice frontend..."></textarea>
                            </div>
                            
                            <button class="submit-btn">Invia svolgimento</button>
                        </div>
                    </div>
                `;
                break;
                
            case 'algoritmi':
                exerciseHTML = `
                    <h2>Esercitazione Algoritmi</h2>
                    <div class="exercise-container">
                        <div class="exercise-text">
                            <h3>Implementazione di algoritmi di ordinamento</h3>
                            <p>
                                Gli algoritmi di ordinamento sono fondamentali nell'informatica. In questa esercitazione dovrai implementare e analizzare diversi algoritmi di ordinamento.
                            </p>
                        </div>
                        
                        <div class="exercise-questions">
                            <h3>Consegne</h3>
                            <ol>
                                <li>Implementa i seguenti algoritmi di ordinamento:
                                    <ul>
                                        <li>Bubble Sort</li>
                                        <li>Insertion Sort</li>
                                        <li>Selection Sort</li>
                                        <li>Quick Sort</li>
                                        <li>Merge Sort</li>
                                    </ul>
                                </li>
                                <li>Per ciascun algoritmo:
                                    <ul>
                                        <li>Analizza la complessità computazionale (caso migliore, medio, peggiore)</li>
                                        <li>Valuta l'efficienza in termini di spazio</li>
                                        <li>Identifica vantaggi e svantaggi</li>
                                    </ul>
                                </li>
                                <li>Confronta le prestazioni degli algoritmi su dataset di diverse dimensioni.</li>
                                <li>Implementa una funzione che scelga automaticamente l'algoritmo più efficiente in base alle caratteristiche del dataset.</li>
                            </ol>
                        </div>
                        
                        <div class="exercise-answer">
                            <h3>Svolgimento</h3>
                            <div class="tabs">
                                <button class="tab-btn active" data-tab="implementation">Implementazione</button>
                                <button class="tab-btn" data-tab="analysis">Analisi</button>
                                <button class="tab-btn" data-tab="comparison">Confronto</button>
                                <button class="tab-btn" data-tab="selector">Selettore</button>
                            </div>
                            
                            <div class="tab-content active" id="implementation-content">
                                <textarea rows="15" placeholder="Implementa qui gli algoritmi di ordinamento..."></textarea>
                            </div>
                            
                            <div class="tab-content" id="analysis-content">
                                <textarea rows="15" placeholder="Analizza qui la complessità degli algoritmi..."></textarea>
                            </div>
                            
                            <div class="tab-content" id="comparison-content">
                                <textarea rows="15" placeholder="Confronta qui le prestazioni degli algoritmi..."></textarea>
                            </div>
                            
                            <div class="tab-content" id="selector-content">
                                <textarea rows="15" placeholder="Implementa qui la funzione di selezione automatica..."></textarea>
                            </div>
                            
                            <button class="submit-btn">Invia svolgimento</button>
                        </div>
                    </div>
                `;
                break;
                
            case 'italiano-quiz':
            case 'storia-quiz':
            case 'inglese-quiz':
            case 'ed-civica-quiz':
                exerciseHTML = `
                    <h2>Quiz di ${getSubjectName(exerciseType.split('-')[0])}</h2>
                    <div class="exercise-container">
                        <div class="quiz-container">
                            <div class="quiz-progress">
                                <div class="progress-bar">
                                    <div class="progress" style="width: 0%"></div>
                                </div>
                                <div class="progress-text">Domanda 1 di 10</div>
                            </div>
                            
                            <div class="quiz-question">
                                <h3>Domanda 1</h3>
                                <p>Chi è l'autore de "I Malavoglia"?</p>
                                
                                <div class="quiz-options">
                                    <label class="quiz-option">
                                        <input type="radio" name="q1" value="a">
                                        <span>Luigi Pirandello</span>
                                    </label>
                                    <label class="quiz-option">
                                        <input type="radio" name="q1" value="b">
                                        <span>Giovanni Verga</span>
                                    </label>
                                    <label class="quiz-option">
                                        <input type="radio" name="q1" value="c">
                                        <span>Italo Svevo</span>
                                    </label>
                                    <label class="quiz-option">
                                        <input type="radio" name="q1" value="d">
                                        <span>Gabriele D'Annunzio</span>
                                    </label>
                                </div>
                            </div>
                            
                            <div class="quiz-navigation">
                                <button class="quiz-btn" disabled>Precedente</button>
                                <button class="quiz-btn">Successiva</button>
                            </div>
                        </div>
                    </div>
                `;
                break;
                
            case 'matematica-esercizi':
            case 'informatica-sql':
            case 'sistemi-subnetting':
            case 'tpsit-socket':
            case 'gpoi-wbs':
                exerciseHTML = `
                    <h2>Esercizi di ${getSubjectName(exerciseType.split('-')[0])}</h2>
                    <div class="exercise-container">
                        <div class="exercise-text">
                            <h3>Esercizio 1</h3>
                            <p>
                                ${getExerciseText(exerciseType)}
                            </p>
                        </div>
                        
                        <div class="exercise-answer">
                            <h3>Svolgimento</h3>
                            <textarea rows="10" placeholder="Scrivi qui il tuo svolgimento..."></textarea>
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
        
        // Aggiungi event listener per i tab nelle esercitazioni
        const tabButtons = document.querySelectorAll('.tab-btn');
        if (tabButtons.length > 0) {
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const tab = this.getAttribute('data-tab');
                    
                    // Attiva tab
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Mostra contenuto tab
                    const tabContents = document.querySelectorAll('.tab-content');
                    tabContents.forEach(content => {
                        content.classList.remove('active');
                        if (content.id === `${tab}-content`) {
                            content.classList.add('active');
                        }
                    });
                });
            });
        }
        
        // Aggiungi event listener per i bottoni di submit
        const submitButtons = document.querySelectorAll('.submit-btn');
        submitButtons.forEach(button => {
            button.addEventListener('click', function() {
                alert('Svolgimento inviato con successo! Riceverai un feedback a breve.');
            });
        });
        
        // Aggiungi event listener per i bottoni del quiz
        const quizButtons = document.querySelectorAll('.quiz-btn');
        if (quizButtons.length > 0) {
            let currentQuestion = 1;
            const totalQuestions = 10;
            
            quizButtons[1].addEventListener('click', function() {
                if (currentQuestion < totalQuestions) {
                    currentQuestion++;
                    updateQuizProgress(currentQuestion, totalQuestions);
                    
                    // Disabilita il pulsante "Successiva" all'ultima domanda
                    if (currentQuestion === totalQuestions) {
                        this.textContent = 'Termina';
                    }
                    
                    // Abilita il pulsante "Precedente"
                    quizButtons[0].disabled = false;
                } else {
                    // Termina il quiz
                    alert('Quiz completato! Punteggio: 8/10');
                    exerciseModal.style.display = 'none';
                }
            });
            
            quizButtons[0].addEventListener('click', function() {
                if (currentQuestion > 1) {
                    currentQuestion--;
                    updateQuizProgress(currentQuestion, totalQuestions);
                    
                    // Disabilita il pulsante "Precedente" alla prima domanda
                    if (currentQuestion === 1) {
                        this.disabled = true;
                    }
                    
                    // Cambia il testo del pulsante "Termina" a "Successiva"
                    quizButtons[1].textContent = 'Successiva';
                }
            });
        }
    }
    
    // Funzione per aggiornare la progress bar del quiz
    function updateQuizProgress(current, total) {
        const progressBar = document.querySelector('.progress');
        const progressText = document.querySelector('.progress-text');
        
        if (progressBar && progressText) {
            const percentage = (current / total) * 100;
            progressBar.style.width = `${percentage}%`;
            progressText.textContent = `Domanda ${current} di ${total}`;
        }
    }
    
    // Funzione per ottenere il testo dell'esercizio
    function getExerciseText(exerciseType) {
        switch(exerciseType) {
            case 'matematica-esercizi':
                return 'Calcola la derivata della seguente funzione: f(x) = x³ · ln(x) - 2x² + 5';
            case 'informatica-sql':
                return 'Data la tabella Prodotti(ID, Nome, Prezzo, Categoria, Quantità) e la tabella Ordini(ID, ClienteID, Data, Totale), scrivi una query SQL per trovare i 5 prodotti più venduti nell\'ultimo mese.';
            case 'sistemi-subnetting':
                return 'Data la rete 192.168.10.0/24, suddividila in 4 sottoreti di uguale dimensione. Per ciascuna sottorete, indica indirizzo di rete, broadcast, range di indirizzi assegnabili e subnet mask.';
            case 'tpsit-socket':
                return 'Implementa un\'applicazione client-server utilizzando i socket TCP. Il server deve essere in grado di gestire più client contemporaneamente e rispondere a richieste di calcolo matematico inviate dai client.';
            case 'gpoi-wbs':
                return 'Crea una Work Breakdown Structure (WBS) per un progetto di sviluppo di un\'applicazione web per un e-commerce. Identifica le fasi principali, le attività e le sottoattività, assegnando tempi e risorse.';
            default:
                return 'Svolgi l\'esercizio seguendo le indicazioni.';
        }
    }
    
    // Gestione bottoni risorse
    const resourceLinks = document.querySelectorAll('.resource-link, .download-btn, .view-btn, .join-btn');
    
    resourceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const resourceType = this.getAttribute('data-resource');
            if (resourceType) {
                loadResource(resourceType);
                resourceModal.style.display = 'flex';
            }
        });
    });
    
    // Funzione per caricare la risorsa
    function loadResource(resourceType) {
        let resourceHTML = '';
        
        switch(resourceType) {
            case 'italiano-riassunto':
            case 'italiano-analisi':
            case 'storia-cronologia':
            case 'storia-mappe':
            case 'inglese-vocab':
            case 'inglese-reading':
            case 'matematica-formulario':
            case 'matematica-esercizi':
            case 'informatica-db':
            case 'informatica-sql':
            case 'sistemi-teoria':
            case 'sistemi-subnetting':
            case 'tpsit-teoria':
            case 'tpsit-codice':
            case 'gpoi-teoria':
            case 'gpoi-progetti':
            case 'riassunti-materie':
            case 'simulazioni-precedenti':
            case 'checklist-esame':
                resourceHTML = `
                    <h2>${getResourceTitle(resourceType)}</h2>
                    <div class="resource-preview">
                        <div class="pdf-preview">
                            <img src="https://via.placeholder.com/600x800?text=Anteprima+PDF" alt="Anteprima PDF">
                        </div>
                        <div class="resource-actions">
                            <p>Documento PDF - 2.4 MB</p>
                            <button class="download-btn">Scarica <i class="fas fa-download"></i></button>
                            <button class="view-btn">Visualizza <i class="fas fa-eye"></i></button>
                        </div>
                    </div>
                `;
                break;
                
            case 'italiano-video':
            case 'storia-video':
            case 'inglese-listening':
            case 'matematica-video':
            case 'informatica-video':
            case 'sistemi-video':
            case 'tpsit-video':
            case 'gpoi-video':
            case 'video-lezioni':
                resourceHTML = `
                    <h2>${getResourceTitle(resourceType)}</h2>
                    <div class="resource-preview">
                        <div class="video-preview">
                            <div class="video-container">
                                <img src="https://via.placeholder.com/800x450?text=Anteprima+Video" alt="Anteprima video">
                                <div class="video-play-button">
                                    <i class="fas fa-play"></i>
                                </div>
                            </div>
                        </div>
                        <div class="resource-actions">
                            <p>Video - 15:24 - Qualità HD</p>
                            <button class="view-btn">Guarda <i class="fas fa-play"></i></button>
                            <button class="download-btn">Scarica <i class="fas fa-download"></i></button>
                        </div>
                    </div>
                `;
                break;
                
            case 'italiano-mappe':
            case 'storia-riassunti':
            case 'inglese-grammar':
            case 'matematica-mappe':
            case 'informatica-progetti':
            case 'sistemi-packet':
            case 'tpsit-progetti':
            case 'gpoi-casi':
                resourceHTML = `
                    <h2>${getResourceTitle(resourceType)}</h2>
                    <div class="resource-preview">
                        <div class="resource-gallery">
                            <div class="gallery-item">
                                <img src="https://via.placeholder.com/300x200?text=Risorsa+1" alt="Risorsa 1">
                            </div>
                            <div class="gallery-item">
                                <img src="https://via.placeholder.com/300x200?text=Risorsa+2" alt="Risorsa 2">
                            </div>
                            <div class="gallery-item">
                                <img src="https://via.placeholder.com/300x200?text=Risorsa+3" alt="Risorsa 3">
                            </div>
                            <div class="gallery-item">
                                <img src="https://via.placeholder.com/300x200?text=Risorsa+4" alt="Risorsa 4">
                            </div>
                        </div>
                        <div class="resource-actions">
                            <p>Raccolta di risorse - 4 elementi</p>
                            <button class="download-btn">Scarica tutto <i class="fas fa-download"></i></button>
                        </div>
                    </div>
                `;
                break;
                
            case 'pcto-template':
                resourceHTML = `
                    <h2>Template PowerPoint per PCTO</h2>
                    <div class="resource-preview">
                        <div class="template-preview">
                            <div class="template-slides">
                                <img src="https://via.placeholder.com/800x450?text=Slide+1" alt="Slide 1">
                                <div class="template-navigation">
                                    <button><i class="fas fa-chevron-left"></i></button>
                                    <span>Slide 1 di 10</span>
                                    <button><i class="fas fa-chevron-right"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="resource-actions">
                            <p>Presentazione PowerPoint - 10 slide - 1.8 MB</p>
                            <button class="download-btn">Scarica template <i class="fas fa-download"></i></button>
                        </div>
                    </div>
                `;
                break;
                
            case 'esempi-codice':
                resourceHTML = `
                    <h2>Esempi di Codice</h2>
                    <div class="resource-preview">
                        <div class="code-browser">
                            <div class="code-browser-header">
                                <div class="code-browser-tabs">
                                    <div class="code-tab active">Java</div>
                                    <div class="code-tab">PHP</div>
                                    <div class="code-tab">JavaScript</div>
                                    <div class="code-tab">SQL</div>
                                </div>
                            </div>
                            <div class="code-browser-content">
                                <pre><code>public class GestioneStudenti {
    private List&lt;Studente&gt; studenti;
    
    public GestioneStudenti() {
        this.studenti = new ArrayList&lt;&gt;();
    }
    
    public void aggiungiStudente(Studente studente) {
        studenti.add(studente);
    }
    
    public List&lt;Studente&gt; cercaPerClasse(String classe) {
        return studenti.stream()
                .filter(s -> s.getClasse().equals(classe))
                .collect(Collectors.toList());
    }
    
    public double calcolaMediaVoti(int studenteId) {
        Studente studente = trovaPerId(studenteId);
        if (studente == null) return 0;
        
        return studente.getVoti().stream()
                .mapToDouble(Voto::getValore)
                .average()
                .orElse(0);
    }
}</code></pre>
                            </div>
                        </div>
                        <div class="resource-actions">
                            <p>Raccolta di esempi di codice in diversi linguaggi</p>
                            <button class="download-btn">Scarica tutto <i class="fas fa-download"></i></button>
                        </div>
                    </div>
                `;
                break;
                
            case 'progetti-completi':
                resourceHTML = `
                    <h2>Progetti Completi</h2>
                    <div class="resource-preview">
                        <div class="projects-list">
                            <div class="project-item">
                                <div class="project-icon">
                                    <i class="fas fa-shopping-cart"></i>
                                </div>
                                <div class="project-info">
                                    <h3>E-commerce</h3>
                                    <p>Applicazione web completa per un negozio online</p>
                                    <p class="project-tech">Java, Spring Boot, MySQL, React</p>
                                </div>
                                <div class="project-actions">
                                    <button class="download-btn">Scarica</button>
                                </div>
                            </div>
                            
                            <div class="project-item">
                                <div class="project-icon">
                                    <i class="fas fa-calendar-alt"></i>
                                </div>
                                <div class="project-info">
                                    <h3>Gestione Prenotazioni</h3>
                                    <p>Sistema di prenotazione per strutture ricettive</p>
                                    <p class="project-tech">PHP, Laravel, MySQL, Vue.js</p>
                                </div>
                                <div class="project-actions">
                                    <button class="download-btn">Scarica</button>
                                </div>
                            </div>
                            
                            <div class="project-item">
                                <div class="project-icon">
                                    <i class="fas fa-graduation-cap"></i>
                                </div>
                                <div class="project-info">
                                    <h3>Registro Elettronico</h3>
                                    <p>Applicazione per la gestione scolastica</p>
                                    <p class="project-tech">C#, ASP.NET Core, SQL Server, Angular</p>
                                </div>
                                <div class="project-actions">
                                    <button class="download-btn">Scarica</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
                
            case 'forum-discussione':
                resourceHTML = `
                    <h2>Forum di Discussione</h2>
                    <div class="resource-preview">
                        <div class="forum-preview">
                            <div class="forum-header">
                                <h3>Discussioni recenti</h3>
                                <button class="new-topic-btn">Nuovo argomento</button>
                            </div>
                            <div class="forum-topics">
                                <div class="forum-topic">
                                    <div class="topic-info">
                                        <h4>Dubbi sulla seconda prova di informatica</h4>
                                        <p>Avrei bisogno di chiarimenti sulla parte di progettazione database...</p>
                                        <div class="topic-meta">
                                            <span><i class="fas fa-user"></i> Marco P.</span>
                                            <span><i class="fas fa-clock"></i> 2 ore fa</span>
                                            <span><i class="fas fa-comments"></i> 12 risposte</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="forum-topic">
                                    <div class="topic-info">
                                        <h4>Consigli per l'orale di storia</h4>
                                        <p>Come state preparando i collegamenti tra le due guerre mondiali?</p>
                                        <div class="topic-meta">
                                            <span><i class="fas fa-user"></i> Giulia M.</span>
                                            <span><i class="fas fa-clock"></i> Ieri</span>
                                            <span><i class="fas fa-comments"></i> 8 risposte</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="forum-topic">
                                    <div class="topic-info">
                                        <h4>Simulazione prima prova: confronto risultati</h4>
                                        <p>Vorrei confrontare i risultati della simulazione di italiano...</p>
                                        <div class="topic-meta">
                                            <span><i class="fas fa-user"></i> Alessandro B.</span>
                                            <span><i class="fas fa-clock"></i> 3 giorni fa</span>
                                            <span><i class="fas fa-comments"></i> 24 risposte</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="resource-actions">
                            <button class="join-btn">Partecipa al forum <i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                `;
                break;
                
            case 'quiz-interattivi':
                resourceHTML = `
                    <h2>Quiz Interattivi</h2>
                    <div class="resource-preview">
                        <div class="quiz-categories">
                            <div class="quiz-category">
                                <div class="category-icon">
                                    <i class="fas fa-book"></i>
                                </div>
                                <h3>Italiano</h3>
                                <p>10 quiz disponibili</p>
                                <button class="view-btn">Inizia</button>
                            </div>
                            
                            <div class="quiz-category">
                                <div class="category-icon">
                                    <i class="fas fa-landmark"></i>
                                </div>
                                <h3>Storia</h3>
                                <p>8 quiz disponibili</p>
                                <button class="view-btn">Inizia</button>
                            </div>
                            
                            <div class="quiz-category">
                                <div class="category-icon">
                                    <i class="fas fa-laptop-code"></i>
                                </div>
                                <h3>Informatica</h3>
                                <p>12 quiz disponibili</p>
                                <button class="view-btn">Inizia</button>
                            </div>
                            
                            <div class="quiz-category">
                                <div class="category-icon">
                                    <i class="fas fa-network-wired"></i>
                                </div>
                                <h3>Sistemi e Reti</h3>
                                <p>9 quiz disponibili</p>
                                <button class="view-btn">Inizia</button>
                            </div>
                        </div>
                    </div>
                `;
                break;
                
            default:
                resourceHTML = `
                    <h2>Risorsa</h2>
                    <p>Risorsa non disponibile. Riprova più tardi.</p>
                `;
        }
        
        document.getElementById('resource-content').innerHTML = resourceHTML;
        
        // Aggiungi event listener per i bottoni nella risorsa
        const resourceButtons = document.querySelectorAll('#resource-content .download-btn, #resource-content .view-btn, #resource-content .join-btn');
        resourceButtons.forEach(button => {
            button.addEventListener('click', function() {
                alert('Download/visualizzazione avviata!');
            });
        });
    }
    
    // Funzione per ottenere il titolo della risorsa
    function getResourceTitle(resourceType) {
        switch(resourceType) {
            case 'italiano-riassunto':
                return 'Riassunto autori del \'900';
            case 'italiano-analisi':
                return 'Analisi testi principali';
            case 'italiano-video':
                return 'Videolezioni sul Neorealismo';
            case 'italiano-mappe':
                return 'Mappe concettuali di Italiano';
            case 'storia-cronologia':
                return 'Cronologia del \'900';
            case 'storia-mappe':
                return 'Mappe concettuali di Storia';
            case 'storia-video':
                return 'Documentari storici';
            case 'storia-riassunti':
                return 'Riassunti per periodo storico';
            case 'inglese-vocab':
                return 'Technical vocabulary';
            case 'inglese-reading':
                return 'Reading comprehension';
            case 'inglese-listening':
                return 'Listening exercises';
            case 'inglese-grammar':
                return 'Grammar review';
            case 'matematica-formulario':
                return 'Formulario completo di Matematica';
            case 'matematica-esercizi':
                return 'Esercizi svolti di Matematica';
            case 'matematica-video':
                return 'Videolezioni di Matematica';
            case 'matematica-mappe':
                return 'Mappe concettuali di Matematica';
            case 'informatica-db':
                return 'Teoria dei database';
            case 'informatica-sql':
                return 'Esercizi SQL';
            case 'informatica-video':
                return 'Videolezioni di Informatica';
            case 'informatica-progetti':
                return 'Esempi di progetti informatici';
            case 'sistemi-teoria':
                return 'Teoria delle reti';
            case 'sistemi-subnetting':
                return 'Esercizi di subnetting';
            case 'sistemi-video':
                return 'Videolezioni di Sistemi e Reti';
            case 'sistemi-packet':
                return 'Simulazioni Packet Tracer';
            case 'tpsit-teoria':
                return 'Teoria architetture';
            case 'tpsit-codice':
                return 'Esempi di codice';
            case 'tpsit-video':
                return 'Videolezioni di TPSIT';
            case 'tpsit-progetti':
                return 'Progetti guidati';
            case 'gpoi-teoria':
                return 'Teoria project management';
            case 'gpoi-progetti':
                return 'Esempi di progetti';
            case 'gpoi-video':
                return 'Videolezioni di GPOI';
            case 'gpoi-casi':
                return 'Casi di studio';
            case 'riassunti-materie':
                return 'Riassunti delle materie';
            case 'simulazioni-precedenti':
                return 'Simulazioni anni precedenti';
            case 'video-lezioni':
                return 'Video lezioni';
            case 'esempi-codice':
                return 'Esempi di codice';
            case 'progetti-completi':
                return 'Progetti completi';
            case 'forum-discussione':
                return 'Forum di discussione';
            case 'checklist-esame':
                return 'Checklist per l\'esame';
            case 'quiz-interattivi':
                return 'Quiz interattivi';
            default:
                return 'Risorsa';
        }
    }
    
    // Gestione bottoni simulazioni
    const simulazioneButtons = document.querySelectorAll('.simulazione-btn');
    
    simulazioneButtons.forEach(button => {
        button.addEventListener('click', function() {
            const simulazioneType = this.getAttribute('data-simulazione');
            loadSimulazione(simulazioneType);
            simulazioneModal.style.display = 'flex';
        });
    });
    
    // Funzione per caricare la simulazione
    function loadSimulazione(simulazioneType) {
        let simulazioneHTML = '';
        
        switch(simulazioneType) {
            case 'prima-prova':
                simulazioneHTML = `
                    <h2>Simulazione Prima Prova - Italiano</h2>
                    <div class="exercise-container">
                        <div class="tabs">
                            <button class="tab-btn active" data-tab="tipologia-a-sim">Tipologia A</button>
                            <button class="tab-btn" data-tab="tipologia-b-sim">Tipologia B</button>
                            <button class="tab-btn" data-tab="tipologia-c-sim">Tipologia C</button>
                            <button class="tab-btn" data-tab="istruzioni-sim">Istruzioni</button>
                        </div>
                        
                        <div class="tab-content active" id="tipologia-a-sim-content">
                            <div class="exercise-text">
                                <h3>Analisi del testo - Eugenio Montale, "Meriggiare pallido e assorto"</h3>
                                <p class="text-excerpt">
                                    Meriggiare pallido e assorto<br>
                                    presso un rovente muro d'orto,<br>
                                    ascoltare tra i pruni e gli sterpi<br>
                                    schiocchi di merli, frusci di serpi.<br>
                                    <br>
                                    Nelle crepe del suolo o su la veccia<br>
                                    spiar le file di rosse formiche<br>
                                    ch'ora si rompono ed ora s'intrecciano<br>
                                    a sommo di minuscole biche.<br>
                                    <br>
                                    Osservare tra frondi il palpitare<br>
                                    lontano di scaglie di mare<br>
                                    mentre si levano tremuli scricchi<br>
                                    di cicale dai calvi picchi.<br>
                                    <br>
                                    E andando nel sole che abbaglia<br>
                                    sentire con triste meraviglia<br>
                                    com'è tutta la vita e il suo travaglio<br>
                                    in questo seguitare una muraglia<br>
                                    che ha in cima cocci aguzzi di bottiglia.
                                </p>
                            </div>
                            
                            <div class="exercise-questions">
                                <h3>Consegne</h3>
                                <ol>
                                    <li>Comprensione del testo
                                        <ul>
                                            <li>Riassumi il contenuto informativo della lirica.</li>
                                        </ul>
                                    </li>
                                    <li>Analisi del testo
                                        <ul>
                                            <li>Analizza il titolo e la sua relazione con il contenuto del testo.</li>
                                            <li>Individua le figure retoriche e spiegane l'effetto.</li>
                                            <li>Analizza la struttura metrica e il ritmo.</li>
                                            <li>Spiega il significato dell'immagine finale della muraglia con i cocci di bottiglia.</li>
                                        </ul>
                                    </li>
                                    <li>Interpretazione complessiva e approfondimenti
                                        <ul>
                                            <li>Elabora una tua interpretazione complessiva del testo, approfondendo il tema dell'esistenza nella poetica di Montale.</li>
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
                        
                        <div class="tab-content" id="tipologia-b-sim-content">
                            <div class="exercise-text">
                                <h3>Testo argomentativo - Il ruolo dell'intelligenza artificiale nella società contemporanea</h3>
                                <p class="text-excerpt">
                                    L'intelligenza artificiale (IA) rappresenta una delle più significative rivoluzioni tecnologiche del nostro tempo, con implicazioni profonde che si estendono ben oltre il campo puramente tecnico. Negli ultimi anni, i progressi in questo settore hanno accelerato notevolmente, portando a sviluppi che solo un decennio fa sarebbero stati considerati fantascientifici.
                                    <br><br>
                                    I sistemi di IA oggi permeano numerosi aspetti della nostra quotidianità: dagli assistenti virtuali che utilizziamo sui nostri smartphone, agli algoritmi che personalizzano la nostra esperienza sui social media, fino ai sistemi avanzati che supportano diagnosi mediche o previsioni finanziarie. Questa diffusione capillare solleva interrogativi fondamentali sul rapporto tra uomo e macchina, sul futuro del lavoro, sulla privacy e sull'etica.
                                    <br><br>
                                    Da un lato, l'IA offre opportunità senza precedenti per risolvere problemi complessi: può analizzare enormi quantità di dati in tempi ridottissimi, identificare pattern non evidenti all'occhio umano, automatizzare processi ripetitivi liberando risorse per attività più creative. In ambito medico, per esempio, algoritmi di apprendimento automatico possono rilevare segni precoci di malattie in immagini diagnostiche con una precisione talvolta superiore a quella dei medici esperti.
                                    <br><br>
                                    Dall'altro lato, emergono preoccupazioni legittime riguardo all'impatto sociale di questa tecnologia. La prima riguarda il mercato del lavoro: mentre l'automazione ha storicamente creato più posti di lavoro di quanti ne abbia eliminati, la velocità e la portata dell'attuale rivoluzione tecnologica potrebbero non consentire un adattamento altrettanto rapido. Inoltre, questioni come la trasparenza degli algoritmi, i bias nei dati di addestramento e la concentrazione di potere nelle mani di poche aziende tecnologiche sollevano interrogativi sulla governance di queste tecnologie.
                                    <br><br>
                                    Il dibattito sull'IA non è quindi meramente tecnico, ma profondamente politico e filosofico. Riguarda il tipo di società che vogliamo costruire e il ruolo che intendiamo assegnare alla tecnologia nel nostro futuro collettivo. La sfida consiste nel trovare un equilibrio che permetta di sfruttare i benefici dell'IA minimizzandone i rischi, attraverso un approccio che coinvolga non solo esperti tecnici, ma l'intera società civile.
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
                                            <li>Perché l'autore sostiene che il dibattito sull'IA è "profondamente politico e filosofico"?</li>
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
                        
                        <div class="tab-content" id="tipologia-c-sim-content">
                            <div class="exercise-text">
                                <h3>Tema di attualità - La sostenibilità ambientale: sfide e opportunità per le nuove generazioni</h3>
                                <p class="text-excerpt">
                                    Il cambiamento climatico rappresenta una delle sfide più urgenti e complesse del nostro tempo. Gli effetti del riscaldamento globale sono già visibili: eventi meteorologici estremi, innalzamento del livello dei mari, perdita di biodiversità. Secondo il rapporto dell'IPCC (Intergovernmental Panel on Climate Change), è necessario limitare l'aumento della temperatura globale a 1,5°C rispetto ai livelli preindustriali per evitare conseguenze catastrofiche.
                                    <br><br>
                                    Di fronte a questa emergenza, le nuove generazioni si trovano in una posizione particolare: da un lato, sono quelle che subiranno maggiormente le conseguenze delle azioni (o inazioni) presenti; dall'altro, rappresentano una forza di cambiamento senza precedenti, come dimostrato dai movimenti giovanili per il clima emersi negli ultimi anni.
                                    <br><br>
                                    La transizione verso un modello di sviluppo sostenibile richiede trasformazioni profonde in molteplici settori: energia, trasporti, agricoltura, industria, edilizia. Questa transizione comporta sfide significative, ma offre anche opportunità di innovazione, creazione di nuovi posti di lavoro e miglioramento della qualità della vita.
                                    <br><br>
                                    Il concetto di sostenibilità, tuttavia, non si limita alla dimensione ambientale, ma include anche aspetti sociali ed economici. Un futuro veramente sostenibile deve garantire equità, inclusione e benessere per tutti, senza lasciare indietro nessuno.
                                </p>
                            </div>
                            
                            <div class="exercise-questions">
                                <h3>Consegne</h3>
                                <p>Rifletti sul tema proposto elaborando un testo che presenti le tue opinioni, supportate da argomenti ed esempi concreti. Puoi articolare il tuo elaborato in paragrafi opportunamente titolati e presentare la trattazione con un titolo complessivo che ne esprima sinteticamente il contenuto.</p>
                                <p>Alcuni spunti di riflessione:</p>
                                <ul>
                                    <li>Quali sono le principali sfide ambientali che la tua generazione dovrà affrontare?</li>
                                    <li>In che modo le nuove tecnologie possono contribuire alla sostenibilità?</li>
                                    <li>Quale ruolo possono svolgere i giovani nel promuovere un futuro più sostenibile?</li>
                                    <li>Come conciliare sviluppo economico e tutela dell'ambiente?</li>
                                </ul>
                            </div>
                            
                            <div class="exercise-answer">
                                <h3>Svolgimento</h3>
                                <textarea rows="15" placeholder="Scrivi qui il tuo svolgimento..."></textarea>
                                <button class="submit-btn">Invia svolgimento</button>
                            </div>
                        </div>
                        
                        <div class="tab-content" id="istruzioni-sim-content">
                            <h3>Istruzioni per la simulazione</h3>
                            <div class="info-box">
                                <h4>Durata della prova</h4>
                                <p>La prova ha una durata massima di 6 ore.</p>
                                
                                <h4>Materiali consentiti</h4>
                                <ul>
                                    <li>Dizionario della lingua italiana</li>
                                    <li>Dizionario dei sinonimi e contrari</li>
                                </ul>
                                
                                <h4>Indicazioni generali</h4>
                                <ul>
                                    <li>Scegli una delle tre tipologie (A, B o C)</li>
                                    <li>Leggi attentamente il testo e le consegne</li>
                                    <li>Pianifica il tuo elaborato prima di iniziare a scrivere</li>
                                    <li>Cura l'organizzazione del testo, la correttezza linguistica e l'uso di un registro adeguato</li>
                                    <li>Rivedi il tuo elaborato prima di consegnarlo</li>
                                </ul>
                                
                                <h4>Valutazione</h4>
                                <p>L'elaborato sarà valutato secondo i seguenti criteri:</p>
                                <ul>
                                    <li>Aderenza alla traccia e alle consegne</li>
                                    <li>Organizzazione e coerenza del testo</li>
                                    <li>Correttezza linguistica (ortografia, morfosintassi, lessico)</li>
                                    <li>Capacità di analisi, interpretazione e approfondimento</li>
                                    <li>Originalità e creatività</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
                break;
                
            case 'seconda-prova':
                simulazioneHTML = `
                    <h2>Simulazione Seconda Prova - Informatica</h2>
                    <div class="exercise-container">
                        <div class="tabs">
                            <button class="tab-btn active" data-tab="traccia-sim">Traccia</button>
                            <button class="tab-btn" data-tab="materiali-sim">Materiali</button>
                            <button class="tab-btn" data-tab="istruzioni-sim">Istruzioni</button>
                        </div>
                        
                        <div class="tab-content active" id="traccia-sim-content">
                            <div class="exercise-text">
                                <h3>Sistema di gestione per un e-commerce</h3>
                                <p>
                                    Un'azienda che vende prodotti online necessita di un sistema informatico per la gestione del proprio e-commerce. Il sistema deve gestire:
                                </p>
                                <ul>
                                    <li>Catalogo prodotti (categorie, sottocategorie, prodotti)</li>
                                    <li>Gestione utenti (registrazione, autenticazione, profili)</li>
                                    <li>Carrello e ordini</li>
                                    <li>Pagamenti</li>
                                    <li>Spedizioni e tracking</li>
                                    <li>Recensioni e valutazioni</li>
                                    <li>Statistiche di vendita</li>
                                </ul>
                                
                                <p>
                                    Ogni prodotto è caratterizzato da un codice univoco, nome, descrizione, prezzo, disponibilità, categoria, immagini, specifiche tecniche. I prodotti possono essere soggetti a sconti o promozioni.
                                </p>
                                
                                <p>
                                    Gli utenti possono registrarsi fornendo email, password, nome, cognome, indirizzo di spedizione e fatturazione, numero di telefono. Gli utenti registrati possono salvare prodotti nei preferiti, visualizzare lo storico ordini, gestire più indirizzi di spedizione.
                                </p>
                                
                                <p>
                                    Il sistema deve gestire l'intero processo di acquisto: aggiunta prodotti al carrello, checkout, pagamento, conferma ordine, tracking della spedizione.
                                </p>
                                
                                <p>
                                    È richiesta anche un'area amministrativa per la gestione del catalogo, degli ordini, delle promozioni e per la visualizzazione di statistiche e report.
                                </p>
                            </div>
                            
                            <div class="exercise-questions">
                                <h3>Consegne</h3>
                                <ol>
                                    <li>Progettazione del database:
                                        <ul>
                                            <li>Realizza il modello E/R</li>
                                            <li>Deriva il modello logico relazionale</li>
                                            <li>Implementa il database in SQL (DDL)</li>
                                        </ul>
                                    </li>
                                    <li>Implementazione delle query SQL per:
                                        <ul>
                                            <li>Elenco prodotti di una categoria con disponibilità > 0, ordinati per prezzo</li>
                                            <li>Ricerca prodotti per parola chiave nella descrizione</li>
                                            <li>Elenco ordini di un utente con dettaglio prodotti</li>
                                            <li>Report vendite mensili per categoria</li>
                                        </ul>
                                    </li>
                                    <li>Progettazione dell'applicazione:
                                        <ul>
                                            <li>Descrivi l'architettura del sistema (pattern MVC)</li>
                                            <li>Implementa le classi principali del modello</li>
                                            <li>Sviluppa l'API REST per la gestione del carrello</li>
                                            <li>Implementa la pagina di dettaglio prodotto (HTML, CSS, JavaScript)</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                            
                            <div class="exercise-answer">
                                <h3>Svolgimento</h3>
                                <div class="tabs">
                                    <button class="tab-btn active" data-tab="er-sim">Modello E/R</button>
                                    <button class="tab-btn" data-tab="relational-sim">Modello Relazionale</button>
                                    <button class="tab-btn" data-tab="sql-sim">SQL</button>
                                    <button class="tab-btn" data-tab="app-sim">Applicazione</button>
                                </div>
                                
                                <div class="tab-content active" id="er-sim-content">
                                    <textarea rows="15" placeholder="Descrivi qui il tuo modello E/R o carica un'immagine..."></textarea>
                                    <input type="file" accept="image/*">
                                </div>
                                
                                <div class="tab-content" id="relational-sim-content">
                                    <textarea rows="15" placeholder="Descrivi qui il tuo modello relazionale..."></textarea>
                                </div>
                                
                                <div class="tab-content" id="sql-sim-content">
                                    <textarea rows="15" placeholder="Scrivi qui il codice SQL (DDL e query)..."></textarea>
                                </div>
                                
                                <div class="tab-content" id="app-sim-content">
                                    <textarea rows="15" placeholder="Descrivi l'architettura e implementa le classi richieste..."></textarea>
                                </div>
                                
                                <button class="submit-btn">Invia svolgimento</button>
                            </div>
                        </div>
                        
                        <div class="tab-content" id="materiali-sim-content">
                            <h3>Materiali di supporto</h3>
                            <div class="info-box">
                                <h4>Esempio di schema E/R</h4>
                                <img src="https://via.placeholder.com/800x400?text=Esempio+Schema+E/R" alt="Esempio Schema E/R">
                                
                                <h4>Template SQL</h4>
                                <pre><code>-- Creazione tabella Prodotti
CREATE TABLE Prodotti (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100) NOT NULL,
    Descrizione TEXT,
    Prezzo DECIMAL(10,2) NOT NULL,
    Disponibilita INT NOT NULL DEFAULT 0,
    CategoriaID INT,
    FOREIGN KEY (CategoriaID) REFERENCES Categorie(ID)
);

-- Esempio di query
SELECT p.Nome, p.Prezzo, c.Nome AS Categoria
FROM Prodotti p
JOIN Categorie c ON p.CategoriaID = c.ID
WHERE p.Disponibilita > 0
ORDER BY p.Prezzo;</code></pre>
                                
                                <h4>Esempio di classe Java</h4>
                                <pre><code>public class Prodotto {
    private int id;
    private String nome;
    private String descrizione;
    private double prezzo;
    private int disponibilita;
    private Categoria categoria;
    private List&lt;Immagine&gt; immagini;
    
    // Costruttori, getter e setter
    
    public boolean isDisponibile() {
        return disponibilita > 0;
    }
    
    public double getPrezzoScontato(Promozione promozione) {
        if (promozione == null) return prezzo;
        return prezzo * (1 - promozione.getPercentualeSconto() / 100.0);
    }
}</code></pre>
                            </div>
                        </div>
                        
                        <div class="tab-content" id="istruzioni-sim-content">
                            <h3>Istruzioni per la simulazione</h3>
                            <div class="info-box">
                                <h4>Durata della prova</h4>
                                <p>La prova ha una durata massima di 6 ore.</p>
                                
                                <h4>Materiali consentiti</h4>
                                <ul>
                                    <li>Manuali tecnici</li>
                                    <li>Documentazione di linguaggi e framework</li>
                                    <li>Calcolatrice non programmabile</li>
                                </ul>
                                
                                <h4>Indicazioni generali</h4>
                                <ul>
                                    <li>Leggi attentamente la traccia e le consegne</li>
                                    <li>Pianifica il tuo lavoro prima di iniziare</li>
                                    <li>Commenta adeguatamente il codice</li>
                                    <li>Motiva le scelte progettuali</li>
                                    <li>Verifica la correttezza delle soluzioni proposte</li>
                                </ul>
                                
                                <h4>Valutazione</h4>
                                <p>L'elaborato sarà valutato secondo i seguenti criteri:</p>
                                <ul>
                                    <li>Correttezza della soluzione</li>
                                    <li>Completezza rispetto alle consegne</li>
                                    <li>Efficienza e ottimizzazione</li>
                                    <li>Chiarezza e leggibilità del codice</li>
                                    <li>Documentazione e commenti</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
                break;
                
            case 'colloquio':
                simulazioneHTML = `
                    <h2>Simulazione Colloquio Orale</h2>
                    <div class="exercise-container">
                        <div class="tabs">
                            <button class="tab-btn active" data-tab="materiale-sim">Materiale di partenza</button>
                            <button class="tab-btn" data-tab="percorso-sim">Percorso multidisciplinare</button>
                            <button class="tab-btn" data-tab="pcto-sim">PCTO</button>
                            <button class="tab-btn" data-tab="ed-civica-sim">Educazione Civica</button>
                            <button class="tab-btn" data-tab="consigli-sim">Consigli</button>
                        </div>
                        
                        <div class="tab-content active" id="materiale-sim-content">
                            <h3>Materiale di partenza</h3>
                            <div class="info-box">
                                <p>Il colloquio inizia con l'analisi di un materiale scelto dalla commissione. Di seguito è riportato un esempio di materiale che potrebbe essere proposto:</p>
                                
                                <div class="material-example">
                                    <img src="https://via.placeholder.com/800x400?text=Immagine:+Intelligenza+Artificiale+e+Società" alt="Intelligenza Artificiale e Società">
                                    <p class="caption">L'immagine rappresenta l'interazione tra intelligenza artificiale e società umana, evidenziando aspetti come l'automazione, la privacy, l'etica e le trasformazioni sociali.</p>
                                </div>
                                
                                <h4>Consegna</h4>
                                <p>A partire dal materiale fornito, sviluppa un percorso multidisciplinare che colleghi diverse materie del tuo piano di studi, evidenziando le connessioni tra i vari ambiti disciplinari.</p>
                            </div>
                            
                            <div class="exercise-answer">
                                <h3>Svolgimento</h3>
                                <textarea rows="10" placeholder="Descrivi qui come inizieresti il tuo colloquio a partire da questo materiale..."></textarea>
                            </div>
                        </div>
                        
                        <div class="tab-content" id="percorso-sim-content">
                            <h3>Percorso multidisciplinare</h3>
                            <div class="info-box">
                                <p>Partendo dal materiale fornito, ecco un esempio di possibile percorso multidisciplinare:</p>
                                
                                <h4>Informatica</h4>
                                <ul>
                                    <li>Intelligenza artificiale: algoritmi di machine learning e deep learning</li>
                                    <li>Big data e data mining</li>
                                    <li>Etica dell'IA e bias algoritmici</li>
                                </ul>
                                
                                <h4>Sistemi e Reti</h4>
                                <ul>
                                    <li>Sicurezza dei dati e privacy</li>
                                    <li>Cloud computing e distribuzione dei sistemi di IA</li>
                                    <li>IoT e raccolta dati</li>
                                </ul>
                                
                                <h4>TPSIT</h4>
                                <ul>
                                    <li>Architetture software per sistemi di IA</li>
                                    <li>Microservizi e scalabilità</li>
                                    <li>Interfacce uomo-macchina</li>
                                </ul>
                                
                                <h4>Matematica</h4>
                                <ul>
                                    <li>Statistica e probabilità nei modelli predittivi</li>
                                    <li>Algebra lineare e reti neurali</li>
                                    <li>Ottimizzazione matematica</li>
                                </ul>
                                
                                <h4>Inglese</h4>
                                <ul>
                                    <li>Terminologia tecnica dell'IA</li>
                                    <li>Letteratura distopica (es. "1984" di Orwell, "Brave New World" di Huxley)</li>
                                    <li>Dibattito etico in lingua inglese</li>
                                </ul>
                                
                                <h4>Italiano</h4>
                                <ul>
                                    <li>Il tema della tecnologia nella letteratura italiana del '900</li>
                                    <li>Futurismo e rapporto uomo-macchina</li>
                                    <li>Comunicazione nell'era digitale</li>
                                </ul>
                                
                                <h4>Storia</h4>
                                <ul>
                                    <li>Rivoluzioni industriali e tecnologiche</li>
                                    <li>Impatto sociale delle innovazioni</li>
                                    <li>Guerra fredda e corsa tecnologica</li>
                                </ul>
                            </div>
                            
                            <div class="exercise-answer">
                                <h3>Svolgimento</h3>
                                <textarea rows="10" placeholder="Sviluppa qui il tuo percorso multidisciplinare, evidenziando i collegamenti tra le materie..."></textarea>
                            </div>
                        </div>
                        
                        <div class="tab-content" id="pcto-sim-content">
                            <h3>Presentazione PCTO</h3>
                            <div class="info-box">
                                <p>Durante il colloquio dovrai presentare la tua esperienza di PCTO (Percorsi per le Competenze Trasversali e l'Orientamento). Ecco alcuni punti da includere:</p>
                                
                                <h4>Struttura della presentazione</h4>
                                <ol>
                                    <li>Introduzione
                                        <ul>
                                            <li>Presentazione dell'azienda/ente ospitante</li>
                                            <li>Periodo e durata dell'esperienza</li>
                                            <li>Obiettivi del percorso</li>
                                        </ul>
                                    </li>
                                    <li>Attività svolte
                                        <ul>
                                            <li>Descrizione dettagliata dei compiti e delle responsabilità</li>
                                            <li>Progetti a cui hai partecipato</li>
                                            <li>Strumenti e tecnologie utilizzate</li>
                                        </ul>
                                    </li>
                                    <li>Competenze acquisite
                                        <ul>
                                            <li>Competenze tecniche</li>
                                            <li>Competenze trasversali (soft skills)</li>
                                            <li>Collegamenti con il percorso di studi</li>
                                        </ul>
                                    </li>
                                    <li>Riflessione critica
                                        <ul>
                                            <li>Punti di forza dell'esperienza</li>
                                            <li>Difficoltà incontrate e come le hai superate</li>
                                            <li>Impatto sul tuo percorso formativo e professionale</li>
                                        </ul>
                                    </li>
                                    <li>Conclusioni
                                        <ul>
                                            <li>Valutazione complessiva dell'esperienza</li>
                                            <li>Influenza sulle tue scelte future</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                            
                            <div class="exercise-answer">
                                <h3>Svolgimento</h3>
                                <textarea rows="10" placeholder="Prepara qui una bozza della tua presentazione PCTO..."></textarea>
                            </div>
                        </div>
                        
                        <div class="tab-content" id="ed-civica-sim-content">
                            <h3>Educazione Civica</h3>
                            <div class="info-box">
                                <p>Durante il colloquio potresti essere interrogato su temi di Educazione Civica. Ecco alcuni argomenti rilevanti per l'indirizzo informatico:</p>
                                
                                <h4>Cittadinanza digitale</h4>
                                <ul>
                                    <li>Privacy e protezione dei dati personali (GDPR)</li>
                                    <li>Identità digitale e SPID</li>
                                    <li>Cyberbullismo e comportamenti online</li>
                                    <li>Digital divide e inclusione digitale</li>
                                </ul>
                                
                                <h4>Costituzione e istituzioni</h4>
                                <ul>
                                    <li>Principi fondamentali della Costituzione italiana</li>
                                    <li>Unione Europea e istituzioni internazionali</li>
                                    <li>Diritti e doveri dei cittadini</li>
                                    <li>Legalità e contrasto alla criminalità informatica</li>
                                </ul>
                                
                                <h4>Sviluppo sostenibile</h4>
                                <ul>
                                    <li>Agenda 2030 e obiettivi di sviluppo sostenibile</li>
                                    <li>Green IT e sostenibilità digitale</li>
                                    <li>Economia circolare e riciclo dei dispositivi elettronici</li>
                                    <li>Smart cities e mobilità sostenibile</li>
                                </ul>
                                
                                <h4>Etica dell'informatica</h4>
                                <ul>
                                    <li>Proprietà intellettuale e copyright</li>
                                    <li>Open source e condivisione della conoscenza</li>
                                    <li>Etica dell'intelligenza artificiale</li>
                                    <li>Digital labor e diritti dei lavoratori digitali</li>
                                </ul>
                            </div>
                            
                            <div class="exercise-answer">
                                <h3>Svolgimento</h3>
                                <textarea rows="10" placeholder="Sviluppa qui una riflessione su uno dei temi di Educazione Civica proposti..."></textarea>
                            </div>
                        </div>
                        
                        <div class="tab-content" id="consigli-sim-content">
                            <h3>Consigli per il colloquio</h3>
                            <div class="info-box">
                                <h4>Preparazione</h4>
                                <ul>
                                    <li>Rivedi gli argomenti principali di tutte le materie</li>
                                    <li>Prepara collegamenti interdisciplinari</li>
                                    <li>Esercitati a parlare ad alta voce</li>
                                    <li>Prepara una presentazione efficace del PCTO</li>
                                    <li>Informati su temi di attualità rilevanti</li>
                                </ul>
                                
                                <h4>Durante il colloquio</h4>
                                <ul>
                                    <li>Mantieni un atteggiamento positivo e professionale</li>
                                    <li>Parla con un tono di voce chiaro e un ritmo adeguato</li>
                                    <li>Usa un linguaggio appropriato e specifico della disciplina</li>
                                    <li>Mostra interesse e passione per gli argomenti</li>
                                    <li>Sii onesto: se non conosci qualcosa, ammettilo</li>
                                    <li>Ascolta attentamente le domande prima di rispondere</li>
                                </ul>
                                
                                <h4>Gestione dell'ansia</h4>
                                <ul>
                                    <li>Pratica tecniche di respirazione</li>
                                    <li>Visualizza il colloquio in modo positivo</li>
                                    <li>Dormi a sufficienza la notte prima</li>
                                    <li>Arriva con anticipo per ambientarti</li>
                                    <li>Ricorda che la commissione vuole aiutarti a mostrare le tue competenze</li>
                                </ul>
                                
                                <h4>Abbigliamento e comportamento</h4>
                                <ul>
                                    <li>Indossa un abbigliamento formale ma comodo</li>
                                    <li>Mantieni una postura eretta ma rilassata</li>
                                    <li>Guarda negli occhi i commissari quando parli</li>
                                    <li>Evita gesti nervosi o ripetitivi</li>
                                    <li>Spegni il cellulare prima di entrare</li>
                                </ul>
                            </div>
                            
                            <div class="exercise-answer">
                                <h3>Autovalutazione</h3>
                                <textarea rows="10" placeholder="Rifletti sui tuoi punti di forza e di debolezza in vista del colloquio..."></textarea>
                            </div>
                        </div>
                    </div>
                `;
                break;
                
            default:
                simulazioneHTML = `
                    <h2>Simulazione</h2>
                    <p>Simulazione non disponibile. Riprova più tardi.</p>
                `;
        }
        
        document.getElementById('simulazione-content').innerHTML = simulazioneHTML;
        
        // Aggiungi event listener per i tab nelle simulazioni
        const tabButtons = document.querySelectorAll('#simulazione-content .tab-btn');
        if (tabButtons.length > 0) {
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const tab = this.getAttribute('data-tab');
                    
                    // Attiva tab
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Mostra contenuto tab
                    const tabContents = document.querySelectorAll('#simulazione-content .tab-content');
                    tabContents.forEach(content => {
                        content.classList.remove('active');
                        if (content.id === `${tab}-content`) {
                            content.classList.add('active');
                        }
                    });
                });
            });
        }
        
        // Aggiungi event listener per i bottoni di submit
        const submitButtons = document.querySelectorAll('#simulazione-content .submit-btn');
        submitButtons.forEach(button => {
            button.addEventListener('click', function() {
                alert('Svolgimento inviato con successo! Riceverai un feedback a breve.');
            });
        });
    }
    
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