const keywords = document.querySelectorAll(".keywords");
const colors = ["#9cf5ff", "#9ccdff", "#b0baff"];
let index = 0;
setInterval(() => {
  keywords[index].classList.toggle("keywordsFeature");
  keywords[index].style.color = colors[index];
}, 2000);
setInterval(() => {
  keywords[index].style.color = "#a0b0c2"
  index = (index + 1) % colors.length;
}, 4000);
// Achei que ia ser fácil....