const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("current", i === index);
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === " ") {
    current = Math.min(current + 1, slides.length - 1);
    showSlide(current);
  } else if (e.key === "ArrowLeft") {
    current = Math.max(current - 1, 0);
    showSlide(current);
  }
});

// Show the first slide
showSlide(current);
