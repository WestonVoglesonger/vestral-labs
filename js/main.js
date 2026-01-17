/**
 * Vestral Labs - Main JavaScript
 * Minimal JS for mobile navigation toggle only.
 * No dependencies.
 */

(function() {
  'use strict';

  // Mobile navigation toggle
  function initMobileNav() {
    const toggle = document.querySelector('.nav__toggle');
    const links = document.querySelector('.nav__links');

    if (!toggle || !links) return;

    toggle.addEventListener('click', function() {
      links.classList.toggle('nav__links--open');

      // Update aria-expanded
      const isOpen = links.classList.contains('nav__links--open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!toggle.contains(event.target) && !links.contains(event.target)) {
        links.classList.remove('nav__links--open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when pressing escape
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        links.classList.remove('nav__links--open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll for anchor links (optional enhancement)
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Add active state to current page nav link
  function initActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      if (currentPath.endsWith(href) || (currentPath.endsWith('/') && href === 'index.html')) {
        link.classList.add('nav__link--active');
      }
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initMobileNav();
    initSmoothScroll();
    initActiveNavLink();
  }

})();
