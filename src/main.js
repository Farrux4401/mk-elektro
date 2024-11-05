import $ from 'jquery';
import './js/page/index.js';
import { createSwiper } from './slider.js';

// Initialize Swiper when needed
createSwiper();

$(document).ready(function () {
    console.log('jQuery is working!');
});
