const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");
const year = document.querySelector("#year");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent =
    "Thank you! This demo form is ready to be connected to a backend.";
  contactForm.reset();
});

year.textContent = new Date().getFullYear();
