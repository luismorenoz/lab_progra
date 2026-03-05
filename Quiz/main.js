// ============================================================
//  PORTFOLIO - Luis Moreno Zúñiga · Junior Data Analyst
//  main.js
// ============================================================

// ── Language Toggle ──────────────────────────────────────────
const langBtns = document.querySelectorAll('.lang-toggle button');
langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    langBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ── Skill Bars Animation on Scroll ───────────────────────────
const skillsSection = document.querySelector('#habilidades');
if (skillsSection) {
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.bar-fill').forEach(bar => {
          const targetWidth = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => { bar.style.width = targetWidth; }, 100);
        });
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  barObserver.observe(skillsSection);
}

// ── Active Nav Link on Scroll ────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 80) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current
      ? 'var(--primary2)'
      : '';
  });
});

// ── Contact Form Submit ───────────────────────────────────────
const submitBtn = document.querySelector('.btn-submit');
if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    const name    = document.querySelector('input[type="text"]').value;
    const email   = document.querySelector('input[type="email"]').value;
    const subject = document.querySelectorAll('input[type="text"]')[1]?.value;
    const message = document.querySelector('textarea').value;

    if (!name || !email || !message) {
      submitBtn.textContent = '⚠ Completa todos los campos';
      submitBtn.style.background = '#ef4444';
      setTimeout(() => {
        submitBtn.innerHTML = '✈ Enviar Mensaje';
        submitBtn.style.background = '';
      }, 2500);
      return;
    }

    submitBtn.innerHTML = '✅ ¡Mensaje enviado!';
    submitBtn.style.background = 'var(--green)';
    submitBtn.style.color = '#0a0a14';
    setTimeout(() => {
      submitBtn.innerHTML = '✈ Enviar Mensaje';
      submitBtn.style.background = '';
      submitBtn.style.color = '';
    }, 3000);
  });
}

// ── Fade-in sections on scroll ───────────────────────────────
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .service-card, .info-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});
