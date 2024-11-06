import $ from 'jquery';


$(function () {
    const $catalogButton = $('.header-block__catalog');
    const $catalogDropdown = $('.catalog-dropdown');


    // Toggle dropdown on button click
    $catalogButton.on('click', function (e) {
        e.stopPropagation();
        $catalogDropdown.slideToggle(200);
    });

    // Close dropdown when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.catalog-dropdown').length && !$(e.target).closest('.header-block__catalog').length) {
            $catalogDropdown.slideUp(200);
        }
    });

    // Prevent dropdown from closing when clicking inside it
    $catalogDropdown.on('click', function (e) {
        e.stopPropagation();
    });
});
