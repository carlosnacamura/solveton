document.addEventListener('mousemove', parallax_header);
document.addEventListener('mousemove',parallax_circle);
document.addEventListener('mousemove',parallax_img)
function parallax_header(e) {
    const move = document.querySelector(".header-content")
    var moving_value = move.getAttribute('data-value');
    var x_header = (e.clientX - window.innerWidth / 2) / moving_value * 0.1;
    var y_header = (e.clientY - window.innerHeight / 2) / moving_value * 0.1;
    move.style.transform = "translateX(" + x_header + "px) translateY(" + y_header + "px)";
}
function parallax_circle(e){
    const circles = document.querySelectorAll(".circle_header")
    circles.forEach(circle => {
    var moving_value_circle = circle.getAttribute('data-value');
    var x_circle = (e.clientX - window.innerWidth / 2) / moving_value_circle * 0.2;
    var y_circle = (e.clientY - window.innerHeight / 2) / moving_value_circle * 0.2;
    circle.style.transform = "translateX(" + x_circle + "px) translateY(" + y_circle + "px)";
    });
}
function parallax_header(e) {
    const img = document.querySelector(".img_header")
    var moving_value = img.getAttribute('data-value');
    var x_img = (e.clientX - window.innerWidth / 2) / moving_value * 0.05;
    var y_img = (e.clientY - window.innerHeight / 2) / moving_value * 0.05;
    img.style.transform = "translateX(" + x_img + "px) translateY(" + y_img + "px)";
}