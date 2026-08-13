/**
 * SOFTMAT LANDING PAGE - OPTIMIZED JAVASCRIPT
 * Vanilla JavaScript implementation with performance optimizations
 */

(function() {
    'use strict';

    // ========================================
    // INITIALIZATION
    // ========================================
    document.addEventListener('DOMContentLoaded', function() {
        initHeader();
        initThemeToggle();
        initSmoothScroll();
        initAnimations();
        initCounters();
        initFormValidation();
        initModal();
    });

    // ========================================
    // OPTIMIZED HEADER - STICKY & SCROLL EFFECT
    // ========================================
    function initHeader() {
        const header = document.getElementById('header');
        if (!header) return;
        
        let ticking = false;
        
        function updateHeader() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            ticking = false;
        }
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }, { passive: true });
    }

    // ========================================
    // THEME TOGGLE
    // ========================================
    function initThemeToggle() {
        const toggle = document.querySelector('[data-theme-toggle]');
        if (!toggle) return;

        const savedTheme = localStorage.getItem('softmat-theme');
        setTheme(savedTheme === 'dark');

        toggle.addEventListener('click', function() {
            const useDark = !document.body.classList.contains('dark-mode');
            setTheme(useDark);
            localStorage.setItem('softmat-theme', useDark ? 'dark' : 'light');
        });

        function setTheme(useDark) {
            document.body.classList.toggle('dark-mode', useDark);
            toggle.setAttribute('aria-pressed', String(useDark));
            toggle.setAttribute('aria-label', useDark ? 'Activar modo claro' : 'Activar modo oscuro');
            const icon = toggle.querySelector('.theme-toggle__icon');
            if (icon) {
                icon.textContent = useDark ? '☀' : '☾';
            }
        }
    }

    // ========================================
    // SMOOTH SCROLL
    // ========================================
    function initSmoothScroll() {
        const scrollButtons = document.querySelectorAll('[data-scroll-to]');
        
        scrollButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('data-scroll-to');
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const header = document.getElementById('header');
                    const headerHeight = header ? header.offsetHeight + 20 : 80;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ========================================
    // OPTIMIZED ANIMATIONS - INTERSECTION OBSERVER
    // ========================================
    function initAnimations() {
        // Check if device is mobile/tablet for adjusted animations
        const isMobile = window.innerWidth <= 1024;
        
        // Performance-optimized observer options
        const observerOptions = {
            threshold: isMobile ? 0.1 : 0.15,
            rootMargin: isMobile ? '0px 0px 0px 0px' : '0px 0px -20px 0px'
        };

        // Single observer for better performance
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const baseDelay = parseInt(element.dataset.delay) || 0;
                    // Reduce delays on mobile for snappier experience
                    const adjustedDelay = isMobile ? Math.min(baseDelay * 0.5, 300) : baseDelay;
                    
                    // Use requestAnimationFrame for smoother animations
                    requestAnimationFrame(() => {
                        setTimeout(() => {
                            element.classList.add('animate-in');
                        }, adjustedDelay);
                    });
                    
                    observer.unobserve(element);
                }
            });
        }, observerOptions);

        // Animate problem cards with improved stagger and timing
        const problemCards = document.querySelectorAll('.problem-card');
        problemCards.forEach((card, index) => {
            card.classList.add('animate-prepare', 'problem-card-animate');
            // Faster stagger pattern: 0, 80, 160, 240ms for quicker appearance
            const staggerDelay = isMobile ? index * 60 : index * 80;
            card.dataset.delay = staggerDelay;
            card.style.animationDelay = `${staggerDelay}ms`;
            observer.observe(card);
        });

        // Animate metrics with responsive stagger
        const metrics = document.querySelectorAll('.metric');
        metrics.forEach((metric, index) => {
            metric.classList.add('animate-prepare');
            metric.dataset.delay = isMobile ? index * 120 : index * 200;
            observer.observe(metric);
        });

        // Animate plan cards
        const planCards = document.querySelectorAll('.plan-card');
        planCards.forEach((card, index) => {
            card.classList.add('animate-prepare');
            card.dataset.delay = isMobile ? index * 100 : index * 180;
            observer.observe(card);
        });

        // Animate section titles and subtitles
        const sections = document.querySelectorAll('.section__title, .section__subtitle');
        sections.forEach((section, index) => {
            section.classList.add('animate-prepare');
            section.dataset.delay = isMobile ? index * 50 : index * 100;
            observer.observe(section);
        });

        // Animate technology badges
        const techBadges = document.querySelectorAll('.tecnologia-badge');
        techBadges.forEach((badge, index) => {
            badge.classList.add('animate-prepare');
            badge.dataset.delay = isMobile ? index * 80 : index * 120;
            observer.observe(badge);
        });

        // Animate comparison rows with responsive stagger
        const comparisonRows = document.querySelectorAll('.comparison-table__row');
        comparisonRows.forEach((row, index) => {
            row.classList.add('animate-prepare');
            row.dataset.delay = isMobile ? index * 60 : index * 100;
            observer.observe(row);
        });

        // Animate diagnostic benefits
        const benefits = document.querySelectorAll('.diagnostico__benefit');
        benefits.forEach((benefit, index) => {
            benefit.classList.add('animate-prepare');
            benefit.dataset.delay = isMobile ? index * 100 : index * 150;
            observer.observe(benefit);
        });

        // Animate decisor sections
        const decisorSections = document.querySelectorAll('.decisor-section');
        decisorSections.forEach((section, index) => {
            section.classList.add('animate-prepare');
            section.dataset.delay = isMobile ? index * 150 : index * 200;
            observer.observe(section);
        });

        // Re-initialize on resize to adjust for orientation changes
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if ((window.innerWidth <= 1024) !== isMobile) {
                    // Reinitialize if mobile state changed
                    initAnimations();
                }
            }, 150);
        });
    }

    // ========================================
    // OPTIMIZED COUNTER ANIMATION
    // ========================================
    function initCounters() {
        const counters = document.querySelectorAll('[data-counter]');
        const isMobile = window.innerWidth <= 1024;
        
        const observerOptions = {
            threshold: isMobile ? 0.2 : 0.3,
            rootMargin: isMobile ? '0px 0px -50px 0px' : '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-counter'));
        const isMobile = window.innerWidth <= 1024;
        // Faster animation on mobile for better UX
        const duration = isMobile ? 1000 : 1500;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(target * easeOutQuart);
            
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        requestAnimationFrame(updateCounter);
    }

    // ========================================
    // FORM VALIDATION & SUBMISSION
    // ========================================
    function initFormValidation() {
        const form = document.getElementById('leadForm');
        if (!form) return;

        // Inicializar estado de selects
        initFloatingSelects();

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            clearFormErrors();
            
            const isValid = validateForm();
            
            if (isValid) {
                submitForm();
            }
        });

        const inputs = form.querySelectorAll('.floating-input__field, .floating-select__field');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });

            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
                // Actualizar estado del select
                if (this.tagName === 'SELECT') {
                    updateSelectState(this);
                }
            });

            input.addEventListener('change', function() {
                if (this.tagName === 'SELECT') {
                    updateSelectState(this);
                }
            });
        });
    }

    function initFloatingSelects() {
        const selects = document.querySelectorAll('.floating-select__field');
        selects.forEach(select => {
            updateSelectState(select);
        });
    }

    function updateSelectState(select) {
        if (select.value !== '') {
            select.setAttribute('data-has-value', 'true');
        } else {
            select.removeAttribute('data-has-value');
        }
    }

    function validateForm() {
        const form = document.getElementById('leadForm');
        const nombre = form.querySelector('#nombre');
        const empresa = form.querySelector('#empresa');
        const correo = form.querySelector('#correo');
        const telefono = form.querySelector('#telefono');
        const tamano = form.querySelector('#tamano');

        let isValid = true;

        if (!validateField(nombre)) isValid = false;
        if (!validateField(empresa)) isValid = false;
        if (!validateField(correo)) isValid = false;
        if (!validateField(telefono)) isValid = false;
        if (!validateField(tamano)) isValid = false;

        return isValid;
    }

    function validateField(field) {
        const fieldName = field.getAttribute('name');
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        if (value === '') {
            isValid = false;
            errorMessage = 'Este campo es obligatorio';
        } else if (fieldName === 'correo') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Por favor ingrese un correo válido';
            }
        } else if (fieldName === 'telefono') {
            const phoneRegex = /^[\d\s\+\-\(\)]+$/;
            if (!phoneRegex.test(value) || value.length < 7) {
                isValid = false;
                errorMessage = 'Por favor ingrese un teléfono válido';
            }
        }

        const errorElement = document.querySelector(`[data-error="${fieldName}"]`);
        if (errorElement) {
            if (isValid) {
                field.classList.remove('error');
                errorElement.textContent = '';
                errorElement.classList.remove('visible');
            } else {
                field.classList.add('error');
                errorElement.textContent = errorMessage;
                errorElement.classList.add('visible');
            }
        }

        return isValid;
    }

    function clearFormErrors() {
        const form = document.getElementById('leadForm');
        const errorFields = form.querySelectorAll('.error');
        const errorMessages = form.querySelectorAll('.form-error');

        errorFields.forEach(field => field.classList.remove('error'));
        errorMessages.forEach(msg => {
            msg.textContent = '';
            msg.classList.remove('visible');
        });
    }

    function submitForm() {
        const form = document.getElementById('leadForm');
        const button = form.querySelector('button[type="submit"]');
        const buttonText = button.querySelector('.btn__text');
        const buttonLoader = button.querySelector('.btn__loader');

        const formData = {
            nombre: form.querySelector('#nombre').value.trim(),
            empresa: form.querySelector('#empresa').value.trim(),
            correo: form.querySelector('#correo').value.trim(),
            telefono: form.querySelector('#telefono').value.trim(),
            tamano: form.querySelector('#tamano').value
        };

        button.disabled = true;
        if (buttonText) buttonText.style.display = 'none';
        if (buttonLoader) buttonLoader.style.display = 'inline-block';

        console.log('Form submitted:', formData);

        setTimeout(function() {
            button.disabled = false;
            if (buttonText) buttonText.style.display = 'inline-block';
            if (buttonLoader) buttonLoader.style.display = 'none';

            showFormSuccess();
        }, 1500);
    }

    function showFormSuccess() {
        const form = document.getElementById('leadForm');
        const successMessage = document.getElementById('formSuccess');

        if (form) form.style.display = 'none';
        if (successMessage) successMessage.style.display = 'block';
    }

    // ========================================
    // MODAL
    // ========================================
    function initModal() {
        const modalTriggers = document.querySelectorAll('[data-modal]');
        const modalCloseButtons = document.querySelectorAll('[data-modal-close]');

        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                const modalName = this.getAttribute('data-modal');
                openModal(modalName);
            });
        });

        modalCloseButtons.forEach(button => {
            button.addEventListener('click', function() {
                closeAllModals();
            });
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeAllModals();
            }
        });
    }

    function openModal(modalName) {
        const modalId = 'modal' + modalName.charAt(0).toUpperCase() + modalName.slice(1);
        const modal = document.getElementById(modalId);
        
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    function closeAllModals() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.style.overflow = '';
    }

})();