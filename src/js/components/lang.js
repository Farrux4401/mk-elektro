$(document).ready(function () {
    $('.dropdown-toggle').on('click', function () {
        $('.dropdown-menu').toggleClass('show');
    });

    $('.dropdown-item').on('click', function () {
        const selectedText = $(this).text();
        $('.dropdown-item').removeClass('active');
        $(this).addClass('active');
        $('.dropdown-toggle').html(`<img src="/assets/img/globus.svg" alt="Language/Currency" /> ${selectedText}`);
        $('.dropdown-menu').removeClass('show');
    });

    // Close dropdown when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.dropdown-menu').removeClass('show');
        }
    });
});