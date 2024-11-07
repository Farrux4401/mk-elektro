// Import jQuery and set it as a global variable
import jquery from 'jquery';
window.$ = window.jQuery = $; // Make jQuery globally available
import select2 from 'select2';

$(function () {
    $('.js-example-basic-single').select2({
        placeholder: "Введите текст",
        allowClear: false
    });
});
