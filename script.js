document.addEventListener('DOMContentLoaded', () => {
    const config = window.APP_CONFIG;
    if (!config) return;

    const C = config.CONTENT;

    // ── 1. Colores CSS desde config ──────────────────────────────────────────
    const root = document.documentElement;
    Object.entries(config.COLORS).forEach(([key, value]) => {
        const cssVar = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        root.style.setProperty(cssVar, value);
    });

    // ── 2. Helper ─────────────────────────────────────────────────────────────
    function setText(id, value) {
        const el = document.getElementById(id);
        if (!el || value === undefined) return;
        el.innerHTML = value;
    }

    // ── 3. Textos desde CONTENT ───────────────────────────────────────────────

    // <title> y nav
    document.title = C.siteTitle;
    setText('site-title', C.siteTitle);
    setText('nav-logo', `${C.navLogo}<span>.</span>`);
    setText('nav-cta', C.navCta);
    setText('footer-logo', `${C.navLogo}<span>.</span>`);

    // Hero
    setText('hero-tag', C.heroTag);
    setText('hero-headline', C.heroHeadline);
    setText('hero-sub', C.heroSub);
    setText('hero-cta-text', C.heroCtaText);
    setText('hero-trust', C.heroTrust);

    // Badges (mobile + desktop)
    setText('badge-efset-title', `✦ ${C.badges.efSetTitle}`);
    setText('badge-efset-title-desktop', C.badges.efSetTitle);
    setText('badge-efset-subtitle', C.badges.efSetSubtitle);
    setText('badge-experience', C.badges.experience);
    setText('badge-experience-desktop', `${C.badges.experience}`);

    // Proof strip
    C.proofs.forEach((proof, i) => {
        setText(`proof-${i}-num`, proof.num);
        setText(`proof-${i}-label`, proof.label);
    });

    // For Whom
    setText('for-whom-label', C.forWhomLabel);
    setText('for-whom-title', C.forWhomTitle);
    C.problems.forEach((p, i) => {
        setText(`problem-${i}-num`, p.num);
        setText(`problem-${i}-title`, p.title);
        setText(`problem-${i}-desc`, p.desc);
    });

    // How It Works
    setText('how-label', C.howLabel);
    setText('how-title', C.howTitle);
    C.steps.forEach((s, i) => {
        setText(`step-${i}-num`, s.num);
        setText(`step-${i}-title`, s.title);
        setText(`step-${i}-desc`, s.desc);
    });

    // Testimonials — label/title
    setText('testimonials-label', C.testimonialsLabel);
    setText('testimonials-title', C.testimonialsTitle);

    // Testimonials — generar cards dinámicamente
    const track = document.getElementById('testimonials-track');
    if (track) {
        track.innerHTML = C.testimonialsList.map(t => `
            <div class="testimonial">
                <p class="testimonial-text">${t.text}</p>
                <div class="testimonial-footer">
                    <p class="testimonial-author">${t.author}</p>
                    <span class="testimonial-role">${t.role}</span>
                </div>
            </div>
        `).join('');
    }

    // Final CTA
    setText('cta-eyebrow', C.ctaEyebrow);
    setText('cta-headline', C.ctaHeadline);
    setText('cta-sub', C.ctaSub);
    setText('cta-btn', C.ctaBtnText);
    setText('cta-guarantee', C.ctaGuaranteePattern.replace('{precio}', config.PRECIO_POR_HORA));

    // Footer
    setText('footer-note', C.footerNote);

    // ── 4. Links de WhatsApp ──────────────────────────────────────────────────
    const encodedText = encodeURIComponent('Hola Laura, quiero reservar una clase de prueba');
    document.querySelectorAll('.wa-dynamic-link').forEach(link => {
        link.href = `https://wa.me/${config.WHATSAPP_NUMBER}?text=${encodedText}`;
    });

    // ── 5. Carrusel ───────────────────────────────────────────────────────────
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const wrapper = document.querySelector('.carousel-wrapper');

    // Las cards ya fueron inyectadas arriba; ahora tomamos la referencia fresca
    const originalCards = Array.from(track.querySelectorAll('.testimonial'));
    const originalLength = originalCards.length;
    const gap = 24;
    let cardsToShow = getCardsToShow();
    let autoPlayTimer;
    const autoPlayInterval = 4000;

    // Clonar para loop infinito
    for (let i = 0; i < cardsToShow; i++) {
        track.appendChild(originalCards[i].cloneNode(true));
    }
    for (let i = originalLength - 1; i >= originalLength - cardsToShow; i--) {
        track.insertBefore(originalCards[i].cloneNode(true), track.firstChild);
    }

    let currentIndex = cardsToShow;
    let isTransitioning = false;

    function getCardsToShow() {
        if (window.innerWidth > 1024) return 3;
        if (window.innerWidth > 768) return 2;
        return 1;
    }

    function getStepWidth() {
        const card = track.querySelector('.testimonial');
        return card.getBoundingClientRect().width + gap;
    }

    function updatePosition(animate = true) {
        track.style.transition = animate ? 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' : 'none';
        track.style.transform = `translateX(-${currentIndex * getStepWidth()}px)`;
    }

    function move(direction) {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex += direction === 'next' ? 1 : -1;
        updatePosition(true);
    }

    track.addEventListener('transitionend', () => {
        isTransitioning = false;
        if (currentIndex >= originalLength + cardsToShow) {
            currentIndex = cardsToShow;
            updatePosition(false);
        } else if (currentIndex <= 0) {
            currentIndex = originalLength;
            updatePosition(false);
        }
    });

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayTimer = setInterval(() => move('next'), autoPlayInterval);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayTimer);
    }

    nextBtn.addEventListener('click', () => { move('next'); startAutoPlay(); });
    prevBtn.addEventListener('click', () => { move('prev'); startAutoPlay(); });

    if (wrapper) {
        wrapper.addEventListener('mouseenter', stopAutoPlay);
        wrapper.addEventListener('mouseleave', startAutoPlay);
    }

    window.addEventListener('resize', () => {
        cardsToShow = getCardsToShow();
        updatePosition(false);
    });

    setTimeout(() => updatePosition(false), 50);
    startAutoPlay();

    // ── 6. Scroll reveal + contadores ────────────────────────────────────────
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 60);
        }, { passive: true });
    }

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

    function animateCounter(el, target, duration = 900) {
        if (!/^\d+$/.test(target)) return;
        const end = parseInt(target, 10);
        const startTime = performance.now();
        function step(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(end * eased);
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target, entry.target.textContent.trim());
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.proof-num').forEach(el => counterObserver.observe(el));
});