// Select elements
const header = document.querySelector("#header");
const navLinks = document.querySelectorAll("#header .nav-link");
const navToggler = document.querySelector("#header .navbar-toggler");
const togglerIcon = navToggler.querySelector("span");

// Function to handle active class on nav links
const handleNavLinkClick = (event) => {
  navLinks.forEach((link) => link.classList.remove("active"));
  event.currentTarget.classList.add("active");
};

// Add click event listener to each nav link
navLinks.forEach((link) => link.addEventListener("click", handleNavLinkClick));

// Toggle header active class and icon
navToggler.addEventListener("click", () => {
  header.classList.toggle("active");
  togglerIcon.classList.toggle("fa-xmark");
});

// Change background color on scroll
const changeBackground = () => {
  if (window.scrollY > 100) {
    header.classList.add("scroll-bg");
  } else {
    header.classList.remove("scroll-bg");
  }
};

// Attach scroll event listener
window.addEventListener("scroll", changeBackground);

// Initial call to set the correct background color
changeBackground();
