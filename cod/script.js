// Add delay to fade-in animations
document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");
  fadeEls.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.3}s`;
  });
});

// Simple parallax effect on scroll
window.addEventListener("scroll", () => {
  const img = document.querySelector(".profile-img");
  const grid = document.querySelector(".grid-overlay");
  const scrollY = window.scrollY * 0.1;
  img.style.transform = `translateY(${scrollY}px)`;
  grid.style.transform = `translateY(${scrollY / 2}px)`;
});
