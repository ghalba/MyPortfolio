// js/script.js
// (Optional) Add interactivity: smooth scrolling, menu toggle for mobile, etc.

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});