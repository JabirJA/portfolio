// Smooth scroll enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Scroll active link highlight
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-purple-400');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('text-purple-400');
    }
  });
});

// Toggle button (accordion-style)
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('svg');
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  });
});
  function openModal(title, images, description) {
    const modal = document.getElementById('projectModal');
    const modalImages = document.getElementById('modalImages');

    modalImages.innerHTML = '';
    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.className = 'w-64 sm:w-72 md:w-80 lg:w-96 max-h-[400px] object-cover rounded-xl flex-shrink-0';

      modalImages.appendChild(img);
    });

    modal.classList.remove('hidden');
  }

  document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('projectModal').classList.add('hidden');
  });

  // Allow closing when clicking outside content
  document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('projectModal')) {
      document.getElementById('projectModal').classList.add('hidden');
    }
  });
