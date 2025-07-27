

(() => {
  // Scroll navbar styling
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('mainNavbar');
    if (navbar) {
      navbar.classList.toggle('navbar-scrolled', window.scrollY > 10);
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Counter animation
    const counters = document.querySelectorAll('.counter');

    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-count'), 10);

      if (!isNaN(target)) {
        let current = 0;
        const duration = 1000;
        const startTime = performance.now();

        const animate = (time) => {
          const elapsed = time - startTime;
          const progress = Math.min(elapsed / duration, 1);
          current = Math.floor(progress * target);
          counter.textContent = current;

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            counter.textContent = target;
          }
        };

        requestAnimationFrame(animate);
      }
    });
  });
})();



const testimonials = [
  {
    name: "Harriet Maxwell",
    position: "CEO at Google",
    image: "/assets/img/Harriet Maxwell.webp",
    message:
      "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you."
  },
  {
    name: "Carolyn Craig",
    position: "CEO at Facebook",
    image: "/assets/img/Carolyn Craig.webp",
    message:
      "A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes. However."
  },
  {
    name: "Carolyn Craig",
    position: "CEO at Facebook",
    image: "/assets/img/Carolyn Craig.webp",
    message:
      "A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes. However."
  },
  {
    name: "Harriet Maxwell",
    position: "CEO at Google",
    image: "/assets/img/Harriet Maxwell.webp",
    message:
      "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you."
  }
];

let currentIndex = 0;

function renderTestimonials() {
  const container = document.getElementById("testimonialContainer");
  if (!container) return;

  container.innerHTML = "";

  for (let i = 0; i < 2; i++) {
    const t = testimonials[(currentIndex + i) % testimonials.length];

    const col = document.createElement("div");
    col.className = "col-md-5 mb-4";

    col.innerHTML = `
      <div class="bg-white p-4 rounded shadow-sm text-start h-100">
        <div class="d-flex align-items-start gap-3">
          <img src="${t.image}" class="rounded-circle" width="40" height="40" alt="${t.name}">
          <p class="mb-1 small text-muted">${t.message}</p>
        </div>
        <div class="mt-3">
          <strong class="d-block user-name">${t.name}</strong>
          <small class="text-muted">${t.position}</small>
        </div>
      </div>
    `;

    container.appendChild(col);
  }
}

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 2) % testimonials.length;
    renderTestimonials();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 2 + testimonials.length) % testimonials.length;
    renderTestimonials();
  });

  renderTestimonials();
}
