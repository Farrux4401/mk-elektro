$(document).ready(function () {
    $('.mobile-menu__toggle').on('click', function () {
        $('.mobile-menu').toggle();
    });

    $('.mobile-menu__close').on('click', function () {
        $('.mobile-menu').hide();
    });
});