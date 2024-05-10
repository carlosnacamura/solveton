const navbar = document.querySelector(".top_header .navbar");

addEventListener("scroll", () => {
  const y = window.scrollY;
  navbar.classList.toggle("navbarFix", y > 860);
});
// Caso queria que a navbar apareça antes diminua os números da coordenada y