// Import Swiper core and required modules
import Swiper from 'swiper/bundle';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,  // Displays 1 slide at a time.
    centeredSlides: false,  // The slides are not centered by default.
    // slidesPerGroupSkip: 1,  // Allows skipping one slide when swiping.
    grabCursor: true,  // Changes the cursor to a grab icon when hovering over the Swiper.
    keyboard: {
        enabled: true,  // Enables keyboard control for navigation.
    },
    // breakpoints: {
    //     769: {  // When the screen width is 769px or more:
    //         slidesPerView: 2,  // Display 2 slides at a time.
    //         slidesPerGroup: 2,  // Slide 2 slides per navigation action.
    //     },
    // },
    scrollbar: {
        el: ".swiper-scrollbar",  // Activates a scrollbar element.
    },
    navigation: {
        nextEl: ".swiper-button-next",  // Element for the "next" button.
        prevEl: ".swiper-button-prev",  // Element for the "previous" button.
    },
    pagination: {
        el: ".swiper-pagination",  // Element for pagination indicators.
        clickable: true,  // Makes pagination indicators clickable.
    },
});
