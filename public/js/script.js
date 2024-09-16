const slides = document.querySelector('.slides');
let currentIndex = 0;
let direction = 1; // 1 for forward, -1 for backward
const slideCount = document.querySelectorAll('.slide').length;
let interval = setInterval(slideShow, 2000); // Slide every 4 seconds

function slideShow() {
  // Update the current index based on the direction
  currentIndex += direction;
  
  // Reverse direction when reaching the last or first slide
  if (currentIndex === slideCount - 1 || currentIndex === 0) {
    direction *= -1; // Reverse direction
  }
  
  slides.style.transition = "transform 0.5s ease-in-out";
  slides.style.transform = `translateX(-${100 * currentIndex}%)`;
}

// Pause the interval on hover
document.querySelector('.slider').addEventListener('mouseenter', () => {
  clearInterval(interval);
});

// Resume the interval when not hovering
document.querySelector('.slider').addEventListener('mouseleave', () => {
  interval = setInterval(slideShow, 4000);
});
