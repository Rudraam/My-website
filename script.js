// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');

  let fromTop = window.scrollY + 60;
  document.querySelectorAll('.nav-links li a').forEach(link => {
    const section = document.querySelector(link.hash);
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else link.classList.remove('active');
  });
});

// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));

// Section fade-in
const sections = document.querySelectorAll('section');
sections.forEach((section, index) => { section.style.transitionDelay = `${index * 0.2}s`; });
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// Project cards entrance
const projectCards = document.querySelectorAll('.project-card');
const cardObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) setTimeout(() => { entry.target.classList.add('visible'); }, index * 150);
  });
}, { threshold: 0.2 });
projectCards.forEach(card => cardObserver.observe(card));

// Particle background
tsParticles.load("tsparticles", {
  fullScreen: { enable: true, zIndex: 0 },
  fpsLimit: 60,
  background: { color: "#0a0a0a" },
  particles: {
    number: { value: 120 },
    color: { value: ["#00f0ff", "#ff00ff","#ffff00"] },
    shape: { type: "circle" },
    opacity: { value: 0.3, random: true },
    size: { value: { min: 1, max: 3 } },
    move: { enable: true, speed: 2, direction: "none", random: true, outModes: "out" },
    links: { enable: true, distance: 150, color: "#00f0ff", opacity: 0.3, width: 1 }
  },
  interactivity: {
    events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
    modes: { repulse: { distance: 120 }, push: { quantity: 4 } }
  }
});

// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggleBtn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Hero typing effect
const heroTitle = "Hi, I'm Rudramani Dhiman";
const heroSubtitle = "AI Developer | Python Enthusiast | Building Intelligent Applications";
let i = 0, j = 0;

function typeTitle() {
  if (i < heroTitle.length) {
    document.getElementById("hero-title").textContent += heroTitle[i];
    i++;
    setTimeout(typeTitle, 100);
  } else typeSubtitle();
}

function typeSubtitle() {
  if (j < heroSubtitle.length) {
    document.getElementById("hero-subtitle").textContent += heroSubtitle[j];
    j++;
    setTimeout(typeSubtitle, 50);
  }
}

typeTitle();

// Contact button hover glow
const contactBtn = document.querySelector("#contact button");
contactBtn.addEventListener("mouseenter", () => { contactBtn.style.boxShadow = "0 0 15px #ff00ff"; });
contactBtn.addEventListener("mouseleave", () => { contactBtn.style.boxShadow = "none"; });
