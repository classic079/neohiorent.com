// NEO Rental Agent - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    mobileNav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      });
    });
  }

  // Header scroll effect
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = document.querySelector('header').offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function() {
        // Close other items
        faqItems.forEach(function(other) {
          if (other !== item) {
            other.classList.remove('active');
          }
        });
        // Toggle current item
        item.classList.toggle('active');
      });
    }
  });

  // Form validation
  const forms = document.querySelectorAll('form');
  forms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      let isValid = true;
      const requiredFields = form.querySelectorAll('[required]');

      requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
          field.style.borderColor = '#e74c3c';
        } else {
          field.classList.remove('error');
          field.style.borderColor = '';
        }
      });

      // Email validation
      const emailFields = form.querySelectorAll('input[type="email"]');
      emailFields.forEach(function(email) {
        if (email.value && !isValidEmail(email.value)) {
          isValid = false;
          email.classList.add('error');
          email.style.borderColor = '#e74c3c';
        }
      });

      // Phone validation
      const phoneFields = form.querySelectorAll('input[type="tel"]');
      phoneFields.forEach(function(phone) {
        if (phone.value && !isValidPhone(phone.value)) {
          isValid = false;
          phone.classList.add('error');
          phone.style.borderColor = '#e74c3c';
        }
      });

      if (!isValid) {
        e.preventDefault();
        alert('Please fill in all required fields correctly.');
      }
    });

    // Clear error styling on input
    form.querySelectorAll('input, select, textarea').forEach(function(field) {
      field.addEventListener('input', function() {
        this.style.borderColor = '';
        this.classList.remove('error');
      });
    });
  });

  // Email validation helper
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Phone validation helper
  function isValidPhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length >= 10;
  }

  // Animate elements on scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.service-card, .why-us-item, .lifecycle-card, .team-card').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // Add animate-in class styles
  const style = document.createElement('style');
  style.textContent = '.animate-in { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);

  // Update copyright year
  const yearElements = document.querySelectorAll('.current-year');
  yearElements.forEach(function(el) {
    el.textContent = new Date().getFullYear();
  });
});
