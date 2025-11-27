// Fonction pour le défilement fluide
document.querySelectorAll('.smooth-scroll').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
});

// Fonction de changement de langue
const translations = {
    nl: {
        menu_about: "Overzicht",
        menu_services: "Diensten",
        menu_gallery: "Galeri",
        menu_pricing: "Prijzen",
        menu_contact: "Contact",
        reserve_btn: "Reserveren",
        hero_title: "Jouw onvergetelijk evenement begint hier",
        hero_btn: "Nu reserveren",
        about_title: "Over Vertigo",
        contact_title: "Neem contact op",
        send_btn: "Verstuur",
        // autres traductions
        all_rights: "Alle rechten voorbehouden"
    },
    fr: {
        menu_about: "À propos",
        menu_services: "Services",
        menu_gallery: "Galerie",
        menu_pricing: "Tarifs",
        menu_contact: "Contact",
        reserve_btn: "Réserver",
        hero_title: "Votre événement inoubliable commence ici",
        hero_btn: "Réservez maintenant",
        about_title: "À propos de Vertigo",
        contact_title: "Contactez-Nous",
        send_btn: "Envoyer",
        all_rights: "Tous droits réservés"
    },
    en: {
        menu_about: "About",
        menu_services: "Services",
        menu_gallery: "Gallery",
        menu_pricing: "Pricing",
        menu_contact: "Contact",
        reserve_btn: "Book Now",
        hero_title: "Your unforgettable event starts here",
        hero_btn: "Book Now",
        about_title: "About Vertigo",
        contact_title: "Contact Us",
        send_btn: "Send",
        all_rights: "All rights reserved"
    }
};

let currentLang = 'nl';

function translatePage() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if(translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
}

// Event listeners de changement de langue
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentLang = btn.getAttribute('data-lang');
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        translatePage();
    });
});

// Scroll vers contact
function scrollToContact() {
    document.querySelector('#contact').scrollIntoView({behavior: 'smooth'});
}

// Formulaire de contact - gestion
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Votre message a été envoyé!'); // ici tu peux faire une requête AJAX pour envoyer
});
