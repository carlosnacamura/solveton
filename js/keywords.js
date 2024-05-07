const keywords = document.querySelectorAll(".keywords");
const colors = ["blue", "tomato", "green"];
let index = 0;
setInterval(() => {
  keywords[index].style.color = colors[index];
  setTimeout(() => {
    keywords[index].style.color = "black";
    index = (index + 1) % colors.length;
  }, 2000);
}, 4000);
