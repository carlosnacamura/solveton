const navbar = document.querySelector(".navbar");

addEventListener("scroll", () => {
  const y = window.scrollY;
  navbar.classList.toggle("navbarFix", y >= 685);
});
