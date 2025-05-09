const slider = document.getElementById('slider');
const originalSlides = Array.from(slider.children).slice(0, 6);
let slideWidth = slider.querySelector('img').offsetWidth + 10;
let currentIndex = 0;
let allowShift = true;

function getVisibleCount() {
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 768) return 2;
  return 3;
}

function shiftSlider() {
  slider.style.transition = 'transform 0.4s ease-in-out';
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  if (!allowShift) return;
  currentIndex++;
  shiftSlider();
  if (currentIndex >= originalSlides.length) {
    allowShift = false;
    setTimeout(() => {
      slider.style.transition = 'none';
      currentIndex = 0;
      slider.style.transform = `translateX(0)`;
      allowShift = true;
    }, 400);
  }
}

function prevSlide() {
  if (!allowShift) return;
  if (currentIndex <= 0) {
    allowShift = false;
    currentIndex = originalSlides.length;
    slider.style.transition = 'none';
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    setTimeout(() => {
      currentIndex--;
      slider.style.transition = 'transform 0.4s ease-in-out';
      shiftSlider();
      allowShift = true;
    }, 20);
  } else {
    currentIndex--;
    shiftSlider();
  }
}

window.addEventListener('resize', () => {
  slideWidth = slider.querySelector('img').offsetWidth + 10;
  shiftSlider();
});

setInterval(() => {
  nextSlide();
}, 3000);