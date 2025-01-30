try {
  // Simple form submission message
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thank you for your message! I'll get back to you soon.");
      document.getElementById("contactForm").reset();
    });
} catch (error) {
  console.log("no contact form on this page");
}

try {
  // Toggle mobile menu
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");

  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
} catch (error) {}
