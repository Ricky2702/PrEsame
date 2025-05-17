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
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });
   
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
   
    // Gestione download risorse
    const downloadButtons = document.querySelectorAll('.download-btn');
   
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Download avviato! (Simulazione)');
        });
    });
   
    // Gestione visualizzazione video
    const viewButtons = document.querySelectorAll('.view-btn');
   
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Apertura risorsa! (Simulazione)');
        });
    });
   
    // Gestione iscrizione forum
    const joinButtons = document.querySelectorAll('.join-btn');
   
    joinButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Benvenuto nel forum di discussione! (Simulazione)');
        });
    });
   
    // Gestione bottoni pratica
    const practiceButtons = document.querySelectorAll('.practice-btn');
   
    practiceButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Avvio esercitazione! (Simulazione)');
        });
    });
   
    // Gestione bottoni simulazione
    const simulazioneButtons = document.querySelectorAll('.simulazione-btn');
   
    simulazioneButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Avvio simulazione! (Simulazione)');
        });
    });
   
    // Gestione iscrizione newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
   
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
           
            if (emailInput.value.trim() === '') {
                alert('Inserisci un indirizzo email valido.');
                return;
            }
           
            alert(`Grazie per l'iscrizione alla newsletter! (Simulazione)`);
            emailInput.value = '';
        });
    }
   
    // Countdown per l'esame di stato (esempio: 19 giugno 2025)
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
   
    // Gestione piano di studio
    const planButton = document.querySelector('.plan-btn');
   
    if (planButton) {
        planButton.addEventListener('click', function() {
            alert('Creazione piano di studio personalizzato! (Simulazione)');
        });
    }
   
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
});
