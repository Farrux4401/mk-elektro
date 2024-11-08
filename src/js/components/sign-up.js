import jQuery from 'jquery';



// Modal functionality
$(document).ready(function () {
    // Open modal
    $('#openPopup').on('click', function (e) {
        e.preventDefault();
        $('#registrationModal').fadeIn(300);
        $('body').css('overflow', 'hidden');
    });

    // Close modal
    $('.modal__close').on('click', function () {
        $('#registrationModal').fadeOut(300);
        $('body').css('overflow', '');
    });

    // Close modal when clicking outside
    $(window).on('click', function (e) {
        if ($(e.target).is('.modal')) {
            $('#registrationModal').fadeOut(300);
            $('body').css('overflow', '');
        }
    });

    // Prevent modal from closing when clicking inside
    $('.modal__content').on('click', function (e) {
        e.stopPropagation();
    });
});

// Phone input formatting
$('.modal__phone-input').on('input', function () {
    let value = $(this).val().replace(/\D/g, '');
    let formattedValue = '';

    if (value.length > 0) {
        formattedValue += value.substring(0, 3);
        if (value.length > 3) {
            formattedValue += '-' + value.substring(3, 6);
        }
        if (value.length > 6) {
            formattedValue += '-' + value.substring(6, 8);
        }
        if (value.length > 8) {
            formattedValue += '-' + value.substring(8, 10);
        }
    }

    $(this).val(formattedValue);

});


