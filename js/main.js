/**
 * KreaLab — main.js
 * Vanilla JS, structured, production-ready, no dependencies.
 * Módulos: Navbar · ScrollAnimations · CounterUp · FAQ · PortfolioFilter · MobileMenu
 */

/* ============================================================
   UTILITY: debounce
   ============================================================ */
function debounce(fn, delay = 100) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/* ============================================================
   MODULE 1: NAVBAR — scroll state + active link
   ============================================================ */
const NavbarModule = (() => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const updateScrollState = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  // Highlight active nav link based on scroll position
  const navLinks = document.querySelectorAll('.navbar__link');
  const sections = document.querySelectorAll('main section[id]');

  const updateActiveLink = () => {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(link => {
          link.classList.remove('navbar__link--active');
          if (link.getAttribute('href') === `index.html` && id === 'inicio') {
            link.classList.add('navbar__link--active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', debounce(() => {
    updateScrollState();
    updateActiveLink();
  }, 16), { passive: true });

  // Initialize
  updateScrollState();
})();

/* ============================================================
   MODULE 2: MOBILE MENU
   ============================================================ */
const MobileMenuModule = (() => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navDrawer    = document.getElementById('nav-drawer');
  const icon         = hamburgerBtn?.querySelector('i');
  if (!hamburgerBtn || !navDrawer) return;

  let isOpen = false;

  const toggle = () => {
    isOpen = !isOpen;
    navDrawer.classList.toggle('open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    navDrawer.setAttribute('aria-hidden', String(!isOpen));
    if (icon) {
      icon.className = isOpen ? 'ph ph-x' : 'ph ph-list';
    }
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  hamburgerBtn.addEventListener('click', toggle);

  // Close on drawer link click
  navDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (isOpen) toggle();
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (isOpen && !hamburgerBtn.contains(e.target) && !navDrawer.contains(e.target)) {
      toggle();
    }
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) toggle();
  });
})();

/* ============================================================
   MODULE 3: SCROLL ANIMATIONS (IntersectionObserver)
   ============================================================ */
const ScrollAnimationsModule = (() => {
  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length) return;

  // Apply stagger delay from data-delay attribute
  elements.forEach(el => {
    const delay = el.getAttribute('data-delay');
    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  });

  elements.forEach(el => observer.observe(el));
})();

/* ============================================================
   MODULE 4: COUNTER ANIMATION
   ============================================================ */
const CounterModule = (() => {
  const counters = document.querySelectorAll('.stats__num[data-target]');
  if (!counters.length) return;

  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      const value = Math.round(eased * target);
      el.textContent = value.toLocaleString('es-PE') + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(counter => observer.observe(counter));
})();

/* ============================================================
   MODULE 5: PORTFOLIO FILTER
   ============================================================ */
const PortfolioFilterModule = (() => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const grid       = document.getElementById('portafolio-grid');
  if (!filterBtns.length || !grid) return;

  const items = grid.querySelectorAll('.port-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Actualizar botón activo
      filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');

      if (filter === 'all') {
        // Vista masonry vertical — quitar clase filtered
        grid.classList.remove('filtered-view');
        items.forEach(item => {
          item.style.display = '';
          item.classList.remove('is-visible');
          requestAnimationFrame(() => item.classList.add('is-visible'));
        });
      } else {
        // Vista horizontal — agregar clase filtered
        grid.classList.add('filtered-view');
        items.forEach(item => {
          const category = item.getAttribute('data-category');
          if (category === filter) {
            item.style.display = '';
            item.classList.remove('is-visible');
            requestAnimationFrame(() => item.classList.add('is-visible'));
          } else {
            item.style.display = 'none';
          }
        });
      }
    });
  });
})();

/* ============================================================
   MODULE 6: FAQ ACCORDION
   Manages open/close icon swap and single-open behavior.
   ============================================================ */
const FAQModule = (() => {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      const icon = item.querySelector('.faq-item__icon i');
      if (!icon) return;
      icon.className = item.open ? 'ph ph-x' : 'ph ph-plus';
    });
  });
})();

/* ============================================================
   MODULE 7: SMOOTH SCROLL for anchor links
   ============================================================ */
const SmoothScrollModule = (() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href').slice(1);
      const target   = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-height'), 10) || 68;

      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ============================================================
   MODULE 8: WHATSAPP FLOAT — hide on contact section visible
   ============================================================ */
const WAFloatModule = (() => {
  const waBtn     = document.querySelector('.wa-float');
  const contacto  = document.getElementById('contacto');
  if (!waBtn || !contacto) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      waBtn.style.opacity     = entry.isIntersecting ? '0' : '1';
      waBtn.style.pointerEvents = entry.isIntersecting ? 'none' : '';
    });
  }, { threshold: 0.3 });

  observer.observe(contacto);

  // Smooth opacity transition
  waBtn.style.transition = 'opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease';
})();

/* ============================================================
   INIT — log on ready
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  console.log('%cKreaLab v1.0 — Diseñado en Lima 🇵🇪', 
    'color:#E8502A; font-family:serif; font-size:14px; font-weight:bold;');
});
