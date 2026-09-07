/* ==========================================
   FLAKE BURGERS - JAVASCRIPT LOGIC
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        nl: {
            'nav.gallery': 'Sfeer',
            'nav.location': 'Vind ons',
            'nav.order': 'Bestellen via Deliveroo',
            'hero.menu': 'Bekijk Menu',
            'gallery.title': 'Sfeer & Flavour',
            'gallery.hint': 'Scroll van links naar rechts',
            'videos.subtitle': 'Deals, sfeer en smashburgers in beweging.',
            'menu.title': 'Volledige Menukaart',
            'menu.subtitle': 'Smashburgers, sides, huisgemaakte sauzen en frisse drinks.',
            'menu.previously': 'Voorheen The Special',
            'menu.sauceIncluded': 'Saus inbegrepen',
            'favorites.title': 'Onze Favorieten',
            'favorites.subtitle': 'Een selectie van onze populairste burgers en drinks.',
            'favorites.flakeDescription': 'Onze special met onion jam, extra cheese & speciaal huisrecept.',
            'favorites.fromPrice': 'Vanaf € 4,00',
            'favorites.drinksDescription': 'Verse huisgemaakte Pink Lemonade & ambachtelijke Caramel Sundaes.',
            'favorites.cta': 'Bekijk de volledige menukaart',
            'contact.title': 'Neem Contact Op',
            'contact.intro': 'Een vraag, samenwerking of aanvraag voor onze foodtruck? Stuur ons een bericht.',
            'contact.name': 'Naam',
            'contact.email': 'E-mailadres',
            'contact.subject': 'Onderwerp',
            'contact.message': 'Bericht',
            'contact.submit': 'Verstuur bericht',
            'contact.note': 'Bij verzenden opent je standaard e-mailprogramma.',
            'footer.terms': 'Gebruiksvoorwaarden',
            'footer.privacy': 'Privacybeleid',
            'footer.cookies': 'Cookiebeleid',
            'cookies.title': 'Cookie-voorkeuren',
            'cookies.description': 'Wij gebruiken cookies om onze website goed te laten functioneren en je de beste ervaring te bieden. Kies hieronder je voorkeuren.',
            'cookies.settings': 'Cookie-instellingen',
            'cookies.reject': 'Niet-noodzakelijke afwijzen',
            'cookies.accept': 'Alle cookies accepteren',
            'cookies.necessary': 'Noodzakelijke cookies',
            'cookies.necessaryDescription': 'Nodig voor basisfuncties en beveiliging van de site.',
            'cookies.functional': 'Functionele cookies',
            'cookies.functionalDescription': 'Onthouden voorkeuren en de kaartweergave.',
            'cookies.analytics': 'Analytische cookies',
            'cookies.analyticsDescription': 'Helpen ons de prestaties van de site te meten.',
            'cookies.save': 'Voorkeuren opslaan',
            'events.description': 'Organiseer je een event, feest of festival? Stuur ons direct een berichtje op Instagram voor catering op locatie.',
            'events.cta': 'DM voor Foodtruck & Events',
            'location.title': 'Vind Ons in Kortrijk',
            'location.addressLabel': 'Adres',
            'location.hoursLabel': 'Openingsuren',
            'location.hours': 'Maandag t/m Zondag: 12:00 – 22:00',
            'location.mapHint': 'Voeg je Mapbox Token toe in script.js voor de live kaart.'
        },
        en: {
            'nav.gallery': 'Atmosphere',
            'nav.location': 'Find us',
            'nav.order': 'Order via Deliveroo',
            'hero.menu': 'View Menu',
            'gallery.title': 'Atmosphere & Flavour',
            'gallery.hint': 'Scroll from left to right',
            'videos.subtitle': 'Deals, atmosphere and smashburgers in motion.',
            'menu.title': 'Full Menu',
            'menu.subtitle': 'Smashburgers, sides, homemade sauces and refreshing drinks.',
            'menu.previously': 'Previously The Special',
            'menu.sauceIncluded': 'Sauce Included',
            'favorites.title': 'Our Favorites',
            'favorites.subtitle': 'A selection of our most popular burgers and drinks.',
            'favorites.flakeDescription': 'Our signature burger with onion jam, extra cheese & our special house recipe.',
            'favorites.fromPrice': 'From € 4.00',
            'favorites.drinksDescription': 'Fresh homemade Pink Lemonade & artisanal Caramel Sundaes.',
            'favorites.cta': 'View the full menu',
            'contact.title': 'Contact Us',
            'contact.intro': 'Have a question, collaboration idea or foodtruck request? Send us a message.',
            'contact.name': 'Name',
            'contact.email': 'Email address',
            'contact.subject': 'Subject',
            'contact.message': 'Message',
            'contact.submit': 'Send message',
            'contact.note': 'Submitting the form opens your default email application.',
            'footer.terms': 'Terms of Use',
            'footer.privacy': 'Privacy Policy',
            'footer.cookies': 'Cookie Policy',
            'cookies.title': 'Cookie preferences',
            'cookies.description': 'We use cookies to keep our website working properly and provide the best experience. Choose your preferences below.',
            'cookies.settings': 'Cookie settings',
            'cookies.reject': 'Reject non-essential cookies',
            'cookies.accept': 'Accept all cookies',
            'cookies.necessary': 'Essential cookies',
            'cookies.necessaryDescription': 'Required for core functionality and website security.',
            'cookies.functional': 'Functional cookies',
            'cookies.functionalDescription': 'Remember preferences and enable the map display.',
            'cookies.analytics': 'Analytics cookies',
            'cookies.analyticsDescription': 'Help us measure website performance.',
            'cookies.save': 'Save preferences',
            'events.description': 'Organizing an event, party or festival? Send us a message on Instagram for on-site catering.',
            'events.cta': 'DM us for Foodtruck & Events',
            'location.title': 'Find Us in Kortrijk',
            'location.addressLabel': 'Address',
            'location.hoursLabel': 'Opening Hours',
            'location.hours': 'Monday through Sunday: 12:00 – 22:00',
            'location.mapHint': 'Add your Mapbox token in script.js to enable the live map.'
        }
    };

    let currentLanguage = 'nl';
    try {
        currentLanguage = localStorage.getItem('flake-language') === 'en' ? 'en' : 'nl';
    } catch (error) {
        currentLanguage = 'nl';
    }

    const languageButtons = document.querySelectorAll('[data-language-toggle]');

    const updateOpenStatus = () => {
        const timeParts = new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Europe/Brussels',
            hour: '2-digit',
            minute: '2-digit',
            hourCycle: 'h23'
        }).formatToParts(new Date());
        const hour = Number(timeParts.find((part) => part.type === 'hour')?.value || 0);
        const minute = Number(timeParts.find((part) => part.type === 'minute')?.value || 0);
        const minutesSinceMidnight = (hour * 60) + minute;
        const isOpen = minutesSinceMidnight >= 12 * 60 && minutesSinceMidnight < 22 * 60;
        const statusText = currentLanguage === 'en'
            ? (isOpen ? 'Open now until 22:00' : 'Closed — Opens at 12:00')
            : (isOpen ? 'Nu open tot 22:00' : 'Gesloten — Open om 12:00');

        document.querySelectorAll('[data-open-status]').forEach((element) => {
            element.textContent = statusText;
        });
        document.querySelectorAll('[data-open-dot]').forEach((dot) => {
            dot.classList.toggle('bg-green-500', isOpen);
            dot.classList.toggle('bg-red-500', !isOpen);
            dot.classList.remove('bg-zinc-400');
        });
    };

    const setLanguage = (language) => {
        currentLanguage = language;
        document.documentElement.lang = language;

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.dataset.i18n;
            if (translations[language][key]) element.textContent = translations[language][key];
        });

        languageButtons.forEach((button) => {
            const isEnglish = language === 'en';
            button.textContent = isEnglish ? 'EN' : 'NL';
            button.setAttribute('aria-pressed', String(isEnglish));
            button.setAttribute('aria-label', isEnglish ? 'Overschakelen naar Nederlands' : 'Switch to English');
        });

        const menuIsOpen = document.getElementById('menu-btn')?.getAttribute('aria-expanded') === 'true';
        const menuButton = document.getElementById('menu-btn');
        if (menuButton) {
            menuButton.setAttribute('aria-label', language === 'en'
                ? (menuIsOpen ? 'Close navigation menu' : 'Open navigation menu')
                : (menuIsOpen ? 'Navigatiemenu sluiten' : 'Navigatiemenu openen'));
        }

        const logo = document.querySelector('nav a[href="#top"], nav a[href="index.html"]');
        if (logo) logo.setAttribute('aria-label', language === 'en' ? 'Back to top' : 'Terug naar boven');

        const backToTop = document.getElementById('back-to-top');
        if (backToTop) backToTop.setAttribute('aria-label', language === 'en' ? 'Back to top' : 'Terug naar boven');

        document.querySelectorAll('a[href*="instagram.com/flakeburgers"]:not([href="#events"])').forEach((link) => {
            if (link.querySelector('.fa-instagram') && !link.textContent.trim().startsWith('DM')) {
                link.setAttribute('aria-label', language === 'en' ? 'Flake Burgers on Instagram' : 'Flake Burgers op Instagram');
            }
        });

        document.querySelectorAll('a[href*="tiktok.com/@flakeburgers"]').forEach((link) => {
            link.setAttribute('aria-label', language === 'en' ? 'Flake Burgers on TikTok' : 'Flake Burgers op TikTok');
        });

        try {
            localStorage.setItem('flake-language', language);
        } catch (error) {
            // De taalwisselaar blijft werken als opslag niet beschikbaar is.
        }

        updateOpenStatus();
    };

    languageButtons.forEach((button) => {
        button.addEventListener('click', () => setLanguage(currentLanguage === 'nl' ? 'en' : 'nl'));
    });

    setLanguage(currentLanguage);
    window.setInterval(updateOpenStatus, 60000);

    const backToTop = document.getElementById('back-to-top');
    const pageFooter = document.querySelector('footer');
    const updateBackToTopVisibility = () => {
        if (!backToTop) return;
        const isVisible = window.scrollY > 400;
        const defaultBottomOffset = 40;
        const footerClearance = 24;
        const visibleFooterHeight = pageFooter
            ? Math.max(0, window.innerHeight - pageFooter.getBoundingClientRect().top)
            : 0;
        const bottomOffset = Math.max(defaultBottomOffset, visibleFooterHeight + footerClearance);
        backToTop.style.bottom = `${bottomOffset}px`;
        backToTop.classList.toggle('opacity-0', !isVisible);
        backToTop.classList.toggle('translate-y-3', !isVisible);
        backToTop.classList.toggle('pointer-events-none', !isVisible);
        backToTop.classList.toggle('opacity-100', isVisible);
        backToTop.classList.toggle('translate-y-0', isVisible);
    };
    updateBackToTopVisibility();
    window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
    window.addEventListener('resize', updateBackToTopVisibility);

    // Respecteer de voorkeur om beweging te verminderen bij galerijvideo's.
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateGalleryVideoMotion = () => {
        document.querySelectorAll('[data-gallery-video]').forEach((video) => {
            if (reducedMotion.matches) {
                video.removeAttribute('autoplay');
                video.pause();
            }
        });
    };
    updateGalleryVideoMotion();
    reducedMotion.addEventListener?.('change', updateGalleryVideoMotion);
    
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.toggle('hidden');
            menuBtn.setAttribute('aria-expanded', String(isOpen));
            menuBtn.setAttribute('aria-label', isOpen
                ? (currentLanguage === 'en' ? 'Close navigation menu' : 'Navigatiemenu sluiten')
                : (currentLanguage === 'en' ? 'Open navigation menu' : 'Navigatiemenu openen'));

            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars', !isOpen);
                icon.classList.toggle('fa-xmark', isOpen);
            }
        });

        mobileMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.setAttribute('aria-label', currentLanguage === 'en' ? 'Open navigation menu' : 'Navigatiemenu openen');
                const icon = menuBtn.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            });
        });
    }

    // 2. Jaar in footer
    const currentYear = document.getElementById('current-year');
    if (currentYear) currentYear.textContent = String(new Date().getFullYear());

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const name = String(formData.get('name') || '');
            const email = String(formData.get('email') || '');
            const subject = String(formData.get('subject') || '');
            const message = String(formData.get('message') || '');
            const senderLabel = currentLanguage === 'en' ? 'Sender' : 'Afzender';
            const nameLabel = currentLanguage === 'en' ? 'Name' : 'Naam';
            const body = `${nameLabel}: ${name}\n${senderLabel}: ${email}\n\n${message}`;

            window.location.href = `mailto:info@flake.be?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }

    const cookieBanner = document.getElementById('cookie-banner');
    const cookieModal = document.getElementById('cookie-modal');
    const cookieSettingsButton = document.getElementById('cookie-settings-btn');
    const cookieRejectButton = document.getElementById('cookie-reject-btn');
    const cookieAcceptButton = document.getElementById('cookie-accept-btn');
    const closeModalButton = document.getElementById('close-modal-btn');
    const saveCookieSettingsButton = document.getElementById('save-cookie-settings');
    const functionalCookies = document.getElementById('cookie-func');
    const analyticsCookies = document.getElementById('cookie-analytics');

    let cookiePreferences = null;
    try {
        const savedConsent = localStorage.getItem('flake_cookie_consent');
        if (savedConsent === 'all') {
            cookiePreferences = { necessary: true, functional: true, analytics: true };
        } else if (savedConsent === 'necessary') {
            cookiePreferences = { necessary: true, functional: false, analytics: false };
        } else if (savedConsent) {
            const customConsent = JSON.parse(savedConsent);
            cookiePreferences = {
                necessary: true,
                functional: Boolean(customConsent.func),
                analytics: Boolean(customConsent.analytics)
            };
        }
    } catch (error) {
        cookiePreferences = null;
    }

    const closeCookieModal = () => {
        if (!cookieModal) return;
        cookieModal.classList.add('hidden');
        cookieModal.classList.remove('flex');
    };

    const openCookieModal = () => {
        if (!cookieModal) return;
        if (functionalCookies) functionalCookies.checked = Boolean(cookiePreferences?.functional);
        if (analyticsCookies) analyticsCookies.checked = Boolean(cookiePreferences?.analytics);
        cookieModal.classList.remove('hidden');
        cookieModal.classList.add('flex');
        closeModalButton?.focus();
    };

    const saveCookiePreferences = (functional, analytics, storedValue) => {
        cookiePreferences = { necessary: true, functional, analytics };
        try {
            localStorage.setItem('flake_cookie_consent', storedValue);
        } catch (error) {
            // De keuze geldt voor deze pagina als lokale opslag niet beschikbaar is.
        }
        cookieBanner?.classList.add('hidden');
        closeCookieModal();
    };

    if (cookieBanner && !cookiePreferences) cookieBanner.classList.remove('hidden');
    cookieSettingsButton?.addEventListener('click', openCookieModal);
    cookieRejectButton?.addEventListener('click', () => saveCookiePreferences(false, false, 'necessary'));
    cookieAcceptButton?.addEventListener('click', () => saveCookiePreferences(true, true, 'all'));
    closeModalButton?.addEventListener('click', closeCookieModal);
    saveCookieSettingsButton?.addEventListener('click', () => {
        const functional = Boolean(functionalCookies?.checked);
        const analytics = Boolean(analyticsCookies?.checked);
        saveCookiePreferences(functional, analytics, JSON.stringify({ necessary: true, func: functional, analytics }));
    });

    cookieModal?.addEventListener('click', (event) => {
        if (event.target === cookieModal) closeCookieModal();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && cookieModal && !cookieModal.classList.contains('hidden')) {
            closeCookieModal();
        }
    });

    // 3. Mapbox voor Leiestraat 43, Kortrijk
    const MAPBOX_ACCESS_TOKEN = '__MAPBOX_ACCESS_TOKEN__';

    const mapContainer = document.getElementById('map');

    if (MAPBOX_ACCESS_TOKEN.startsWith('pk.') && mapContainer && typeof mapboxgl !== 'undefined') {
        const fallback = document.getElementById('map-fallback');
        if (fallback) fallback.style.display = 'none';

        mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [3.2649, 50.8280],
            zoom: 15
        });

        new mapboxgl.Marker({ color: '#38bdf8' })
            .setLngLat([3.2649, 50.8280])
            .setPopup(new mapboxgl.Popup().setHTML('<h3 style="font-weight:bold;">FLAKE BURGERS</h3><p>Leiestraat 43, Kortrijk</p>'))
            .addTo(map);
    }
});
