document.addEventListener("DOMContentLoaded", function() {

    const carousel = document.querySelector('.carousel'); // Select the carousel container

    const slides = carousel.querySelectorAll('.carousel > div:nth-child(2)'); // Get all slide items

    // Get the Next and Previous buttons (First and Last divs)

    const firstNavButton = carousel.querySelector('div > div:first-child p'); // First button (Next)

    const lastNavButton = carousel.querySelector('div > div:last-child p'); // Last button (Previous)

    // Dynamically add unique IDs to the Next and Previous buttons
firstNavButton.id = "next-button";
lastNavButton.id = "prev-button";

    // Dynamically assign IDs to slides

    slides.forEach((slide, index) => {
slide.id = "slide-" + (index + 1);

    });

    // Add event listeners to the navigation buttons

    firstNavButton.addEventListener('click', goToNextSlide);

    lastNavButton.addEventListener('click', goToPreviousSlide);

    // Track the current slide index

    let currentSlideIndex = 0;

    // Function to go to the next slide

    function goToNextSlide() {

        if (currentSlideIndex < slides.length - 1) {

            currentSlideIndex++;

        } else {

            currentSlideIndex = 0; // Loop back to the first slide

        }

        updateCarousel();

    }

    // Function to go to the previous slide

    function goToPreviousSlide() {

        if (currentSlideIndex > 0) {

            currentSlideIndex--;

        } else {

            currentSlideIndex = slides.length - 1; // Loop back to the last slide

        }

        updateCarousel();

    }

    // Function to update the carousel view and show the current slide

    function updateCarousel() {

        slides.forEach((slide, index) => {

            if (index === currentSlideIndex) {

                slide.style.display = "block"; // Show the current slide

            } else {

                slide.style.display = "none"; // Hide all other slides

            }

        });

    }

    // Initialize the carousel by showing the first slide

    updateCarousel();

});
 console.log("HELLO")