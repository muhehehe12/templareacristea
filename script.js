document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Elegant Loading Screen Timeout ---
    const loadingScreen = document.getElementById("loading-screen");
    setTimeout(() => {
        loadingScreen.style.opacity = "0";
        setTimeout(() => {
            loadingScreen.style.visibility = "hidden";
        }, 600);
    }, 1000);

    // --- 2. Hamburger Menu Interaction ---
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        const spans = hamburger.querySelectorAll("span");
        if (navLinks.classList.contains("active")) {
            spans[0].style.transform = "rotate(45deg) translate(5px, 6px)";
            spans[1].style.opacity = "0";
            spans[2].style.transform = "rotate(-45deg) translate(5px, -6px)";
        } else {
            spans.forEach(s => s.style.transform = "none");
            spans[1].style.opacity = "1";
        }
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.querySelectorAll("span").forEach(s => s.style.transform = "none");
            hamburger.querySelectorAll("span")[1].style.opacity = "1";
        });
    });

    // --- 3. Scroll Reveal Optimization (Intersection Observer) ---
    const reveals = document.querySelectorAll(".reveal");
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    reveals.forEach(reveal => revealObserver.observe(reveal));

    // --- 4. Language Translation System (RO / EN) ---
    const dictionary = {
        ro: {
            "loading": "Se încarcă...",
            "nav-home": "Acasă",
            "nav-about": "Despre",
            "nav-services": "Servicii",
            "nav-contact": "Contact",
            "hero-badge": "București • Ilfov • Giurgiu",
            "hero-title": "Tâmplărie PVC și Sisteme de Închidere la Comandă",
            "hero-subtitle": "De la plase de insecte și reparații rapide, la tâmplărie PVC premium, glisante din aluminiu și închideri terase cu folie cristal.",
            "hero-cta": "Cere o Ofertă: 076 439 2883",
            "about-title": "Eficiență, Calitate și Confort",
            "about-desc-1": "Oferim servicii complete pentru ferestrele și ușile casei tale. Lucrăm rapid, serios și folosim doar materiale care garantează o izolație termică și fonică excelentă.",
            "about-desc-2": "Fie că ai nevoie de o simplă reglare a feroneriei, de plase împotriva insectelor sau de un proiect complex de tâmplărie PVC, intervenim prompt cu soluții durabile și prețuri corecte.",
            "services-title": "Servicii și Produse",
            "srv-1-title": "Plase Țânțari",
            "srv-1-desc": "Execuție și montaj plase insecte: pe balama, tip rulou sau plisse. Protecție eficientă și un design discret pentru orice tip de fereastră.",
            "srv-2-title": "Tâmplărie PVC",
            "srv-2-desc": "Execuție tâmplărie PVC la comandă. Uși și ferestre perfect adaptate spațiului tău, pentru izolație și securitate superioară.",
            "srv-3-title": "Reglaje și Reparații",
            "srv-3-desc": "Mentenanță completă: reglaje fine, înlocuire balamale, mânere defecte și remedierea problemelor de închidere neetanșă.",
            "srv-4-title": "Glisante Aluminiu",
            "srv-4-desc": "Sisteme glisante din aluminiu, ideale pentru deschideri mari, balcoane și spații comerciale, oferind un design minimalist și modern.",
            "srv-5-title": "Închideri Terase",
            "srv-5-desc": "Închideri terase și foișoare cu folie transparentă cristal de 0.8 mm. Protecție împotriva intemperiilor pe tot parcursul anului.",
            "srv-6-title": "Garanție & Siguranță",
            "srv-6-desc": "Toate lucrările noastre beneficiază de garanție extinsă. Oferim transparență totală, execuție rapidă și prețuri corecte.",
            "contact-title": "Programează o Intervenție",
            "contact-desc": "Suntem la un apel distanță. Contactează-ne pentru măsurători, asistență tehnică sau reparații urgente.",
            "contact-name": "Cristea",
            "contact-role": "Specialist Tâmplărie PVC & Aluminiu",
            "contact-availability": "Acoperire rapidă în București, Ilfov și Giurgiu.",
            "footer-rights": "Toate drepturile rezervate."
        },
        en: {
            "loading": "Loading...",
            "nav-home": "Home",
            "nav-about": "About",
            "nav-services": "Services",
            "nav-contact": "Contact",
            "hero-badge": "Bucharest • Ilfov • Giurgiu",
            "hero-title": "Custom PVC Carpentry & Enclosure Systems",
            "hero-subtitle": "From insect screens and quick repairs to premium PVC windows, aluminum sliders, and crystal foil terrace enclosures.",
            "hero-cta": "Request a Quote: 076 439 2883",
            "about-title": "Efficiency, Quality, and Comfort",
            "about-desc-1": "We offer complete services for your home's windows and doors. We work quickly, professionally, and use only materials that guarantee excellent thermal and acoustic insulation.",
            "about-desc-2": "Whether you need a simple hardware adjustment, mosquito nets, or a complex custom PVC project, we intervene promptly with durable solutions and fair prices.",
            "services-title": "Services & Products",
            "srv-1-title": "Mosquito Nets",
            "srv-1-desc": "Custom insect screens: hinged, roller, or plisse. Efficient protection and a discreet design suitable for any window type.",
            "srv-2-title": "PVC Carpentry",
            "srv-2-desc": "Custom PVC manufacturing. Doors and windows perfectly adapted to your space, offering superior insulation and security.",
            "srv-3-title": "Adjustments & Repairs",
            "srv-3-desc": "Complete maintenance: fine-tuning, replacing hinges, defective handles, and fixing unsealed closing mechanisms.",
            "srv-4-title": "Aluminum Sliders",
            "srv-4-desc": "Aluminum sliding systems, ideal for large openings, balconies, and commercial spaces, providing a minimalist and modern design.",
            "srv-5-title": "Terrace Enclosures",
            "srv-5-desc": "Terrace and gazebo enclosures using 0.8 mm crystal transparent foil. Year-round weather protection.",
            "srv-6-title": "Warranty & Safety",
            "srv-6-desc": "All our works come with an extended warranty. We offer complete transparency, fast execution, and honest pricing.",
            "contact-title": "Schedule an Intervention",
            "contact-desc": "We are just a phone call away. Contact us for measurements, technical assistance, or urgent window repairs.",
            "contact-name": "Cristea",
            "contact-role": "PVC & Aluminum Specialist",
            "contact-availability": "Rapid coverage across Bucharest, Ilfov, and Giurgiu.",
            "footer-rights": "All rights reserved."
        }
    };

    const btnEn = document.getElementById("lang-en");
    const btnRo = document.getElementById("lang-ro");
    const translatableElements = document.querySelectorAll("[data-i18n]");

    const switchLanguage = (lang) => {
        translatableElements.forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (dictionary[lang][key]) {
                el.innerText = dictionary[lang][key];
            }
        });

        if (lang === 'en') {
            btnEn.classList.add("active");
            btnRo.classList.remove("active");
            document.documentElement.lang = "en";
        } else {
            btnRo.classList.add("active");
            btnEn.classList.remove("active");
            document.documentElement.lang = "ro";
        }
    };

    btnEn.addEventListener("click", () => switchLanguage('en'));
    btnRo.addEventListener("click", () => switchLanguage('ro'));
});
