  const slidesContainer = document.querySelector(".slides");
    const slideElements = document.querySelectorAll(".slide");
    const totalSlides = slideElements.length;

    let slideIndex = 0;
    let slidesPerView = getSlidesPerView();

    function getSlidesPerView() {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 900) return 2;
      return 3;
    }

    function SlideWidths() {
      slidesPerView = getSlidesPerView();
      slideElements.forEach(slide => {
        slide.style.width = `${100 / slidesPerView}%`;
      });
      updatePosition();
    }

    function updatePosition() {
      const offset = -(slideIndex * (100 / slidesPerView));
      slidesContainer.style.transform = `translateX(${offset}%)`;
    }

    function prevSlide() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = totalSlides - slidesPerView;
      }
      updatePosition();
    }

    function nextSlide() {
      slideIndex++;
      if (slideIndex > totalSlides - slidesPerView) {
        slideIndex = 0;
      }
      updatePosition();
    }

    window.addEventListener("resize", () => {
      SlideWidths();
    });

    document.addEventListener("DOMContentLoaded", () => {
      SlideWidths();
      setInterval(nextSlide, 3000);
    });

    // tesstimonial js
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('prev-1');
    const nextBtn = document.getElementById('next-1');
    let current = 0;

    function showSlide() {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[current].classList.add('active');
    }

    nextBtn.addEventListener('click', function () {
        current = (current + 1) % slides.length;
        showSlide();
    });

    prevBtn.addEventListener('click', function () {
        current = (current - 1 + slides.length) % slides.length;
        showSlide();
    });

    setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide();
    }, 3000);