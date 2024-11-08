
$(document).ready(function () {
    // Modal toggle functionality
    const $signInModal = $('#signInModal');
    const $registrationModal = $('#registrationModal');

    // Toggle between sign in and registration modals
    $(document).on('click', '.modal__register a', function (e) {
        e.preventDefault();
        $signInModal.hide();
        $registrationModal.show();
    });

    $(document).on('click', '.modal__login a', function (e) {  // Fixed selector
        e.preventDefault();
        $registrationModal.hide();
        $signInModal.show();
    });

    // Close modal when clicking outside
    $(document).on('click', function (e) {
        if ($(e.target).is('.modal')) {
            $('.modal').hide();
            $('body').css('overflow', ''); // Restore body scroll
        }
    });

    // Close modal when clicking close button
    $(document).on('click', '.modal__close', function () {
        $('.modal').hide();
        $('body').css('overflow', ''); // Restore body scroll
    });

    // Open sign in modal when clicking login button
    $('#openPopup').on('click', function (e) {
        e.preventDefault();
        $signInModal.show();
        $('body').css('overflow', 'hidden'); // Prevent body scroll
    });
});
