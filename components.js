/* jshint esversion: 6 */

(function() {
    // 1. WYKRYWANIE JĘZYKA I STRONY
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";
    
    const isEn = page.toLowerCase().indexOf('_en.html') !== -1;
    const lang = isEn ? 'en' : 'pl';

    const plTarget = isEn ? page.replace('_en.html', '.html') : page;
    const enTarget = isEn ? page : page.replace('.html', '_en.html');

    document.addEventListener('DOMContentLoaded', function() {
        
        // 2. GENEROWANIE NAGŁÓWKA
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = `
                <div class="top-sensor"></div>
                <div class="top-bar">
                    <div class="top-bar-container">
                        <div class="language-switcher">
                            <a href="${plTarget}" class="lang-link ${lang === 'pl' ? 'active' : ''}" title="Polski">
                                <img src="icons/pl.png" alt="PL">
                            </a>
                            <a href="${enTarget}" class="lang-link ${lang === 'en' ? 'active' : ''}" title="English">
                                <img src="icons/en.png" alt="EN">
                            </a>
                        </div>
                        <div class="top-socials">
                            <span class="social-label">Social media:</span>
                            <a href="https://www.facebook.com/p/Thee-Gym-61553137637057/" target="_blank" class="social-wrapper">
                                <img src="icons/fb.png" class="static" alt="FB"><img src="icons/fb-anim.gif" class="active-gif" alt="FB">
                            </a>
                            <a href="https://www.instagram.com/theegymlublin/" target="_blank" class="social-wrapper">
                                <img src="icons/ig.png" class="static" alt="IG"><img src="icons/ig-anim.gif" class="active-gif" alt="IG">
                            </a>
                            <a href="https://wa.me/48510722240" target="_blank" class="social-wrapper">
                                <img src="icons/wa.png" class="static" alt="WA"><img src="icons/wa-anim.gif" class="active-gif" alt="WA">
                            </a>
                        </div>
                    </div>
                </div>
                <header>
                    <a href="${lang === 'en' ? 'index_en.html' : 'index.html'}" class="logo-link">
                        <img src="icons/theegym-logo.jpeg" alt="THEE GYM LUBLIN" class="main-logo">
                    </a>
                    <div class="menu-toggle" id="mobile-toggle">
                        <span class="bar"></span><span class="bar"></span><span class="bar"></span>
                    </div>
                    <nav id="nav-menu">
                        <ul>
                          <li><a href="${lang === 'en' ? 'index_en.html' : 'index.html'}"><img src="icons/home.png" class="nav-icon" alt=""> ${lang === 'en' ? 'Home' : 'Strona główna'}</a></li>
                          <li><a href="${lang === 'en' ? 'about_en.html' : 'about.html'}"><img src="icons/about.png" class="nav-icon" alt=""> ${lang === 'en' ? 'About us' : 'O nas'}</a></li>
                          <li><a href="${lang === 'en' ? 'offer_en.html' : 'offer.html'}"><img src="icons/offer.png" class="nav-icon" alt=""> ${lang === 'en' ? 'Offer' : 'Oferta'}</a></li>
                          <li><a href="${lang === 'en' ? 'pricing_en.html' : 'pricing.html'}"><img src="icons/price.png" class="nav-icon" alt=""> ${lang === 'en' ? 'Pricing' : 'Cennik'}</a></li>
                          <li><a href="${lang === 'en' ? 'schedule_en.html' : 'schedule.html'}"><img src="icons/calendar.png" class="nav-icon" alt=""> ${lang === 'en' ? 'Schedule' : 'Grafik'}</a></li>
                          <li><a href="${lang === 'en' ? 'gallery_en.html' : 'gallery.html'}"><img src="icons/gallery.png" class="nav-icon" alt=""> ${lang === 'en' ? 'Gallery' : 'Galeria'}</a></li>
                          <li><a href="${lang === 'en' ? 'contact_en.html' : 'contact.html'}"><img src="icons/contact.png" class="nav-icon" alt=""> ${lang === 'en' ? 'Contact' : 'Kontakt'}</a></li>
                        </ul>
                    </nav>
                </header>`;
        }

        // 3. GENEROWANIE STOPKI
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = `
                <footer class="main-footer">
                    <div class="footer-container">
                        <div class="footer-column">
                            <h3>${lang === 'en' ? 'Contact us' : 'Skontaktuj się z nami'}</h3>
                            <div class="footer-line"></div>
                            <ul class="footer-info">
                                <li><img src="icons/loc.png" alt=""> ul. Legionowa 5, 20-053 Lublin</li>
                                <li><img src="icons/phone.png" alt=""> +48 510 722 240</li>
                                <li><img src="icons/mail.png" alt=""> theegymlublin@gmail.com</li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h3>${lang === 'en' ? 'Opening Hours' : 'Godziny Pracy'}</h3>
                            <div class="footer-line"></div>
                            <ul class="footer-hours">
                                <li>${lang === 'en' ? 'Monday - Saturday' : 'Poniedziałek - Sobota'}: 7:00 – 22:00</li>
                                <li>${lang === 'en' ? 'Sunday' : 'Niedziela'}: ${lang === 'en' ? 'Closed' : 'Nieczynne'}</li>
                                <li></li>

                            </ul>
                        </div>
                        <div class="footer-column">
                            <h3>${lang === 'en' ? 'Important info' : 'Ważne informacje'}</h3>
                            <div class="footer-line"></div>
                            <ul class="footer-links">
                                <li><a href="${lang === 'en' ? 'regulamin_en.html' : 'regulamin.html'}">${lang === 'en' ? 'Terms & Conditions' : 'Regulamin Serwisu'}</a></li>
                                <li><a href="${lang === 'en' ? 'polityka-prywatnosci_en.html' : 'polityka-prywatnosci.html'}">${lang === 'en' ? 'Privacy Policy' : 'Polityka Prywatności'}</a></li>
                                <li><a href="${lang === 'en' ? 'cookies_en.html' : 'cookies.html'}">${lang === 'en' ? 'Cookie Policy' : 'Polityka Plików Cookie'}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>© 2026 THEE GYM LUBLIN | ${lang === 'en' ? 'Authors' : 'Autorzy'}: Maja Darczuk, Jan Walkiewicz</p>
                    </div>
                </footer>`;
        }

        // 4. INICJALIZACJA FUNKCJI INTERAKTYWNYCH
        initMobileMenu();

        // Płynne przewijanie
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId === "#") return; 
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Karty ofertowe
        const offerCards = document.querySelectorAll('.offer-section .offer-card');
        offerCards.forEach(card => {
            card.addEventListener('click', function() {
                if (window.innerWidth <= 1024) { 
                    const isActive = this.classList.contains('active');
                    offerCards.forEach(c => c.classList.remove('active'));
                    if (!isActive) this.classList.add('active');
                }
            });
        });
    });

    // 5. FUNKCJA MENU MOBILNEGO
    function initMobileMenu() {
        const btn = document.getElementById('mobile-toggle');
        const menu = document.getElementById('nav-menu');
        if (btn && menu) {
            btn.onclick = function() {
                btn.classList.toggle('active');
                menu.classList.toggle('active');
                document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : 'auto';
            };
            menu.querySelectorAll('a').forEach(link => {
                link.onclick = () => {
                    btn.classList.remove('active');
                    menu.classList.remove('active');
                    document.body.style.overflow = 'auto';
                };
            });
        }
    }

    // 6. OBSŁUGA PŁYWAJĄCEGO MENU
    window.addEventListener('scroll', function() {
        const mainSubNav = document.querySelector('.sticky-sub-nav:not(.floating)');
        const floatingNav = document.querySelector('.sticky-sub-nav.floating');
        if (mainSubNav && floatingNav) {
            const navPosition = mainSubNav.getBoundingClientRect().bottom;
            if (navPosition < 0) {
                floatingNav.classList.add('visible');
            } else {
                floatingNav.classList.remove('visible');
            }
        }
    });

})();