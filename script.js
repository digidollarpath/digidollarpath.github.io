// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // Animate hamburger menu
  const spans = mobileMenu.querySelectorAll('span');
  spans.forEach(span => span.classList.toggle('active'));
});

// Newsletter form submission
const subscribeForm = document.getElementById('subscribe-form');

subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  
  // Here you would typically send this data to your backend
  console.log('Subscription data:', { name, email });
  
  // Show success message (in a real app, do this after successful API call)
  alert('Thank you for subscribing! You will receive our updates soon.');
  subscribeForm.reset();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add intersection observer for fade-in animations
const observerOptions = {
  root: null,
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});
