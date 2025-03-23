// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('active');
    }
});

// Wave Panels
const tabLinks = document.querySelectorAll('.tab-link');
const waveContents = document.querySelectorAll('.wave-content');

// Masquer toutes les sections sauf celle active au chargement
waveContents.forEach(content => {
    if (!content.classList.contains('active')) {
        content.style.display = 'none';
    } else {
        content.style.display = 'flex';
    }
});

tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Retirer la classe active de tous les onglets et sections
        tabLinks.forEach(l => l.classList.remove('active'));
        waveContents.forEach(content => {
            content.classList.remove('active');
            content.style.display = 'none';
        });

        // Ajouter la classe active à l'onglet cliqué et afficher la section correspondante
        link.classList.add('active');
        const tabId = link.getAttribute('data-tab');
        const activeContent = document.getElementById(tabId);
        activeContent.classList.add('active');
        activeContent.style.display = 'flex';
    });
});

