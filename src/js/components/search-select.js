$(document).ready(function () {
    const $searchInput = $('#search-input');
    const $dropdown = $('#dropdown');

    $searchInput.on('focus', function () {
        $dropdown.addClass('show');
    });

    $searchInput.on('blur', function () {
        setTimeout(function () {
            $dropdown.removeClass('show');
        }, 200); // Delay to allow click on dropdown items
    });

    $('.search-container').on('click', function () {
        $(this).toggleClass('expanded')
    })

    // $(window).on('click', function () {
    //     $('.search-container').removeClass('expanded')
    // })
});