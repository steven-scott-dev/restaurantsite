// ==== MODERN RESTAURANT TEMPLATE ====
// JavaScript for navigation, menu gallery, contact form, etc.

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Sticky Navigation
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateActiveNavLink();
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Navigation Link
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`a[href="#${sectionId}"]`);
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }

    // Fade-in Animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const formObject = {};
            for (let [key, value] of formData.entries()) {
                formObject[key] = value;
            }
            if (validateForm(formObject)) {
                showFormMessage('Thank you for your reservation or inquiry! We will contact you soon.', 'success');
                contactForm.reset();
            }
        });
    }
    function validateForm(data) {
        const errors = [];
        if (!data.name || data.name.trim() === '') errors.push('Name is required');
        if (!data.email || data.email.trim() === '') errors.push('Email is required');
        else if (!isValidEmail(data.email)) errors.push('Please enter a valid email address');
        if (!data.service || data.service === '') errors.push('Please select a menu item');
        if (errors.length > 0) {
            showFormMessage(errors.join('<br>'), 'error');
            return false;
        }
        return true;
    }
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    function showFormMessage(message, type) {
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) existingMessage.remove();
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.innerHTML = message;
        messageDiv.style.cssText = `
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 5px;
            font-weight: 500;
            ${type === 'success'
                ? 'background: rgba(40, 167, 69, 0.1); color: #28a745; border: 1px solid #28a745;'
                : 'background: rgba(220, 53, 69, 0.1); color: #dc3545; border: 1px solid #dc3545;'
            }
        `;
        contactForm.insertBefore(messageDiv, contactForm.firstChild);
        setTimeout(() => { if (messageDiv.parentNode) messageDiv.remove(); }, 5000);
    }

    // Gallery Lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) openLightbox(img.src, img.alt);
        });
    });
    function openLightbox(src, alt) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox-overlay';
        lightbox.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.92); display: flex; align-items: center; justify-content: center;
            z-index: 9999; cursor: pointer; opacity: 0; transition: opacity 0.3s;
        `;
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.style.cssText = `
            max-width: 90%; max-height: 90%; object-fit: contain;
            border-radius: 10px; box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        `;
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cssText = `
            position: absolute; top: 20px; right: 30px; background: none; border: none;
            color: #f7b267; font-size: 3rem; cursor: pointer; z-index: 10000;
        `;
        lightbox.appendChild(img);
        lightbox.appendChild(closeBtn);
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        setTimeout(() => { lightbox.style.opacity = '1'; }, 10);
        function closeLightbox() {
            lightbox.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(lightbox);
                document.body.style.overflow = 'auto';
            }, 300);
        }
        lightbox.addEventListener('click', closeLightbox);
        closeBtn.addEventListener('click', closeLightbox);
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeLightbox();
        });
    }

    // Scroll to Top Button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed; bottom: 30px; right: 30px; width: 50px; height: 50px;
        background: linear-gradient(135deg, #b23c17, #f7b267); color: #fff;
        border: none; border-radius: 50%; cursor: pointer; font-size: 1.2rem;
        z-index: 1000; opacity: 0; visibility: hidden; transition: all 0.3s;
        box-shadow: 0 5px 15px rgba(178,60,23,0.15);
    `;
    document.body.appendChild(scrollTopBtn);
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});