$(document).ready(function () {
    $('.dropdown-toggle-lang').on('click', function () {
        $('.dropdown-menu-lang').toggleClass('show');
    });

    $('.dropdown-item').on('click', function () {
        const selectedText = $(this).text();
        $('.dropdown-item').removeClass('active');
        $(this).addClass('active');
        $('.dropdown-toggle-lang').html(`<img src="/assets/img/globus.svg" alt="Language/Currency" /> ${selectedText}`);
        $('.dropdown-menu-lang').removeClass('show');
    });

    // Close dropdown when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.dropdown-lang').length) {
            $('.dropdown-menu-lang').removeClass('show');
        }
    });
});