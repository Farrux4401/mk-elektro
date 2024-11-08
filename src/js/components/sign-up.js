import $ from 'jquery';



// Modal functionality
$(document).ready(function () {
    // Open modal
    $('[data-open-modal]').on('click', function (e) {
        e.preventDefault();
        const targetModal = $(this).data('open-modal');
        $(`#${targetModal}`).fadeIn(300);
        $('body').css('overflow', 'hidden');
    });

    // Close modal
    $('.modal__close').on('click', function () {
        $(this).closest('.modal').fadeOut(300);
        $('body').css('overflow', '');
    });

    // Close modal when clicking outside
    $(window).on('click', function (e) {
        if ($(e.target).is('.modal')) {
            $(e.target).fadeOut(300);
            $('body').css('overflow', '');
        }
    });

    // ... rest of the code remains the same ...


});



const $signInModal = $('#signInModal');

// Add to your existing modal.js file
$('[data-open-modal="passwordRecovery"]').on('click', function (e) {
    e.preventDefault();
    $('#passwordRecoveryModal').fadeIn(300);
    $('body').css('overflow', 'hidden');
    $signInModal.hide();
    // $registrationModal.show();
});


// Add to your existing modal.js file
$('.modal__form').on('submit', function (e) {
    e.preventDefault();
    const email = $(this).find('input[type="email"]').val();

    // Example validation - replace with your actual validation logic
    if (!isValidEmail(email)) {
        $(this).find('input[type="email"]')
            .addClass('modal__input--error')
            .siblings('.modal__error')
            .show();
    } else {
        // Proceed with password recovery
        $(this).find('input[type="email"]')
            .removeClass('modal__input--error')
            .siblings('.modal__error')
            .hide();
    }
});

function isValidEmail(email) {
    // Add your email validation logic here
    return /\S+@\S+\.\S+/.test(email);
}