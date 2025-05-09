
    const carousel = document.querySelector(".carousel");
    const allDivs = carousel.querySelectorAll(":scope > div");
    console.log(allDivs);
    console.log("hello");


    // Assign next and prev buttons
    const nextBtn = allDivs[0].querySelector("p");
    const prevBtn = allDivs[allDivs.length - 1].querySelector("p");
   nextBtn.id = "next-button";
   prevBtn.id = "prev-button";
    // Get only the slide blocks (ignore first and last nav button blocks)
    const slides = Array.from(allDivs).slice(1, -1);
    // Give IDs to slide blocks
    slides.forEach((slide, index) => {
   slide.id = `slide-${index + 1}`;
    });
    let currentSlide = 0;
    // Show only the current slide
    function updateSlides() {
      slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? "flex" : "none";
      });
    }
    // Next Slide
    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlides();
    });
    // Previous Slide
    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlides();
    });
    // Initialize
    updateSlides();
   ;
   function updateCarousel() {
    slides.forEach((slide, index) => {
      slide.classList.remove('active-slide');
    });
    slides[currentSlideIndex].classList.add('active-slide');
   }